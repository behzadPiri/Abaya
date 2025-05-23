import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Authentication.Types.ts';
import {
  ForgotPassword,
  Login,
  Otp,
  Register,
  ResetPassword,
} from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios_from_left',
        animationDuration: 500,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default Authentication;
