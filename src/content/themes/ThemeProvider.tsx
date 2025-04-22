import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from './Themes.tsx';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  colors: typeof Colors.light;

}

interface ThemeProviderProps {
  children: ReactNode;
}

// اصلی برای تم context
const ThemeContext = createContext<ThemeContextType | null>(null);

//، یک هوک سفارشی برای دسترسی راحت به تم(رنگ ها)
export const useTheme = () => {
  const  ctx= useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme باید داخل ThemeProvider استفاده شود');
  return ctx;
};


//این فایل context، state، و logic کلی تم رو مدیریت می‌کنه
export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

  const systemTheme = Appearance.getColorScheme() ?? 'light';//گرفتن تم موبایل کاربر
  const [mode, setMode] = useState<ThemeMode>(systemTheme);

  const colors = Colors[mode];

  // ذخیره تم کاربر
  const saveTheme = async (newMode: ThemeMode) => {
    try {
      await AsyncStorage.setItem('app_theme', newMode);
    } catch (e) {
      console.warn('ذخیره تم انجام نشد', e);
    }
  };

  // تغییر تم به صورت دستی
  const handleSetMode = (newMode: ThemeMode) => {
    setMode(newMode);
    saveTheme(newMode);
  };

  // خواندن تم ذخیره‌شده از حافظه
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedMode = await AsyncStorage.getItem('app_theme');
        if (savedMode === 'light' || savedMode === 'dark') {
          setMode(savedMode);
        }
      } catch (e) {
        console.warn('خواندن تم انجام نشد', e);
      }
    };
    loadTheme();
  }, []);

  // گوش دادن به تغییرات تم سیستم
  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      if (colorScheme) {
        setMode(colorScheme);
      }
    });
    return () => listener.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{mode, setMode: handleSetMode, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};
