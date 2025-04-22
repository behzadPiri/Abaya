import {StyleSheet} from 'react-native';
import {Fonts} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles = (
  colors: ThemeColorsType,
  disabled: boolean,
  outlineButton: boolean,
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 52,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: outlineButton ? 1 : 0,
      borderColor: colors.button,
      backgroundColor: outlineButton ? colors.backgroundMain : colors.button,
      overflow: 'hidden',
      opacity: disabled ? 0.4 : 1,
    },
    textButton: {
      fontSize: Fonts.regular,
      color: outlineButton ? colors.textPrimary : colors.textMain,
    },
    loadingButton: {
      width: 68,
      aspectRatio: 1,
    },
  });

export default createStyles;
