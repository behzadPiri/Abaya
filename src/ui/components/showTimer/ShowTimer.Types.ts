
export interface ShowTimerTypes {
  minutes: number; //دقایق باقی‌مانده
  setMinutes: (value: number) => void; //تابع تنظیم دقایق باقی‌مانده
  seconds: number; // ثانیه‌های باقی‌مانده
  setSeconds: (value: number) => void; // تابع تنظیم ثانیه‌های باقی‌مانده
  loadingTimer: boolean; // نشان می‌دهد آیا تایمر در حال بارگیری است یا نه
  GetOtpCodeAgain: () => void; // تابعی برای مدیریت ارسال مجدد کد
}
