import {ForgotPasswordModal} from './ForgotPassword.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {ForgotPasswordScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useForgotPasswordViewModal = (): ForgotPasswordModal => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const handleNavigationBack = () => {
    navigation.goBack();
  };


  //  افزودن گوش دادن به فشردن دکمه بازگشت سخت افزاری موبایل
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);



  return {
    handleNavigationBack,
  };
};

export default useForgotPasswordViewModal;
