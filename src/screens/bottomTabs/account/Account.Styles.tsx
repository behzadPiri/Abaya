import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {StyleSheet} from 'react-native';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundMain,
    },
    scrollWrapper: {
      flexGrow: 1,
      width: '100%',
      paddingHorizontal: 12,
      paddingTop: 12,
    },
  });

export default createStyles;
