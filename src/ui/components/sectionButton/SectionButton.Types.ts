import {ImageProps} from 'react-native';

export interface SectionButtonProps {
  title: string;
  icon:ImageProps,
  onPress: () => void;
  endItem:boolean
}
