import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Profile: undefined;
};

// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

