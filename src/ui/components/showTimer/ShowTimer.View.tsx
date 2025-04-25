import {memo, useEffect,FC} from 'react';
import {Pressable, View} from 'react-native';
import {TextUI} from '../../index.tsx';
import createStyles from './ShowTimer.Styles.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {ShowTimerTypes} from './ShowTimer.Types.ts';


//کامپوننت ShowTimerView یک تایمر را برای شمارش معکوس برای ارسال مجدد کد نشان می‌دهد.
const ShowTimer:FC<ShowTimerTypes> = (props) => {

  const {
    minutes,
    setMinutes,
    loadingTimer,
    seconds,
    setSeconds,
    GetOtpCodeAgain,
  } = props;

  const {colors}=useTheme()
  const isEndTime=Boolean(minutes===0)&&Boolean(seconds===0)
  const styles=createStyles(colors,isEndTime)

  console.log("mmm",isEndTime);


  // برای مدیریت شمارش معکوس تایمر.
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View style={styles.timerWrapper}>

      {/* دکمه ارسال مجدد کد */}
      <Pressable
        disabled={(minutes > 0 && seconds > 0) || loadingTimer}
        onPress={GetOtpCodeAgain}>
        <TextUI style={styles.text} text={`Resend the code.`} />
      </Pressable>

      {/* نمایش زمان باقی‌مانده */}
      <View style={styles.timer}>
        {(minutes > 0 || seconds > 0) && (
          <TextUI
            text={`Time left : ${minutes}:${seconds<10?`0${seconds}`:seconds}`}
          style={styles.textTimer}
          />
        )}
      </View>

    </View>
  );
};

export default memo(ShowTimer);
