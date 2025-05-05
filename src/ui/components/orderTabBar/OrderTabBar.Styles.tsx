import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {width} from '../../../content/themes/Themes.tsx';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    tabBarWrapper: {
      width: width,
      height: 48,
      backgroundColor: colors.backgroundMain,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      flexDirection: 'row',
      marginBottom: 12,
    },
    buttonWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '28%',
    },
    selectCircle:{
      width: 5,
      aspectRatio: 1,
      borderRadius: '100%',
    }
  });

export default createStyles;
