import {Image, Pressable, View} from 'react-native';
import {FC} from 'react';
import {SocialAuthOptionsProps} from './SocialAuthOptions.Types.ts';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './SocialAuthOptions.Styles.tsx';
import {TextUI} from '../../index.tsx';
import {Images} from '../../../content/images/images.tsx';

const SocialAuthOptions: FC<SocialAuthOptionsProps> = props => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {onPressApple, onPressGoogle, onPressFaceBook, disable = false} = props;

  return (
    <View style={styles.container}>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
        <TextUI text="OR" style={styles.title} bold />
        <View style={styles.divider} />
      </View>

      <View style={styles.dividerWrapper}>
        <Pressable
          disabled={disable}
          style={styles.iconWrapper}
          onPress={onPressGoogle}>
          <Image source={Images.iconGoogle} style={styles.icon} />
        </Pressable>
        <Pressable
          disabled={disable}
          style={styles.iconWrapper}
          onPress={onPressFaceBook}>
          <Image source={Images.iconFacebook} style={styles.icon} />
        </Pressable>
        <Pressable
          disabled={disable}
          style={styles.iconWrapper}
          onPress={onPressApple}>
          <Image source={Images.iconApple} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default SocialAuthOptions;
