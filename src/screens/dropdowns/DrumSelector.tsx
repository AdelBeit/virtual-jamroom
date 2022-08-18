import React from "react";
import { Toolbar } from "../../components/Toolbar";
import styles from "./DropDown.module.css";
import cs from "classnames";
import { List, SoundClipItem } from "../../components/List";
import { useScreenStore, useSoundStore } from "../../utils/stores";
import {
  toms,
  kicks,
  snares,
  hihats,
  closedhats,
} from "../../utils/data/soundFiles";
import { nanoid } from "nanoid";

const DrumSelector = () => {
  const dropdown = useScreenStore((state) => state.selectedDropDown);
  const [selectedDrum, selectedSample] = useSoundStore((state) => [
    state.selectedDrumToEdit,
    state.drumSounds[state.selectedDrumToEdit],
  ]);
  const variant = "drum_selector";

  const soundFiles = {
    tom: toms,
    kick: kicks,
    snare: snares,
    hi_hat: hihats,
    closed_hat: closedhats,
  };

  return (
    <div
      className={cs(
        "dropdown_container",
        dropdown == variant && "drop",
        styles.drum_selector,
        styles.container
      )}
    >
      <List variant={variant}>
        {Object.keys(soundFiles[selectedDrum]).map((name) => (
          <SoundClipItem
            key={nanoid()}
            variant={name == selectedSample ? "drum_selected" : "drum_sample"}
            clipName={name}
          />
        ))}
      </List>
      <Toolbar variant="dropdown" />
    </div>
  );
};

export default DrumSelector;
