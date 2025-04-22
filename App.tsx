import {JSX} from 'react';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import ToastManager from 'toastify-react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/navigation';
import {useThemeColors} from './src/content/themes/Themes.tsx';
import {ThemeProvider} from './src/content/themes/ThemeProvider.tsx';

const App = (): JSX.Element => {
  const theme = Appearance.getColorScheme();
  const colors=useThemeColors()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <ThemeProvider>
        <StatusBar
          barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={colors.backgroundMain}
          animated
        />
        <MainNavigation />
        <ToastManager style={{minHeight: 60}} />
      </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
