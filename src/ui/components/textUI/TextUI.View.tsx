import {memo} from 'react';
import {Text} from 'react-native';
import styles from './TextUI.Styles.tsx';
import {TextUITypes} from './TextUI.Types.ts';
import {useThemeColors} from '../../../content/themes/Themes.tsx';

const TextUIView = (textProps: TextUITypes) => {
  const {
    text,
    style,
    bold = false,
    numberOfLines = 1,
    adjustsFontSizeToFit = false,
    ...props
  } = textProps;

  const Colors = useThemeColors();


  const fontStyle = {
    fontFamily: bold ? 'Poppins-Bold' : 'Poppins-Regular',
    color: Colors.android_ripple,
  };

  return (
    <Text
      style={[styles.container, fontStyle, style]}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      {...props}>
      {text}
    </Text>
  );
};

export default memo(TextUIView);
