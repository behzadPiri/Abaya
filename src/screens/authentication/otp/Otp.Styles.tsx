import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../content/themes/Themes.tsx';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.backgroundMain,
    },
    scrollWrapper: {
      width: '100%',
      paddingHorizontal: 24,
      backgroundColor: colors.backgroundMain,
      flexGrow: 1,
      paddingBottom:12
    },
    title: {
      fontSize: Fonts.regular,
      textAlign: 'left',
      color: colors.textPrimary,
      marginBottom: 36,
    },
    buttonWrapper:{
      width: '100%',
      flexGrow:1,
      alignItems: 'center',
      justifyContent:"flex-end"
    },
    textError:{
      fontSize:Fonts.extraSmall,
      color:colors.error,
      marginTop:4
    },
    input: {
      marginTop:24
    }
  });

export default createStyles;
