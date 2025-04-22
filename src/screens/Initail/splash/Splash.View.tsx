import {memo} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import createStyles from './Splash.Styles.tsx';
import LottieView from 'lottie-react-native';
import useSplashViewModal from './Splash.ViewModal.ts';
import {lottieFiles} from '../../../content/lotties/lottieFiles.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';

const Splash = () => {
  const {} = useSplashViewModal();
  const {colors} = useTheme();
  const styles=createStyles(colors)

  return (
    <SafeAreaView
      style={styles.container}>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={colors.backgroundBlack}
      />
      <LottieView
        loop
        autoPlay
        resizeMode={'center'}
        source={lottieFiles.Abaya}
        style={styles.lottieContainer}
      />
    </SafeAreaView>
  );
};

export default memo(Splash);
