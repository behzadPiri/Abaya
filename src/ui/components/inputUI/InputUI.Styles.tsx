import {Animated, StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {Fonts} from '../../../content/themes/Themes.tsx';

type TCreateStyles = {
  colors: ThemeColorsType;
  editable?: boolean;
  secretPassword?: boolean;
  translateY: Animated.AnimatedInterpolation<string | number>;
  translateX: Animated.AnimatedInterpolation<string | number>;
  scale: Animated.AnimatedInterpolation<string | number>;
  padding_H: Animated.AnimatedInterpolation<string | number>;
};

const createStyles = ({
  colors,
  scale,
  padding_H,
  translateX,
  translateY,
  secretPassword,
  editable,
}: TCreateStyles) =>
  StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 8,
      minHeight: 60,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      justifyContent: 'center',
      position: 'relative',
      paddingVertical: 0,
      backgroundColor: colors.backgroundMain,
      opacity: editable ? 0.7 : 1,
    },
    inputWrapper: {
      flexDirection: 'row',
      backgroundColor: colors.backgroundMain,
    },
    input: {
      height: 50,
      zIndex: 10,
      width:secretPassword? '90%':"100%",
      paddingVertical: 0,
      fontSize: Fonts.medium,
      fontFamily: 'Poppins-Regular',
      backgroundColor: 'transparent',
      color: editable ? colors.textPrimary : colors.textDisabled,
    },
    hint: {
      fontFamily: 'Poppins-Regular',
      color: editable ? colors.textDisabled : colors.textPlaceholder,
      backgroundColor: colors.backgroundMain,
      paddingHorizontal: 4,
      zIndex: 5,
      transform: [{scale}],
    },
    hintContainer: {
      transform: [{translateY}, {translateX}],
      paddingHorizontal: padding_H,
      minWidth: 24,
      zIndex: 4,
    },
    hintWrapper: {
      height: 52,
      zIndex: 2,
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    eyeButton:{
      backgroundColor: colors.backgroundMain,
      width: '10%',
      height: 50,
      alignItems:"center",
      justifyContent:"center"
    },
    iconEye:{
      width:24,
      height:24,
      resizeMode:"contain"
    }
  });

export default createStyles;
