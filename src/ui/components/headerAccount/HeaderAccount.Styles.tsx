import {StyleSheet} from 'react-native';
import {Fonts} from '../../../content/themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles=(colors:ThemeColorsType) => StyleSheet.create({
container:{
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.backgroundMain,
},
  imageWrapper:{
    width: '40%',
    aspectRatio: 1,
    marginBottom: 24,
    borderRadius: '100%',
    backgroundColor: colors.backgroundLight,
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode:"contain",
  },
  infoWrapper:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:24
  },
  name:{
  fontSize:Fonts.regular
  },
  email:{color: colors.textSecondary}
});

export default createStyles;
