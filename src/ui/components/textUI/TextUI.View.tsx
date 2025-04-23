import {FC, memo} from 'react';
import {Text} from 'react-native';
import createStyles from './TextUI.Styles.tsx';
import {TextUITypes} from './TextUI.Types.ts';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';

const TextUIView: FC<TextUITypes> = textProps => {
  const {
    text,
    style,
    bold = false,
    numberOfLines = 1,
    adjustsFontSizeToFit = false,
    ...props
  } = textProps;

  const {colors} = useTheme();
  const styles = createStyles(colors, bold);

  return (
    <Text
      style={[styles.container, style]}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      {...props}>
      {text}
    </Text>
  );
};

export default memo(TextUIView);
