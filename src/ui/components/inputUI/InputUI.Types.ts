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
  name: string;
  editable?: boolean;
  control: Control<any>;
  defaultValue?: string;
  secretPassword?: boolean;
  ref?: RefObject<TextInput>;
  rulesValid?: RegisterOptions;
  trigger: UseFormTrigger<any>;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: StyleProp<ViewStyle>;
}
