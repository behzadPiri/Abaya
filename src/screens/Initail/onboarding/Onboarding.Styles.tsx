import {StyleSheet} from 'react-native';
import {width} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.backgroundMain,
    },
    headerWrapper: {
      position: 'absolute',
    },
    button: {
      width: 48,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: colors.button,
    },
    icon: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
    iconNext: {
      tintColor: colors.textMain,
      transform: [{rotateY: '180deg'}]
    },
    footer: {
      width: width,
      height: '10%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    progressWrapper: {
      width: '50%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    progress: {
      width: 24,
      height: 8,
      borderRadius: 10,
      marginHorizontal: 4,
    },
    sliderWrapper: {
      width: width,
      height: '90%',
      flexDirection: 'row',
    },
  });

export default createStyles;
