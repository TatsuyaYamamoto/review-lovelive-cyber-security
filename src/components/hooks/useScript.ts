import { useEffect, useMemo, useState } from "react";

import {
  CharacterScript,
  LinesScript,
  ScriptType,
} from "@/resources/script/Script";
import { wait } from "@/helpers/utiles";

const useScript = (script: ScriptType[]) => {
  const [isFinished, handleFinished] = useState(false);

  const scriptBlocks = useMemo(() => {
    const _scriptBlocks: ScriptType[][] = [];
    let _scriptBlockIndex = 0;
    script.forEach((item) => {
      if (!_scriptBlocks[_scriptBlockIndex]) {
        _scriptBlocks[_scriptBlockIndex] = [];
      }
      _scriptBlocks[_scriptBlockIndex].push(item);

      if (item.type === "click") {
        _scriptBlockIndex += 1;
      }
    });
    return _scriptBlocks;
  }, [script]);

  const [
    currentCharacterScript,
    setCurrentCharacterScript,
  ] = useState<CharacterScript | null>(null);
  const [
    currentLinesScript,
    setCurrentLinesScript,
  ] = useState<LinesScript | null>(null);
  const [scriptBlockIndex, setScriptBlockIndex] = useState(0);
  const currentScriptBlock = scriptBlocks[scriptBlockIndex];
  const [isClickReady, handleClickReady] = useState(false);

  useEffect(() => {
    if (!currentScriptBlock) {
      handleFinished(true);
      return;
    }

    (async () => {
      for (const scriptItem of currentScriptBlock) {
        if (scriptItem.type === "click") {
        }
        if (scriptItem.type === "lines") {
          await wait(scriptItem.waitSeconds);
          setCurrentLinesScript(scriptItem);
        }
        if (scriptItem.type === "character") {
          await wait(scriptItem.waitSeconds);
          setCurrentCharacterScript(scriptItem);
        }
      }

      handleClickReady(true);
    })();
  }, [currentScriptBlock]);

  const moveForward = () => {
    if (!isClickReady) {
      return;
    }
    setScriptBlockIndex((value) => value + 1);
  };

  return {
    isFinished,
    currentCharacterScript,
    currentLinesScript,
    moveForward,
  };
};

export default useScript;
