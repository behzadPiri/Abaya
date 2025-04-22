import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Main.Types.ts';
import {InitialNavigation,AuthenticationNavigation} from '../index.tsx';


const Main = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="InitialNavigation">
        <Stack.Screen name="InitialNavigation" component={InitialNavigation} />
        <Stack.Screen name="AuthenticationNavigation" component={AuthenticationNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
