import {RegisterModal} from './Register.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {RegisterScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useRegisterViewModal = (): RegisterModal => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleRegister = () => {
    navigation.navigate('Login');
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
    handleRegister
  };
};

export default useRegisterViewModal;
