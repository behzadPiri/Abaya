import {memo} from 'react';
import createStyles from './Onboarding.Styles';
import {HeaderUI, OnboardingSlide} from '../../../ui';
import {Images} from '../../../content/images/images.tsx';
import useOnboardingViewModal from './Onboarding.ViewModal.ts';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import {onboardingSlideData} from '../../../common/utils/onboardingSlideData/onboardingSlideData';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';

const Onboarding = () => {

  const {colors} = useTheme();
  const styles = createStyles(colors);

  const {currentIndex, handleBack, handleNext, translateX} =
    useOnboardingViewModal();

  return (
    <SafeAreaView style={styles.container}>
      {/* دکمه برگشت */}
      <View style={styles.headerWrapper}>
        <HeaderUI onPressBack={() => handleBack(currentIndex - 1)} />
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
                      ? colors.backgroundBlack
                      : colors.backgroundDark,
                },
              ]}
            />
          ))}
        </View>

        <Pressable
          onPress={() => handleNext(currentIndex + 1)}
          style={styles.button}>
          <Image
            source={Images.iconBack}
            style={[styles.icon, styles.iconNext]}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default memo(Onboarding);
