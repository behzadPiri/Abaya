import {StyleSheet} from 'react-native';
import {Fonts, width} from '../../../content/themes/Themes.tsx';

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    backgroundColor: 'transparent',
    height: 52,
    zIndex: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 48,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  iconWrapper: {
    flexDirection: 'row',
    height: '100%',
    minWidth: 96,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  titleWrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize:Fonts.regular
  },
});

export default styles;
