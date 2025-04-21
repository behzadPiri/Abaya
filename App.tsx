import {JSX} from 'react';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import ToastManager from 'toastify-react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/navigation';
import {useThemeColors} from './src/content/themes/Themes.tsx';

const App = (): JSX.Element => {
  const theme = Appearance.getColorScheme();
  const Colors=useThemeColors()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.backgroundMain}
          animated
        />
        <MainNavigation />
        <ToastManager style={{minHeight: 60}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
