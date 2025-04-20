import {OnboardingModal} from './Onboarding.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {OnboardingScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';
import {useState} from 'react';
import {Animated, useAnimatedValue} from 'react-native';
import {width} from '../../../content/themes/Themes.tsx';

const useOnboardingViewModal=():OnboardingModal=>{

  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const [currentIndex, setCurrentIndex] = useState(0);

  // تعریف انیمیشن translateX برای حرکت افقی
  const translateX = useAnimatedValue(0);

  const handleNext = (index: number) => {
    if (index > 2) {
    } else {
      Animated.timing(translateX, {
        toValue: width * index,
        duration: 400,
        useNativeDriver: true,
      }).start(({finished}) => {
        setCurrentIndex(index);
      });
    }
  };

  const handleBack = (index: number) => {
    if (index  >-1) {
      Animated.timing(translateX, {
        toValue: width * index,
        duration: 400,
        useNativeDriver: true,
      }).start(({finished}) => {
        setCurrentIndex(index);
      });
    }
  };


  return {
    handleNext,
    translateX,
    handleBack,
    currentIndex,
  };
};

export default useOnboardingViewModal;
