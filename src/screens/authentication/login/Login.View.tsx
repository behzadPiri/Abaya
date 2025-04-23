import {useForm} from 'react-hook-form';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import createStyles from './Login.Styles.tsx';
import useLoginViewModal from './Login.ViewModal.ts';
import {ButtonUI, SocialAuthOptions, TextUI} from '../../../ui';
import InputUI from '../../../ui/components/inputUI/InputUI.View.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {FieldName} from '../../../common/types/FieldName.ts';
import {validations} from '../../../common/validations/validationField/validationField.ts';
import {UserLoginTypes} from '../../../common/types/UserLoginTypes.ts';

const Login = () => {
  const {colors} = useTheme();
  const styles = createStyles({colors});
  const {handleLogin,handleForgotPassword} = useLoginViewModal();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<UserLoginTypes>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}>
        {/*تیتر */}
        <TextUI bold text="Lets Sign you in" style={styles.title} />
        <TextUI
          text={`Welcome Back ,${'\n'} You have been missed`}
          style={styles.subtitle}
          numberOfLines={3}
        />

        {/*فیلد ایمیل*/}
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

        {/*فیلد پسورد*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.password && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Password'}
          secretPassword
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

        {/*فراموشی پسورد*/}
        <Pressable style={styles.buttonForgotPassword} onPress={handleForgotPassword}>
          <TextUI text={'Forgot Password ?'} />
        </Pressable>

        {/*دکمه ورود*/}
        <ButtonUI
          title={'Sign in'}
          disabled={!isValid}
          onPressButton={() => console.log('')}
        />

        {/*ورود با کانت گوگل-فیسبوک-اپل*/}
        <SocialAuthOptions
          disable={false}
          onPressApple={() => console.log('Apple')}
          onPressGoogle={() => console.log('Google')}
          onPressFaceBook={() => console.log('Facebook')}
        />

        {/*فوتر */}
        <View style={styles.footerWrapper}>
          <View style={styles.footer}>
            <TextUI text={'Don’t have an account ?'} />
            <Pressable style={styles.buttonRegister} onPress={handleLogin}>
              <TextUI text={'Register Now'} bold />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
