import {useEffect, useState} from 'react';
import {OtpModal} from './Otp.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import { OtpScreenNavigationProp,} from '../../../navigation/authentication/Authentication.Types.ts';



const useOtpViewModal = (): OtpModal => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const navigation = useNavigation<OtpScreenNavigationProp>();

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
    minutes,
    seconds,
    setSeconds,
    setMinutes,
    handleNavigationBack,
  };
};

export default useOtpViewModal;
