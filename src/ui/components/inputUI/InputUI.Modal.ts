import {Animated} from 'react-native';
import {UseFormTrigger} from 'react-hook-form';

export interface InputUIModal {
  isFocused: boolean;
  handleFocus: () => void;
  handleBlur: (value: string) => void;
  handleInputChange: (
    text: string,
    fieldOnChange: (value: string) => void,
    fieldNameInput: string,
    trigger: UseFormTrigger<any>,
  ) => void;
  translateY: Animated.AnimatedInterpolation<string | number>;
  translateX: Animated.AnimatedInterpolation<string | number>;
  scale: Animated.AnimatedInterpolation<string | number>;
  padding_H: Animated.AnimatedInterpolation<string | number>;
}
