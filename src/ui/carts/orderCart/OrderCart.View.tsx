import {FC, memo} from 'react';
import {TextUI} from '../../index.tsx';
import {Image, Pressable, View} from 'react-native';
import {Images} from '../../../content/images/images.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './OrderCart.Styles.tsx';
import {OrderCartProps} from './OrderCart.Types.ts';

const OrderCartView: FC<OrderCartProps> = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {/*image order*/}
      <View style={styles.imageWrapper}>
        <Image source={Images.clothing1} style={styles.image} />
      </View>

      {/*image infoWrapper*/}
      <View style={styles.infoWrapper}>
        {/*image name and qty*/}
        <View style={styles.infoRow}>
          <TextUI text="Abaya MoroccoAbaya" style={styles.nameOrder} />
          <View style={styles.quantityWrapper}>
            <TextUI text="1" />
          </View>
        </View>

        {/*size order*/}
        <View style={[styles.infoRow, {justifyContent: 'flex-start'}]}>
          <TextUI text="size:  " style={styles.size} />
          <TextUI text="M" style={styles.size} bold />
        </View>

        {/*price order*/}
        <View style={styles.infoRow}>
          <TextUI text="$120.00" style={styles.price} />
          <Pressable pointerEvents="box-only" style={styles.button}>
            <TextUI text="Track Order" bold style={styles.buttonText} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default memo(OrderCartView);
