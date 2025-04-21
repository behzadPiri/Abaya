import {memo} from 'react';
import {TextUI} from '../../index.tsx';
import styles from './HeaderUI.Styles.tsx';
import {HeaderUIProps} from './HeaderUI.Types.ts';
import {Images} from '../../../content/images/images.tsx';
import {useThemeColors} from '../../../content/themes/Themes.tsx';
import {Image, Pressable, SafeAreaView, View} from 'react-native';

const HeaderUI = (propsHeader:HeaderUIProps) => {

  const {
    title="",
    onPressFav,
    onPressCart,
    onPressBack,
    disableIconBack=false,
    disableIcon_Cart_Fav=true,
  }=propsHeader

  const Colors = useThemeColors();

  return (
    <SafeAreaView style={styles.headerContainer}>

      <View style={styles.iconWrapper}>
        {!disableIconBack && onPressBack && (
          <Pressable onPress={onPressBack} style={styles.button}>
            <Image source={Images.iconBack} style={[styles.icon, {tintColor: Colors.textPrimary}]} />
          </Pressable>
        )}
      </View>

      <View style={styles.titleWrapper}>
        <TextUI text={title} style={styles.title}/>
      </View>

      <View style={styles.iconWrapper}>
        {!disableIcon_Cart_Fav && onPressFav && (
          <Pressable onPress={onPressFav} style={styles.button}>
            <Image source={Images.iconFavorite} style={[styles.icon, {tintColor: Colors.textPrimary}]} />
          </Pressable>
        )}
        {!disableIcon_Cart_Fav && onPressCart && (
          <Pressable onPress={onPressCart} style={styles.button}>
            <Image source={Images.iconBag} style={[styles.icon, {tintColor: Colors.textPrimary}]} />
          </Pressable>
        )}
      </View>

    </SafeAreaView>
  );
};

export default memo(HeaderUI);
