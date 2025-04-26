import {FC} from 'react';
import {Pressable} from 'react-native';
import {TabIconButton} from '../../ui';
import createStyles from './BottomTabs.Styles.tsx';
import {Images} from '../../content/images/images.tsx';
import {RootStackParamList} from './BottomTabs.Types.ts';
import {Cart, Categories, Home, Account} from '../../screens';
import {useTheme} from '../../content/themes/ThemeProvider.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs: FC = () => {
  const Tabs = createBottomTabNavigator<RootStackParamList>();
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <Tabs.Navigator
      detachInactiveScreens
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        lazy: true,
        animation:"shift",
        headerShown: false,
        sceneStyle: styles.screens,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.container,
        tabBarLabelStyle: styles.label,
        tabBarIconStyle: styles.tabIcon,
      }}>

      {/*HOME*/}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => (
            <Pressable {...props}>{props.children}</Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIconButton
              icon={focused ? Images.home : Images.home_outline}
              focused={focused}
            />
          ),
        }}
      />

      {/*CATEGORIES*/}
      <Tabs.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarButton: props => (
            <Pressable {...props}>{props.children}</Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIconButton
              icon={focused ? Images.category : Images.category_outline}
              focused={focused}
            />
          ),
        }}
      />

      {/*CART*/}
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          // tabBarBadgeStyle: {display: 'flex'},
          // tabBarBadge: '2',
          tabBarButton: props => (
            <Pressable {...props}>{props.children}</Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIconButton
              icon={focused ? Images.bag : Images.bag_outline}
              focused={focused}
            />
          ),
        }}
      />

      {/*ACCOUNT*/}
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarButton: props => (
            <Pressable {...props}>{props.children}</Pressable>
          ),
          tabBarIcon: ({focused}) => (
            <TabIconButton
              icon={focused ? Images.user : Images.user_outline}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
