import { Page } from "../src/types";

const TUTORIAL_DATA: Map<Page, string[]> = new Map();

TUTORIAL_DATA.set("_Jammers", ["Use the + sign to invite more jammers to your room.", "Your room # is displayed at the bottom right.", "Use the volume slider to adjust the volume for each individual jammer."]);

TUTORIAL_DATA.set("_Drumkit", ["Swipe down with 3 fingers to enter sample configuration mode.", "Swip up with 3 fingers to open the menu.", "Swipe down with 3 fingers to close the menu."]);

TUTORIAL_DATA.set("_Config", ["Tap on any drumpad to chnage the sample attached to it."]);

TUTORIAL_DATA.set("_Samples", ["Tap on any sample to preview and set it as the current drumpad sample.", "Swipe down with 3 fingers to close the configuration menu."]);

TUTORIAL_DATA.set("_Keyboard", ["Swipe left and right with 3 fingers to +/- octaves.", "Swipe up with 3 fingers to open menu.", "Swipe down with 3 fingers to close menu."]);

export default TUTORIAL_DATA;