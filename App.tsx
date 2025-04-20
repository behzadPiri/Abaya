import {JSX} from 'react';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import ToastManager from 'toastify-react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/navigation';

const App = (): JSX.Element => {
  const theme = Appearance.getColorScheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={'#ffffff'}
          animated
        />
        <MainNavigation />
        <ToastManager style={{minHeight: 60}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
