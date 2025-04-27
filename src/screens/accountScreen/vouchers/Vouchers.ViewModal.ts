import {VouchersModal} from './Vouchers.Modal.ts';
import {useNavigation} from '@react-navigation/native';

const useVouchersViewModal=():VouchersModal=>{

  const navigation = useNavigation();

  const handleBack=()=>{

  }

  return {
    handleBack,
  };
};

export default useVouchersViewModal;
