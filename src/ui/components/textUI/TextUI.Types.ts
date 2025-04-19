import {TextStyle} from 'react-native';

export interface TextUITypes extends TextStyle {
  text?: string | number; // متن اصلی برای نمایش
  bold?: boolean; // آیا متن برجسته باشد؟
  numberOfLines?: number; // تعداد خطوط مجاز برای نمایش متن
  adjustsFontSizeToFit?: boolean; // آیا اندازه فونت برای جلوگیری از قطع کلمات تنظیم شود؟
  style?: object; // استایل اضافی برای متن
}
