import {FC, memo} from 'react';
import {Animated, Image, Pressable, TextInput, View} from 'react-native';
import createStyles from './InputUI.Styles.tsx';
import {Controller} from 'react-hook-form';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {InputUIProps} from './InputUI.Types.ts';
import useInputViewModal from './InputUI.ViewModal.ts';
import {Images} from '../../../content/images/images.tsx';

const InputUI: FC<InputUIProps> = props => {
  const {
    ref,
    hint,
    name,
    control,
    trigger,
    rulesValid,
    editable = true,
    containerStyle,
    defaultValue = '',
    secretPassword = false,
    keyboardType = 'default',
  } = props;

  const {
    scale,
    secret,
    isFocused,
    padding_H,
    translateY,
    handleBlur,
    translateX,
    handleFocus,
    handleSecret,
    handleInputChange,
  } = useInputViewModal();

  const {colors} = useTheme();
  const styles = createStyles({
    scale,
    colors,
    editable,
    padding_H,
    translateX,
    translateY,
    secretPassword,
  });


  return (
    <View style={[styles.container, containerStyle]}>
      {/* انیمیشن placeholder*/}
      <View style={styles.hintWrapper}>
        <Animated.View style={styles.hintContainer}>
          <Animated.Text style={[styles.hint]}>{hint}</Animated.Text>
        </Animated.View>
      </View>

      {/*form controller Input*/}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rulesValid}
        render={({field}) => (
          <View style={styles.inputWrapper}>
            <TextInput
              ref={ref}
              textAlign="left"
              editable={editable}
              value={field.value}
              onFocus={handleFocus}
              focusable={isFocused}
              keyboardType={keyboardType}
              style={styles.input}
              selectionColor={colors.primary}
              secureTextEntry={secret&&secretPassword}
              cursorColor={colors.textPrimary}
              onBlur={() => handleBlur(field.value)}
              onChangeText={text =>
                handleInputChange(text, field.onChange, name, trigger)
              }
            />
            {secretPassword && (
              <Pressable onPress={handleSecret} style={styles.eyeButton}>
                <Image
                  source={secret ? Images.iconShow : Images.iconHide}
                  style={styles.iconEye}
                />
              </Pressable>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default memo(InputUI);
