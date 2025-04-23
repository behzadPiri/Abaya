import {StyleSheet} from 'react-native';
import {Fonts} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

type TCreateStyles = {
  colors: ThemeColorsType;
};
const createStyles = ({colors}: TCreateStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: colors.backgroundMain,
      paddingTop: 52,
      paddingBottom: 24,
    },
    scrollWrapper: {
      width: '100%',
      flexGrow: 1,
    },
    title: {
      fontSize: Fonts.title,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: Fonts.large,
      marginBottom: 24,
    },
    input: {
      marginVertical: 8,
    },
    textError: {
      fontSize: Fonts.extraSmall,
      color: colors.error,
      marginTop: 8,
      paddingLeft: 4,
    },
    buttonWrapper: {
      marginTop: 36,
    },
    footerWrapper: {
      flexGrow: 1,
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
    },
    footer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonRegister: {
      backgroundColor: colors.backgroundMain,
      padding: 4,
    },
  });

export default createStyles;
