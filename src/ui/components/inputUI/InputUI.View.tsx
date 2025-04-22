import {FC, memo} from 'react';
import {Animated, TextInput, View} from 'react-native';
import createStyles from './InputUI.Styles.tsx';
import {Controller} from 'react-hook-form';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {InputUIProps} from './InputUI.Types.ts';
import useInputViewModal from './InputUI.ViewModal.ts';

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
    keyboardType = 'default',
  } = props;

  const {
    scale,
    isFocused,
    translateY,
    handleBlur,
    padding_H,
    translateX,
    handleFocus,
    handleInputChange,
  } = useInputViewModal();

  const {colors} = useTheme();
  const styles = createStyles({
    colors,
    editable,
    translateY,
    scale,
    padding_H,
    translateX,
  });

  return (
    <View style={[styles.container, containerStyle]}>

      {/* انیمیشن placeholder*/}
      <View style={styles.hintWrapper}>
        <Animated.View style={styles.hintContainer}>
          <Animated.Text style={[styles.hint]}>
            {hint}
          </Animated.Text>
        </Animated.View>
      </View>

      {/*form controller Input*/}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rulesValid}
        render={({field}) => (
          <TextInput
            ref={ref}
            textAlign="left"
            editable={editable}
            value={field.value}
            onFocus={handleFocus}
            focusable={isFocused}
            keyboardType={keyboardType}
            style={styles.inputWrapper}
            cursorColor={colors.textPrimary}
            onBlur={() => handleBlur(field.value)}
            onChangeText={text =>
              handleInputChange(text, field.onChange, name, trigger)
            }
          />
        )}
      />
    </View>
  );
};

export default memo(InputUI);
