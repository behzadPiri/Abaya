import {StyleSheet} from 'react-native';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

const createStyles = (colors: ThemeColorsType,endItem?:boolean) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      backgroundColor: 'transparent',
      borderBottomWidth: endItem?0: 1,
      borderBottomColor:endItem?"transparent": colors.border,
      marginBottom: 4,
    },
    labelWrapper:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      marginRight: 12,
      tintColor:endItem?colors.error:colors.textPrimary
    },
    forwardIcon:{
      transform: [{rotateY: '180deg'}]
    },
    title:{
      color:endItem?colors.error:colors.textPrimary
    }
  });

export default createStyles;
