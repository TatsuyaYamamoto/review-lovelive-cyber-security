import { FC } from "react";

import styles from "./CharacterRenderer.module.scss";
import { Speaker } from "@/resources/script/Script";

export type CharacterRendererSource = {
  speaker: Speaker;
  position: number;
  type: "futsu";
}[];

export interface CharacterRendererProps {
  source: CharacterRendererSource;
}

const CharacterRenderer: FC<CharacterRendererProps> = (props) => {
  const { source } = props;
  const renderTargets =
    source?.map((s) => ({
      imageUrl: `/images/${s.speaker}_${s.type}.png`,
      position: s.position,
    })) || [];

  return (
    <div className={styles.renderer}>
      {renderTargets.map((target, index) => (
        <img
          key={index}
          src={target.imageUrl}
          style={{
            position: "absolute",
            bottom: 0,
            left: `${100 * target.position}%`,
            width: "70%",
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CharacterRenderer;
