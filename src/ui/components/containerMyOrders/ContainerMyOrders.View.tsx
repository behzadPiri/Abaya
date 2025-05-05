import {memo} from 'react';
import {OrderCart} from '../../index.tsx';
import {FlatList, Platform} from 'react-native';
import createStyles from './ContainerMyOrders.Styles.tsx';


const ContainerMyOrdersView = () => {

  const styles = createStyles();

  return (
    <FlatList
      data={[1, 2,3,4,5,6]}
      removeClippedSubviews={Platform.OS === 'android'}
      contentContainerStyle={styles.container}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => <OrderCart />}
    />
  );
};

export default memo(ContainerMyOrdersView);
