import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Main.Types.ts';
import {
  AccountNavigator,
  AuthenticationNavigation,
  BottomTabs,
  InitialNavigation,
} from '../index.tsx';

const Main = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'ios_from_right',
          animationDuration: 400,
        }}
        initialRouteName="BottomTabs">
        <Stack.Screen name="InitialNavigation" component={InitialNavigation} />
        <Stack.Screen
          name="AuthenticationNavigation"
          component={AuthenticationNavigation}
        />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="AccountNavigator" component={AccountNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
