import {Animated, StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {width} from '../../../content/themes/Themes.tsx';

interface ICreateStyles {
  colors: ThemeColorsType;
  translateX: Animated.AnimatedInterpolation<string | number>;
}

const createStyles = ({colors, translateX}:ICreateStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundMain,
    },
    animationWrapper: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    animationPage:{
      flexGrow: 1,
      width:width,
      transform: [{translateX}],
    }
  });

export default createStyles;
