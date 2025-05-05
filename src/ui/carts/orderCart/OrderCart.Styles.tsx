import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {Fonts} from '../../../content/themes/Themes.tsx';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      height: 140,
      width: '100%',
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor: colors.border,
      backgroundColor: colors.backgroundMain,
      marginBottom:12
    },
    imageWrapper: {
      width: '32%',
      aspectRatio: 1,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius: 8,
    },
    infoWrapper: {
      width: '68%',
      height: '100%',
      paddingLeft: 8,
    },
    infoRow: {
      height: '33%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    quantityWrapper: {
      width: '15%',
      aspectRatio: 1,
      borderWidth: 1,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.border,
    },
    button: {
      backgroundColor: colors.backgroundBlack,
      paddingHorizontal: 12,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      minWidth: '50%',
    },
    nameOrder: {
      fontSize: Fonts.regular,
      maxWidth: '85%',
    },
    price: {
      maxWidth: '50%',
    },
    size:{
      color:colors.textSecondary
    },
    buttonText:{
      color: colors.textMain,
    }
  });

export default createStyles;
