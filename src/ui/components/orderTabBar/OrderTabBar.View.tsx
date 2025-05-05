import {FC, memo} from 'react';
import {Pressable, View} from 'react-native';
import {TextUI} from '../../index.tsx';
import createStyles from './OrderTabBar.Styles.tsx';
import {OrderTabBarProps} from './OrderTabBar.Types.ts';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {MyOrdersStatusData} from '../../../common/utils/myOrdersStatusData/MyOrdersStatusData.tsx';

const OrderTabBar: FC<OrderTabBarProps> = props => {
  const {selectStatusOrder, statusOrder} = props;

  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.tabBarWrapper}>
      {MyOrdersStatusData.map(tabBar => (
        <Pressable
          key={tabBar.id}
          pointerEvents="box-only"
          style={styles.buttonWrapper}
          onPress={() => selectStatusOrder(tabBar.id)}>
          <TextUI text={tabBar.title} bold={statusOrder === tabBar.id} />
          <View
            style={[
              styles.selectCircle,
              {
                backgroundColor:
                  statusOrder === tabBar.id
                    ? colors.primary
                    : colors.backgroundMain,
              },
            ]}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default memo(OrderTabBar);
