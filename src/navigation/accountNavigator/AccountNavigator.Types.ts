import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Profile: undefined;
  Vouchers: undefined;
  MyOrders: undefined;
};

// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;
export type VouchersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Vouchers'>;
export type MyOrdersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MyOrders'>;

