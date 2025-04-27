import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {Fonts, width} from '../../../content/themes/Themes.tsx';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 140,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: colors.backgroundMain,
      marginBottom:12
    },
    circleWrapper: {
      width: width,
      height: 50,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      zIndex: 30,
    },
    circle: {
      height: '100%',
      aspectRatio: 1,
      borderRadius: '100%',
      borderWidth: 1,
      backgroundColor: colors.backgroundMain,
    },
    voucherWrapper: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 20,
      borderWidth: 1,
      borderRadius: 12,
      overflow: 'hidden',
      paddingHorizontal: 24,
    },
    voucher: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    percentage: {
      height: '100%',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    percentageText: {
      fontSize: Fonts.display,
      marginTop: 8,
    },
    textVoucherWrapper: {
      height: '100%',
      width: '85%',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 12,
      paddingLeft:12
    },
    discount_code_Icon: {
      fontSize: Fonts.extraSmall,
      color: colors.textSecondary,
      alignSelf: 'flex-start',
    },
    discount_code: {
      fontSize: Fonts.extraSmall,
      color: colors.textSecondary,
      alignSelf: 'flex-start',
    },
    discount_code_text: {
      fontSize: Fonts.title,
      alignSelf: 'flex-start',
    },
    description: {
      fontSize: Fonts.small,
      alignSelf: 'flex-start',
      marginBottom:4
    },
    date_text: {
      fontSize: Fonts.extraSmall,
      color: colors.textSecondary,
      alignSelf: 'flex-start',
    }
  });

export default createStyles;
