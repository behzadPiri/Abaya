import {useForm} from 'react-hook-form';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Otp.Styles.tsx';
import {ButtonUI, HeaderUI, InputUI, ShowTimer, TextUI} from '../../../ui';
import useOtpViewModal from './Otp.ViewModal.ts';
import {FieldName} from '../../../common/types/FieldName.ts';
import {validations} from '../../../common/validations/validationField/validationField.ts';
import {OtpTypes} from '../../../common/types/OtpTypes.ts';

const Otp = () => {
  const {minutes, seconds, setSeconds, setMinutes, handleNavigationBack} =
    useOtpViewModal();

  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
    trigger,
  } = useForm<OtpTypes>();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderUI
        shadow
        title={'Verify your identity'}
        onPressBack={handleNavigationBack}
      />

      <ScrollView
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        <TextUI
          style={styles.title}
          numberOfLines={2}
          text="Enter the 6-digit code we sent to your email"
        />

        <InputUI
          hint={'code'}
          control={control}
          trigger={trigger}
          name={FieldName.Otp}
          keyboardType="decimal-pad"
          containerStyle={styles.input}
          rulesValid={validations.otp}
        />
        {errors.otp && (
          <TextUI
            text={errors?.otp?.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        <ShowTimer
          GetOtpCodeAgain={() => {
            setSeconds(10)
          }}
          loadingTimer={false}
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        <View style={styles.buttonWrapper}>
          <ButtonUI disabled={!isValid} title="Verify Code" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;
