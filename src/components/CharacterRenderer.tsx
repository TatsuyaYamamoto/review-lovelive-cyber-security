import { FC } from "react";

import styles from "./CharacterRenderer.module.scss";
import { CharacterScript } from "@/resources/script/Script";

export interface CharacterRendererProps {
  script: CharacterScript | null;
}

const CharacterRenderer: FC<CharacterRendererProps> = (props) => {
  const { script } = props;
  const renderTargets =
    script?.character.map((c) => ({
      imageUrl: `/images/${c.speaker}_${c.type}.png`,
      position: c.position,
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
