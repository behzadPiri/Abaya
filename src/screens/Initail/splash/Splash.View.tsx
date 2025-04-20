import {memo} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './Splash.Styles.tsx';
import {useThemeColors} from '../../../content/themes/Themes.tsx';
import LottieView from 'lottie-react-native';
import useSplashViewModal from './Splash.ViewModal.ts';
import {lottieFiles} from '../../../content/lotties/lottieFiles.tsx';

const Splash = () => {
  const {} = useSplashViewModal();
  const Colors = useThemeColors();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: Colors.backgroundBlack}]}>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.backgroundBlack}
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
