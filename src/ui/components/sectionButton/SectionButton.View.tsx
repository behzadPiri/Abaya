import {FC, memo} from 'react';
import {TextUI} from '../../index.tsx';
import {Image, Pressable, View} from 'react-native';
import createStyles from './SectionButton.Styles.tsx';
import {Images} from '../../../content/images/images.tsx';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import {SectionButtonProps} from './SectionButton.Types.ts';

const SectionButton: FC<SectionButtonProps> = ({
  icon,
  onPress,
  title,
  endItem,
}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors, endItem);

  return (
    <Pressable pointerEvents="box-only" style={styles.container} onPress={onPress}>
      <View style={styles.labelWrapper}>
        <Image source={icon} style={styles.icon} />
        <TextUI text={title} style={styles.title}/>
      </View>
      <Image
        source={Images.iconBack}
        style={[styles.icon, styles.forwardIcon]}
      />
    </Pressable>
  );
};

export default memo(SectionButton);
