import {SafeAreaView, ScrollView, View} from 'react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './ForgotPassword.Styles.tsx';
import {ButtonUI, HeaderUI, InputUI, TextUI} from '../../../ui';
import useForgotPasswordViewModal from './ForgotPassword.ViewModal.ts';
import {useForm} from 'react-hook-form';
import {validations} from '../../../common/validations/validationField/validationField.ts';
import {FieldName} from '../../../common/types/FieldName.ts';
import {ForgotPasswordTypes} from '../../../common/types/ForgotPasswordTypes.ts';

const ForgotPassword = () => {
  const {handleNavigationBack} = useForgotPasswordViewModal();

  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<ForgotPasswordTypes>();


  return (
    <SafeAreaView style={styles.container}>

      <HeaderUI shadow title={'Forgot Password'} onPressBack={handleNavigationBack} />

      <ScrollView
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        <TextUI
          style={styles.title}
          numberOfLines={3}
          text="Enter your email address and we’ll send you a code to reset your password."
        />
        <InputUI
          hint={"Email"}
          control={control}
          trigger={trigger}
          name={FieldName.Email}
          keyboardType={"email-address"}
          rulesValid={validations.email}
        />
        {
          errors.email&&
          <TextUI text={errors.email.message} numberOfLines={2} style={styles.textError}/>
        }

        <View style={styles.buttonWrapper}>
          <ButtonUI
            disabled={!isValid}
            title='Send Code'/>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
