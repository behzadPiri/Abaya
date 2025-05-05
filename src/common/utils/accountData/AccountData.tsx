import {Images} from '../../../content/images/images.tsx';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationProp} from '../../../navigation/main/Main.Types.ts';

const navigation = useNavigation<AccountNavigationProp>();

export const AccountData = [
  {
    title: 'Profile',
    icon: Images.user_outline,
    onPress: () => navigation.navigate('AccountNavigator', {screen: 'Profile'}),
    endItem: false,
  },
  {
    title: 'Payment Methods',
    icon: Images.iconWallet,
    onPress: () => {},
    endItem: false,
  },
  {
    title: 'My Orders',
    icon: Images.iconOrder,
    onPress: () => navigation.navigate('AccountNavigator', {screen: 'MyOrders'}),
    endItem: false,
  },
  {
    title: 'Vouchers',
    icon: Images.iconTicket,
    onPress: () =>
      navigation.navigate('AccountNavigator', {screen: 'Vouchers'}),
    endItem: false,
  },
  {
    title: 'Settings',
    icon: Images.iconSetting,
    onPress: () => {},
    endItem: false,
  },
  {
    title: 'Help Center',
    icon: Images.iconInfo,
    onPress: () => {},
    endItem: false,
  },
  {
    title: 'Privacy Policy',
    icon: Images.iconLock,
    onPress: () => {},
    endItem: false,
  },
  {
    title: 'Invite Friends',
    icon: Images.iconUser_add,
    onPress: () => {},
    endItem: false,
  },
  {
    title: 'Log Out',
    icon: Images.iconSign_out,
    onPress: () => {},
    endItem: true,
  },
];
