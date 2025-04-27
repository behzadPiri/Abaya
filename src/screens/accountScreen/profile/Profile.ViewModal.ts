import {ProfileModal} from './Profile.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from '../../../navigation/accountNavigator/AccountNavigator.Types.ts';


const useProfileViewModal=():ProfileModal=>{

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  }

  return {
    handleBack,
  };
};

export default useProfileViewModal;
