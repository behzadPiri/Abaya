import {Pressable} from 'react-native';
import createStyles from './ButtonUI.Styles';
import {TextUI} from '../../index';
import {ButtonUIProps} from './ButtonUI.Types';
import LottieView from 'lottie-react-native';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {lottieFiles} from '../../../content/lotties/lottieFiles.tsx';
// import lottieFiles from '../../../content/lottieFiles/lottieFiles.tsx';

const ButtonUI = (props: ButtonUIProps) => {

  const {
    title,
    onPressButton,
    loading = false,
    disabled = false,
    outlineButton = false,
  } = props;

  const {colors}=useTheme()
  const styles=createStyles(colors,disabled,outlineButton)

  const lottieFileColor = [
    {
      keypath: 'Shape Layer 6',
      color:outlineButton? colors.backgroundBlack:colors.backgroundMain,
    },
  ];

  return (

      <Pressable
        android_ripple={{color: colors.rippleAndroid, foreground: true}}
        disabled={disabled}
        onPress={onPressButton}
        style={styles.container}
        pointerEvents="box-only">
        {loading ? (
          <LottieView
            loop
            colorFilters={lottieFileColor}
            autoPlay
            resizeMode="cover"
            style={styles.loadingButton}
            source={lottieFiles.loadingButton}
          />
        ) : (
          <TextUI style={styles.textButton} text={title} bold />
        )}
      </Pressable>
  );
};

export default ButtonUI;
