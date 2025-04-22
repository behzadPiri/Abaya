import {StyleSheet} from 'react-native';
import {Fonts} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles = (colors:ThemeColorsType,bold?:boolean)=>StyleSheet.create({
  container: {
    fontSize: Fonts.medium,
    flexShrink: 1,
    textAlign:'left',
    color: colors.textPrimary,
    fontFamily: bold ? 'Poppins-Bold' : 'Poppins-Regular',
  },
});

export default createStyles;
