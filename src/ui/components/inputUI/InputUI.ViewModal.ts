import {useRef, useState} from 'react';
import {InputUIModal} from './InputUI.Modal.ts';
import {Animated} from 'react-native';
import {UseFormTrigger} from 'react-hook-form';
import {debounceValidation} from '../../../common/utils/debounceValidation/debounceValidation.tsx';

const useInputViewModal = (): InputUIModal => {

  const [isFocused, setIsFocused] = useState(false);
  const [secret, setSecret] = useState(true);

  // تعریف مقدار اولیه انیمیشن با useRef
  const animation = useRef(new Animated.Value(0)).current;

  const handleInputChange = (
    text: string,
    fieldOnChange: (value: string) => void,
    fieldNameInput: string,
    trigger: UseFormTrigger<any>,
  ) => {
    fieldOnChange(text);
    debounceValidation(fieldNameInput, trigger);
  };

  // تابع عمومی انیمیشن
  const animate = (toValue: number) => {
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // هندلر فوکوس
  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
      animate(1);
    }
  };

  // هندلر بلر
  const handleBlur = (value: string) => {
    if (!value && isFocused) {
      setIsFocused(false);
      animate(0);
    }
  };

  // هندلر نمایش پسورد
  const handleSecret = () => {
    setSecret(!secret);
  };

  // تنظیم انیمیشن‌ها
  const interpolate = (outputRange: [string | number, number | any]) =>
    animation.interpolate({
      inputRange: [0, 1],
      outputRange,
    });

  const translateY = interpolate([16, -15]); // حرکت عمودی
  const translateX = interpolate([0, 0]); // حرکت افقی
  const scale = interpolate([1, 0.8]); // تغییر اندازه
  const padding_H = interpolate([12, 8]); // تغییر اندازه

  return {
    scale,
    secret,
    isFocused,
    padding_H,
    translateY,
    handleBlur,
    translateX,
    handleFocus,
    handleSecret,
    handleInputChange,
  };
};

export default useInputViewModal;
