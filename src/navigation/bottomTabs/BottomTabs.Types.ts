import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Account: undefined;
};


// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type HomeScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Home'>;
export type CategoriesScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Categories'>;
export type CartScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Cart'>;
export type AccountScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Account'>;

