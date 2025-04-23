import {LoginModal} from './Login.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useLoginViewModal = (): LoginModal => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  // گوش دادن به فشردن دکمه بازگشت سخت افزاری موبایل
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return {
    handleLogin,
    handleForgotPassword
  };
};

export default useLoginViewModal;
