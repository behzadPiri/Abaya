import {Animated, SafeAreaView, View} from 'react-native';
import {ContainerMyOrders, HeaderUI, OrderTabBar} from '../../../ui';
import createStyles from './MyOrders.Styles.tsx';
import useMyOrdersViewModal from './MyOrders.ViewModal.ts';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';

const MyOrders = () => {
  const {handleBack, statusOrder, selectStatusOrder, translateX} =
    useMyOrdersViewModal();

  const {colors} = useTheme();
  const styles = createStyles({colors: colors, translateX: translateX});

  return (
    <SafeAreaView style={styles.container}>

      <HeaderUI title={'My Orders'} onPressBack={handleBack} />

      <OrderTabBar
        statusOrder={statusOrder}
        selectStatusOrder={selectStatusOrder}
      />

      <View style={styles.animationWrapper}>

        <Animated.View style={styles.animationPage}>
          <ContainerMyOrders />
        </Animated.View>

        <Animated.View style={styles.animationPage}>
          <ContainerMyOrders />
        </Animated.View>

        <Animated.View style={styles.animationPage}>
          <ContainerMyOrders />
        </Animated.View>

      </View>

    </SafeAreaView>
  );
};

export default MyOrders;
