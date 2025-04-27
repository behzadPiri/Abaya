import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './AccountNavigator.Types.ts';
import {Profile,Vouchers} from '../../screens';

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

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
    </Stack.Navigator>
  );
};

export default AccountNavigator;
