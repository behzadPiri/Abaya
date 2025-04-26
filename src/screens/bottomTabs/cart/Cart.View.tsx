import {SafeAreaView} from 'react-native';
import {TextUI} from '../../../ui';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Cart.Styles.tsx';

const Cart = () => {

  const {colors} = useTheme();
  const styles=createStyles(colors);


  return (
    <SafeAreaView style={styles.container}>
      <TextUI text="Cart" />
    </SafeAreaView>
  );
};

export default Cart;
