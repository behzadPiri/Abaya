import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {StyleSheet} from 'react-native';

const createStyles=(colors:ThemeColorsType) =>StyleSheet.create({
  container:{
    backgroundColor:colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  }
})

export default createStyles;
