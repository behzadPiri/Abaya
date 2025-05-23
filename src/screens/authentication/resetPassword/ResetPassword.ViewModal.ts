import {ResetPasswordModal} from './ResetPassword.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {ResetPasswordScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useResetPasswordViewModal = (): ResetPasswordModal => {
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  //  افزودن گوش دادن به فشردن دکمه بازگشت سخت افزاری موبایل
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return {
    handleNavigationBack,
  };
};

export default useResetPasswordViewModal;
