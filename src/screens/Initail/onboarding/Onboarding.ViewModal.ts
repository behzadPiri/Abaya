import {OnboardingModal} from './Onboarding.Modal.ts';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {OnboardingScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';
import {useState} from 'react';
import {Animated, useAnimatedValue} from 'react-native';
import {width} from '../../../content/themes/Themes.tsx';

const useOnboardingViewModal=():OnboardingModal=>{

  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const [currentIndex, setCurrentIndex] = useState(0);

  // تعریف انیمیشن translateX برای حرکت افقی
  const translateX = useAnimatedValue(0);

  //اسلاید به صفحات جلو و در صفحه آخر navigate به صفحه login
  const handleNext = (index: number) => {
    if (index > 2) {
      navigation.dispatch(CommonActions.reset({
        index:0,
        routes: [{name: 'AuthenticationNavigation', params: {screen: 'Login'}}],
      }))
    } else {
      Animated.timing(translateX, {
        toValue: -width * index,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(index);
      });
    }
  };

  //اسلاید به صفحات قبلی
  const handleBack = (index: number) => {
    if (index  >-1) {
      Animated.timing(translateX, {
        toValue: -width * index,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
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
