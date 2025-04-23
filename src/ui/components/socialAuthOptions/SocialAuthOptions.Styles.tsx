import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles = (colors:ThemeColorsType)=>StyleSheet.create({
  container:{
    backgroundColor:colors.backgroundMain,
    width:'100%',
    marginTop:24,
    minHeight:100,
    paddingVertical:12,
  },
  dividerWrapper:{
    width:'100%',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  divider:{
    flex:1,
    height:1,
    backgroundColor:colors.backgroundDark,
    opacity:0.5,
  },
  title:{
    marginHorizontal:4
  },
  iconWrapper:{
    width:36,
    aspectRatio:1,
    alignItems:"center",
    justifyContent:'center',
    marginHorizontal:8,
    marginTop:32
  },
  icon:{
    width:24,
    height:24,
    resizeMode:'contain',
  }
});

export default createStyles;
