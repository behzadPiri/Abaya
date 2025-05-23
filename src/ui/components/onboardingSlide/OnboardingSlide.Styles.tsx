import {StyleSheet} from 'react-native';
import {Fonts, height, width} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles =(colors:ThemeColorsType)=> StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    paddingHorizontal: 24,
  },
  image:{
    width: width * 0.8,
    height: width,
    resizeMode: 'contain',
  },
  descriptionWrapper: {
    marginTop:36
  },
  title:{
    fontSize: Fonts.title
  },
  subtitle:{
    fontSize: Fonts.regular,
    marginTop: 12,
    color: colors.textSecondary
  }
});

export default createStyles;
