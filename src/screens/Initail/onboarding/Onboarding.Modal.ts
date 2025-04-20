import {Animated,} from 'react-native';

export interface OnboardingModal {
  currentIndex: number;
  handleNext: (index: number) => void;
  handleBack: (index: number) => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
