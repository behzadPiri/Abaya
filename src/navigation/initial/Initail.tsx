import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Initial.Types.ts';
import {Onboarding, Splash} from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Initial = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
        animationDuration: 500,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default Initial;
