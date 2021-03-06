import { useEffect, useState } from "react";

import { ScriptType } from "@/resources/script/Script";
import { wait } from "@/helpers/utiles";
import { CharacterRendererSource } from "@/components/CharacterRenderer";
import { LinesSource } from "@/components/LinesTextbox";

const useScript = (scriptBlocks: ScriptType[][]) => {
  const [isFinished, handleFinished] = useState(false);

  const [
    characterRendererSource,
    setCharacterRendererSource,
  ] = useState<CharacterRendererSource>([]);
  const [linesSource, setLinesSource] = useState<LinesSource>({
    speaker: "blank",
  });
  const [scriptBlockIndex, setScriptBlockIndex] = useState(0);
  const [isClickReady, handleClickReady] = useState(false);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [isUserActionRequired, handleUserActionRequired] = useState(false);

  useEffect(() => {
    const currentScriptBlock = scriptBlocks[scriptBlockIndex];

    if (!currentScriptBlock) {
      handleFinished(true);
      return;
    }

    (async () => {
      for (const scriptItem of currentScriptBlock) {
        if (scriptItem.type === "lines") {
          await wait(scriptItem.waitSeconds);
          setLinesSource(scriptItem);
        }

        if (scriptItem.type === "character_clear") {
          setCharacterRendererSource([]);
        }

        if (scriptItem.type === "character") {
          await wait(scriptItem.waitSeconds);

          setCharacterRendererSource((current) => {
            return [
              // キャラクターの重複を避ける
              ...current.filter((currentItem) => {
                for (const { speaker } of scriptItem.character) {
                  if (currentItem.speaker === speaker) {
                    return false;
                  }
                }
                return true;
              }),
              ...scriptItem.character,
            ];
          });
        }

        if (scriptItem.type === "focus") {
          setFocusId(scriptItem.id);
        }

        if (scriptItem.type === "user_action") {
          handleUserActionRequired(true);
        }
      }

      handleClickReady(true);
    })();
  }, [scriptBlockIndex]);

  const moveForward = () => {
    if (!isClickReady) {
      return;
    }
    setScriptBlockIndex((value) => value + 1);
  };

  const resolveUserAction = () => {
    handleUserActionRequired(false);
    moveForward();
  };

  return {
    isFinished,
    characterRendererSource,
    linesSource,
    focusId,
    isUserActionRequired,
    moveForward,
    resolveUserAction,
  };
};

export default useScript;
