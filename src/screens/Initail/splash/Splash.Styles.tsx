import {StyleSheet} from 'react-native';
import {height, width} from '../../../content/themes/Themes.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  lottieContainer: {
    width: width,
    aspectRatio: 1,
  },
});

export default styles;
