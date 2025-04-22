import {memo} from 'react';
import {TextUI} from '../../index.tsx';
import createStyles from './HeaderUI.Styles.tsx';
import {HeaderUIProps} from './HeaderUI.Types.ts';
import {Images} from '../../../content/images/images.tsx';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';

const HeaderUI = (propsHeader: HeaderUIProps) => {
  const {
    title = '',
    onPressFav,
    onPressCart,
    onPressBack,
    disableIconBack = false,
    disableIcon_Cart_Fav = true,
  } = propsHeader;

  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* آیکون بازگشت*/}
      <View style={styles.iconWrapper}>
        {!disableIconBack && onPressBack && (
          <Pressable onPress={onPressBack} style={styles.button}>
            <Image source={Images.iconBack} style={styles.icon} />
          </Pressable>
        )}
      </View>

      {/*متن هدر*/}
      <View style={styles.titleWrapper}>
        <TextUI text={title} style={styles.title} />
      </View>

      {/* ایکون سبد خرید و علاقه مندی */}
      <View style={styles.iconWrapper}>
        {!disableIcon_Cart_Fav && onPressFav && (
          <Pressable onPress={onPressFav} style={styles.button}>
            <Image source={Images.iconFavorite} style={styles.icon} />
          </Pressable>
        )}
        {!disableIcon_Cart_Fav && onPressCart && (
          <Pressable onPress={onPressCart} style={styles.button}>
            <Image source={Images.iconBag} style={styles.icon} />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default memo(HeaderUI);
