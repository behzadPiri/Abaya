import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {Fonts, width} from '../../../content/themes/Themes.tsx';

const createStyles = (colors: ThemeColorsType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundMain,
    },
    scrollWrapper: {
      flexGrow: 1,
      width: '100%',
      paddingHorizontal: 24,
      paddingTop: 12,
      backgroundColor: 'transparent',
    },
    imageWrapper: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height:width/3,
      backgroundColor: colors.backgroundMain,
      paddingVertical:8,
      marginBottom:24
    },
    image:{
      aspectRatio:1,
      height:"100%",
      resizeMode:"center",
      position:"relative",
      borderRadius:90,
      backgroundColor:colors.backgroundLight
    },
    editIconWrapper: {
      borderRadius:100,
      position:"absolute",
      bottom:0,
      right:8,
    },
    iconEdit:{
      width:28,
      height:28,
      resizeMode:"contain",
    },
    input: {
      marginVertical: 8,
    },
    textError: {
      fontSize: Fonts.extraSmall,
      color: colors.error,
      marginVertical: 2,
      paddingLeft: 4,
    },
    buttonWrapper: {
      marginTop: 36,
    },
  });

export default createStyles;
