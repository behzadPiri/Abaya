import {memo} from 'react';
import {TextUI} from '../../index.tsx';
import styles from './OnboardingSlide.Styles.tsx';
import {Animated, Image, View} from 'react-native';
import {OnboardingSlideProps} from './OnboardingSlide.Types.ts';
import { useThemeColors} from '../../../content/themes/Themes.tsx';


const OnboardingSlideView = (slider:OnboardingSlideProps) => {

  const Colors = useThemeColors();
  const {translateX,title,subtitle,image}=slider;

  return (
    <Animated.View
      style={[styles.container,{transform: [{translateX}]}]}>
      <Image source={image} style={styles.image} />
      <View style={styles.descriptionWrapper}>
        <TextUI text={title} bold style={styles.title} numberOfLines={2} />
        <TextUI text={subtitle} style={[styles.subtitle,{color: Colors.textSecondary}]} numberOfLines={4} />
      </View>
    </Animated.View>
  );
};

export default memo(OnboardingSlideView);
