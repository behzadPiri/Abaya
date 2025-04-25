import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Authentication.Types.ts';
import {Login,Register,ForgotPassword,ResetPassword} from '../../screens';

const Authentication = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios_from_left',
        animationDuration: 500,
      }}
      initialRouteName="ResetPassword">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default Authentication;
