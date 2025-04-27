import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

// برای AccountNavigator
export type AccountNavigatorParamList = {
  Profile: undefined;
  Vouchers: undefined;
};

export type RootStackParamList = {
  InitialNavigation: undefined;
  AuthenticationNavigation: undefined;
  BottomTabs: undefined;
  AccountNavigator: NavigatorScreenParams<AccountNavigatorParamList>;
};
/*
* Note اینجا NavigatorScreenParams<AccountNavigatorParamList> داره میگه:
* AccountNavigator یک stack جداگونه هست و هر صفحه‌ای که توشه می‌تونه خودش پارامتر داشته باشه.
* */


// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type AccountNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AccountNavigator'>;
