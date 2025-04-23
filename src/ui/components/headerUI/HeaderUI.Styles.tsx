import {StyleSheet} from 'react-native';
import {Fonts, width} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles=(colors:ThemeColorsType,shadow?:boolean) => StyleSheet.create({
  headerContainer: {
    width: width,
    backgroundColor:shadow? colors.backgroundMain:"transparent",
    height: 52,
    zIndex: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:12
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
    tintColor: colors.textPrimary
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
  shadowHeader:{
    shadowColor: colors.backgroundBlack,
    shadowOffset: {width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default createStyles;
