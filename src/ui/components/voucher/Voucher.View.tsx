import {memo} from 'react';
import {View} from 'react-native';
import {TextUI} from '../../index.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Voucher.Styles.tsx';

const Voucher = () => {

  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {/*Circle*/}
      <View style={styles.circleWrapper}>
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>

      {/*Voucher*/}
      <View style={styles.voucherWrapper}>

        <View style={styles.voucher}>

          <View style={styles.percentage}>
            <TextUI text={'%'} style={styles.percentageText} />
          </View>

          <View style={styles.textVoucherWrapper}>
            <TextUI text={'GET2ITEM'} style={styles.discount_code} />
            <TextUI text={'50%'} style={styles.discount_code_text} />
            <TextUI text={'Buy 2 Items get 50% discount'} style={styles.description} />
            <TextUI text={'Valid until 01 February 2022'} style={styles.date_text} />
          </View>

        </View>
      </View>
    </View>
  );
};

export default memo(Voucher);
