import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {StyleSheet} from 'react-native';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      height: '100%',
      aspectRatio: 1,
      backgroundColor: 'transparent',
      alignItems:"center",
      justifyContent: 'center',

    },
    icon:{
      width:28,
      height:28,
      resizeMode: 'contain',
    }
  });

export default createStyles;
