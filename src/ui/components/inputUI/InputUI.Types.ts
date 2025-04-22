import {RefObject} from 'react';
import type {Control, RegisterOptions, UseFormTrigger} from 'react-hook-form';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';

export interface InputUIProps {
  hint: string;
  editable?: boolean;
  ref?: RefObject<TextInput>;
  keyboardType?: KeyboardTypeOptions;
  name: string;
  control: Control<any>;
  defaultValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  rulesValid?: RegisterOptions;
  trigger: UseFormTrigger<any>;
}
