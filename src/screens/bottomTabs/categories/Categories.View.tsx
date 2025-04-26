import {SafeAreaView} from 'react-native';
import {TextUI} from '../../../ui';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Categories.Styles.tsx';

const Categories = () => {

  const {colors} = useTheme();
  const styles=createStyles(colors);


  return (
    <SafeAreaView style={styles.container}>
      <TextUI text="Categories" />
    </SafeAreaView>
  );
};

export default Categories;
