import {Appearance, Dimensions} from 'react-native';
import {normalizeFont} from '../normalize/Normalize.tsx';
import {ThemeColorsType} from '../../common/types/ThemeColors.Type.ts';

export const {width, height} = Dimensions.get('window');

export const Colors: {[key: string]: ThemeColorsType} = {
  dark: {
    backgroundMain: '#ffffff',
    backgroundLight: '#F2F2F2',
    backgroundDark: '#7B7B7B',
    backgroundBlack: '#000000',
    textPrimary: '#000000',
    textMain: '#ffffff',
    textSecondary: '#888888',
    textPlaceholder: '#A0A0A0',
    textMuted: '#3A3A3A',
    textSubtle: '#555454',
    textDisabled: '#AAAAAA',
    error: '#FF2020',
    primary: '#DD8560',
    secondary: '#E2B190',
    secondaryDark: '#372A21',
    button: '#000000',
    border: '#DADADA',
    rippleAndroid: 'rgba(0,0,0,.2)',
  },
  light: {
    backgroundMain: '#ffffff',
    backgroundLight: '#F2F2F2',
    backgroundDark: '#7B7B7B',
    backgroundBlack: '#000000',
    textPrimary: '#000000',
    textMain: '#ffffff',
    textSecondary: '#888888',
    textPlaceholder: '#A0A0A0',
    textMuted: '#3A3A3A',
    textSubtle: '#555454',
    textDisabled: '#AAAAAA',
    error: '#FF2020',
    primary: '#DD8560',
    secondary: '#E2B190',
    secondaryDark: '#372A21',
    button: '#000000',
    border: '#DADADA',
    rippleAndroid: 'rgba(0,0,0,.2)',
  },
};

// هوک `useThemeColors` برای تعیین رنگ‌های تم (سایه روشن یا تاریک) بر اساس تنظیمات سیستم کاربر استفاده می‌شود.
// ابتدا، با استفاده از `Appearance.getColorScheme()` تم فعلی سیستم کاربر (تاریک یا روشن) گرفته می‌شود.
// سپس، بر اساس تم فعلی، رنگ‌های مناسب از `Colors.dark` یا `Colors.light` برگشت داده می‌شود.
export const useThemeColors = () => {
  const theme = Appearance.getColorScheme(); // تم سیستم کاربر را به صورت مستقیم بدون استفاده از هوک می‌گیریم
  return theme === 'dark' ? Colors.dark : Colors.light;
};

// این شیء `Fonts` شامل اندازه‌های مختلف فونت است که به‌طور معمول در طراحی رابط کاربری استفاده می‌شود.
export const Fonts = {
  extraSmall: normalizeFont(10), // اندازه مناسب برای متن‌های کوچک
  small: normalizeFont(12), // متن‌های کوچک و توضیحات
  medium: normalizeFont(14), // متن‌های عادی و توضیحات طولانی‌تر
  regular: normalizeFont(16), // متن‌های استاندارد
  large: normalizeFont(18), // برای مواردی که باید برجسته‌تر باشند
  extraLarge: normalizeFont(20), // مناسب برای زیرعنوان‌ها
  title: normalizeFont(26), // عنوان‌ها و سرصفحه‌های مهم
  header: normalizeFont(34), // تیترها و عنوان‌های اصلی
  display: normalizeFont(48), // متن‌های بسیار بزرگ مثل نمایشگر یا عناوین اصلی
};
