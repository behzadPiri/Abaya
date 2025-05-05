import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './AccountNavigator.Types.ts';
import {Profile, Vouchers,MyOrders} from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios_from_left',
        animationDuration: 500,
      }}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Vouchers" component={Vouchers} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
