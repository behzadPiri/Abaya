import React, { FC, memo, useState, useEffect } from 'react';
import { Animated, Image, View } from 'react-native';
import { useTheme } from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './TabIconButton.Styles.tsx';
import { TabIconButtonTypes } from './TabIconButton.Types.ts';

const TabIconButton: FC<TabIconButtonTypes> = ({ icon, focused }) => {

  // State برای انیمیشن
  const [scale] = useState(new Animated.Value(1)); // مقدار اولیه 1 یعنی سایز عادی

  // انیمیشن بزرگ کردن آیکن
  useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.1 : 1, // اگر فوکوس شد، اندازه رو بزرگتر کن
      duration: 200, // زمان انیمیشن
      useNativeDriver: true, // استفاده از Native Driver برای پرفورمنس بهتر
    }).start();
  }, [focused]); // وقتی focused تغییر کرد، انیمیشن رو اجرا کن


  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container} pointerEvents="box-none">
      <Animated.Image
        source={icon}
        style={[styles.icon, { transform: [{ scale }] }]} // انیمیشن اعمال شده روی scale
        alt="icon"
      />
    </View>
  );
};

export default memo(TabIconButton);
