import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonUIProps {
  title: string;
  loading?: boolean;
  outlineButton?: boolean;
  onPressButton?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}
