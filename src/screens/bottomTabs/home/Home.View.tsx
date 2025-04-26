import {SafeAreaView} from 'react-native';
import {TextUI} from '../../../ui';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Home.Styles.tsx';

const Home = () => {

  const {colors} = useTheme();
  const styles=createStyles(colors);


  return (
    <SafeAreaView style={styles.container}>
      <TextUI text="Home" />
    </SafeAreaView>
  );
};

export default Home;
