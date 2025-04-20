import {SplashModal} from './Splash.Modal.ts';
import {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SplashScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';

const useSplashViewModal = (): SplashModal => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Onboarding'}],
        }),
      );
    }, 3000);
    return () => clearTimeout(timer);
  },[navigation]);

  return {};
};

export default useSplashViewModal;
