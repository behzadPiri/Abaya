import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../common/types/ThemeColors.Type.ts';

const createStyles=(colors:ThemeColorsType) =>StyleSheet.create({
  container:{
    backgroundColor:colors.backgroundMain,
    minHeight: 60,
  },
  screens:{
    backgroundColor:colors.primary,
  },
  tabIcon:{
    height:"100%",
  },
  label:{
    display:"none",
  }
})

export default createStyles;
