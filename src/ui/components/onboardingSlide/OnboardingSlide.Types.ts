import { ImageSourcePropType } from 'react-native';
import {Animated} from 'react-native';

export interface OnboardingSlideProps {
  title: string;
  image: ImageSourcePropType;
  subtitle: string;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
