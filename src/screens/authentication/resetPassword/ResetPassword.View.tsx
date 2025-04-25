import {SafeAreaView, ScrollView, View} from 'react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './ResetPassword.Styles.tsx';
import {ButtonUI, HeaderUI, InputUI, TextUI} from '../../../ui';
import useResetPasswordViewModal from './ResetPassword.ViewModal.ts';
import {useForm} from 'react-hook-form';
import {validations,confirmPasswordValidation} from '../../../common/validations/validationField/validationField.ts';
import {FieldName} from '../../../common/types/FieldName.ts';
import {ResetPasswordTypes} from '../../../common/types/ResetPasswordTypes.ts';

const ResetPassword = () => {
  const {handleNavigationBack} = useResetPasswordViewModal();

  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
    trigger,
  } = useForm<ResetPasswordTypes>();


  return (
    <SafeAreaView style={styles.container}>

      <HeaderUI shadow title={'Reset your password'} onPressBack={handleNavigationBack} />

      <ScrollView
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        <TextUI
          style={styles.title}
          numberOfLines={2}
          text="Enter a strong new password and confirm it."
        />
        <InputUI
          hint={"New Password"}
          control={control}
          trigger={trigger}
          name={FieldName.NewPassword}
          secretPassword
          containerStyle={styles.input}
          rulesValid={validations.password}
        />
        {
          errors.newPassword&&
          <TextUI text={errors.newPassword.message} numberOfLines={2} style={styles.textError}/>
        }
        <InputUI
          hint={"Confirm Password"}
          control={control}
          trigger={trigger}
          name={FieldName.ConfirmPassword}
          secretPassword
          containerStyle={styles.input}
          rulesValid={confirmPasswordValidation(getValues)}
        />
        {
          errors.confirmPassword&&
          <TextUI text={errors.confirmPassword.message} numberOfLines={2} style={styles.textError}/>
        }

        <View style={styles.buttonWrapper}>
          <ButtonUI
            disabled={!isValid}
            title='Reset Password'/>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
