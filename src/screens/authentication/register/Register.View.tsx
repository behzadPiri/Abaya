import {useForm} from 'react-hook-form';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import createStyles from './Register.Styles.tsx';
import useRegisterViewModal from './Register.ViewModal.ts';
import {ButtonUI, SocialAuthOptions, TextUI} from '../../../ui';
import InputUI from '../../../ui/components/inputUI/InputUI.View.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {FieldName} from '../../../common/types/FieldName.ts';
import {validations} from '../../../common/validations/validationField/validationField.ts';
import {UserRegisterTypes} from '../../../common/types/UserRegisterTypes.ts';

const Register = () => {
  const {colors} = useTheme();
  const styles = createStyles({colors});
  const {handleRegister} = useRegisterViewModal();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<UserRegisterTypes>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>

        {/*تیتر*/}
        <TextUI bold text="Lets Register Account" style={styles.title} />
        <TextUI
          text={`Hello user, You have a grateful${'\n'}journey waiting for you`}
          style={styles.subtitle}
          numberOfLines={3}
        />

        {/*فیلد نام کاربر*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.name && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Name'}
          name={FieldName.FullName}
          trigger={trigger}
          keyboardType={'default'}
          rulesValid={validations.fullName}
        />
        {errors.name && (
          <TextUI
            text={errors.name.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        {/*فیلد ایمیل کاربر*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.email && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Email'}
          name={FieldName.Email}
          trigger={trigger}
          keyboardType={'email-address'}
          rulesValid={validations.email}
        />
        {errors.email && (
          <TextUI
            text={errors.email.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        {/*فیلد شماره موبایل کاربر*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.phone && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Phone'}
          name={FieldName.PhoneNumber}
          trigger={trigger}
          keyboardType={'number-pad'}
          rulesValid={validations.mobile}
        />
        {errors.phone && (
          <TextUI
            text={errors.phone.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        {/*فیلد گذرواژه کاربر*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.password && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Password'}
          name={FieldName.Password}
          trigger={trigger}
          keyboardType="visible-password"
          rulesValid={validations.password}
        />
        {errors.password && (
          <TextUI
            text={errors.password.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        {/*دکمه ثبت نام*/}
        <ButtonUI
          title={'Register'}
          disabled={!isValid}
          style={styles.buttonWrapper}
          onPressButton={() => console.log('')}
        />

        {/*ثبت نام با کانت گوگل-فیسبوک-اپل*/}
        <SocialAuthOptions
          disable={false}
          onPressApple={() => console.log('Apple')}
          onPressGoogle={() => console.log('Google')}
          onPressFaceBook={() => console.log('Facebook')}
        />

        {/*فوتر*/}
        <View style={styles.footerWrapper}>
          <View style={styles.footer}>
            <TextUI text={'Already have an account ?'} />
            <Pressable style={styles.buttonRegister} onPress={handleRegister}>
              <TextUI text={'Login'} bold />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
