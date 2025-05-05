import {useEffect, useState} from 'react';
import {MyOrdersModal} from './MyOrders.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {Animated, useAnimatedValue} from 'react-native';
import {width} from '../../../content/themes/Themes.tsx';

const useMyOrdersViewModal = (): MyOrdersModal => {

  const [statusOrder, setStatusOrder] = useState<number>(0);
  const navigation = useNavigation();

  // تعریف انیمیشن translateX برای حرکت افقی
  const translateX = useAnimatedValue(0);

  const handleBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: -width * statusOrder,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }, [statusOrder]);

  const selectStatusOrder = (statusId: number) => {
    setStatusOrder(statusId);
  }

  return {
    handleBack,
    statusOrder,
    translateX,
    selectStatusOrder,
  };
};

export default useMyOrdersViewModal;
