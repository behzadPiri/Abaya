import {memo} from 'react';
import {HeaderUI, TextUI, Voucher} from '../../../ui';
import {FlatList, SafeAreaView, View} from 'react-native';
import createStyles from './Vouchers.Styles.tsx';
import useVouchersViewModal from './Vouchers.ViewModal.ts';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {width} from '../../../content/themes/Themes.tsx';

const Vouchers = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {handleBack} = useVouchersViewModal();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderUI title="Vouchers" onPressBack={handleBack} />

      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (<Voucher/>)}
      />
    </SafeAreaView>
  );
};

export default memo(Vouchers);
