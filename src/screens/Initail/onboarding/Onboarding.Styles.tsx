import {StyleSheet} from 'react-native';
import {width} from '../../../content/themes/Themes.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    width: width,
    position: 'absolute',
    backgroundColor: 'transparent',
    height:48 ,
    zIndex: 10,
    paddingHorizontal: 24,
    padding: 2,
    alignItems: 'flex-end',
  },
  button: {
    width: 48,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  footer: {
    width: width,
    height: '10%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  progressWrapper: {
    width: '50%',
    height: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  progress: {
    width: 24,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  sliderWrapper: {
    width: width,
    height: '90%',
    flexDirection: 'row',
  },
});

export default styles;
