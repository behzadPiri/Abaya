import { StyleSheet } from "react-native";

import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';


const createStyles =(colors:ThemeColorsType,isEndTime:boolean) =>StyleSheet.create({
  timerWrapper: {
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundMain,
    flexDirection: "row",
    marginTop: 24
  },
  timer: {
    width: "50%",
    alignItems: "flex-end",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  textTimer: {
    color:colors.textPrimary
  },
  text: {
    color:!isEndTime?colors.textDisabled: colors.textPrimary
  }
});

export default createStyles;
