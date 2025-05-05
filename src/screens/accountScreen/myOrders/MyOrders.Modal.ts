import {Animated} from 'react-native';

export interface MyOrdersModal {
  handleBack: () => void;
  statusOrder: number;
  selectStatusOrder: (statusId: number) => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
