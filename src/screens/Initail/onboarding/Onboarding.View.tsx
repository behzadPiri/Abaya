import {memo} from 'react';
import styles from './Onboarding.Styles';
import {HeaderUI, OnboardingSlide} from '../../../ui';
import {Images} from '../../../content/images/images.tsx';
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
      <View style={styles.headerWrapper}>
       <HeaderUI onPressBack={()=>handleBack(currentIndex-1)}/>
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
