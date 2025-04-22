
import {StyleSheet} from 'react-native';
import {height, width} from '../../../content/themes/Themes';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts'; // اگر لازم شد تایپ رو وارد کن

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.backgroundBlack,
    },
    lottieContainer: {
      width: width,
      aspectRatio: 1,
    },
  });

export default createStyles;
