import {Image, View} from 'react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './HeaderAccount.Styles.tsx';
import {TextUI} from '../../index.tsx';
import {Images} from '../../../content/images/images.tsx';

const HeaderAccount = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={Images.user_outline} style={styles.image} />
      </View>

      <View style={styles.infoWrapper}>
        <TextUI text="behzad pire" style={styles.name} />
        <TextUI text="behzad.piri7@gmail.com" style={styles.email} />
      </View>
    </View>
  );
};

export default HeaderAccount;
