import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {StyleSheet} from 'react-native';

const createStyles = (colors:ThemeColorsType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.backgroundMain
  },
  scrollWrapper:{
    flexGrow:1,
    paddingHorizontal:24,
    backgroundColor:colors.backgroundMain
  }
});

export default createStyles;
