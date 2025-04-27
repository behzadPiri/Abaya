import {memo} from 'react';
import {Image, ImageBackground, Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import createStyles from './Profile.Styles.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {ButtonUI, HeaderUI, TextUI} from '../../../ui';
import useProfileViewModal from './Profile.ViewModal.ts';
import {Images} from '../../../content/images/images.tsx';
import {useForm} from 'react-hook-form';
import InputUI from '../../../ui/components/inputUI/InputUI.View.tsx';
import {FieldName} from '../../../common/types/FieldName.ts';
import {validations} from '../../../common/validations/validationField/validationField.ts';
import {ProfileTypes} from '../../../common/types/ProfileTypes.ts';

const Profile = () => {

  const {handleBack} = useProfileViewModal();

  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<ProfileTypes>();

  const onSubmit =(data: ProfileTypes) => {
    console.log("data", data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderUI title="Profile" onPressBack={handleBack} shadow />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrapper}>

        {/*ImageUser*/}
        <View style={styles.imageWrapper}>
          <ImageBackground style={styles.image} source={Images.user_outline}>
            <Pressable pointerEvents="box-only" style={styles.editIconWrapper}>
              <Image source={Images.iconEdit} style={styles.iconEdit} />
            </Pressable>
          </ImageBackground>
        </View>

        {/*فیلد نام کاربر*/}
        <InputUI
          containerStyle={[
            styles.input,
            errors.fullName && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Name'}
          name={FieldName.FullName}
          trigger={trigger}
          keyboardType={'default'}
          rulesValid={validations.fullName}
        />
        {errors.fullName && (
          <TextUI
            text={errors.fullName.message}
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
            errors.phoneNumber && {borderColor: colors.error},
          ]}
          control={control}
          hint={'Phone'}
          name={FieldName.PhoneNumber}
          trigger={trigger}
          keyboardType={'number-pad'}
          rulesValid={validations.mobile}
        />
        {errors.phoneNumber && (
          <TextUI
            text={errors.phoneNumber.message}
            numberOfLines={2}
            style={styles.textError}
          />
        )}

        {/*دکمه ثبت نام*/}
        <ButtonUI
          title={'Save'}
          disabled={!isValid}
          style={styles.buttonWrapper}
          onPressButton={handleSubmit(onSubmit)}
        />


      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Profile);
