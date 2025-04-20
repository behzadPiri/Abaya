import {memo} from 'react';
import styles from './Onboarding.Styles';
import {OnboardingSlide} from '../../../ui';
import {Images} from '../../../content/axiosConig/images';
import {useThemeColors} from '../../../content/themes/Themes';
import useOnboardingViewModal from './Onboarding.ViewModal.ts';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import {onboardingSlideData} from '../../../common/utils/onboardingSlideData/onboardingSlideData';

const Onboarding = () => {

  const Colors = useThemeColors();

  const {currentIndex, handleBack, handleNext, translateX} =
    useOnboardingViewModal();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: Colors.backgroundMain}]}>

      {/* دکمه برگشت */}
      <View
        style={[styles.header, {display: currentIndex > 0 ? 'flex' : 'none'}]}>
        <Pressable
          disabled={currentIndex <= 0}
          onPress={() => handleBack(currentIndex - 1)}
          style={styles.button}>
          <Image
            source={Images.iconBack}
            style={[styles.icon, {tintColor: Colors.textPrimary}]}
          />
        </Pressable>
      </View>

      {/* اسلایدها */}
      <View style={styles.sliderWrapper}>
        {onboardingSlideData.map(item => (
          <OnboardingSlide key={item?.id} translateX={translateX} {...item} />
        ))}
      </View>

      {/* footer & progress */}
      <View style={styles.footer}>
        <View style={styles.progressWrapper}>
          {onboardingSlideData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progress,
                {
                  backgroundColor:
                    index === currentIndex
                      ? Colors.backgroundBlack
                      : Colors.backgroundDark,
                },
              ]}
            />
          ))}
        </View>

        <Pressable
          onPress={() => handleNext(currentIndex + 1)}
          style={[styles.button, {backgroundColor: Colors.button}]}>
          <Image
            source={Images.iconBack}
            style={[
              styles.icon,
              {tintColor: Colors.textMain, transform: [{rotateY: '180deg'}]},
            ]}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default memo(Onboarding);
