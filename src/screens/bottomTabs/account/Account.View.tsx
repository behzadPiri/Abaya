import {FlatList, SafeAreaView} from 'react-native';
import {HeaderAccount, HeaderUI, SectionButton} from '../../../ui';
import {useTheme} from '../../../content/themes/ThemeProvider.tsx';
import createStyles from './Account.Styles.tsx';
import {AccountData} from '../../../common/utils/accountData/AccountData.tsx';

const Account = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>

      <HeaderUI title="Account" />

      <FlatList
        data={AccountData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrapper}
        ListHeaderComponent={() => <HeaderAccount />}
        keyExtractor={(_: any, index) => index.toString()}
        renderItem={({item}) => (
          <SectionButton
            icon={item.icon}
            title={item.title}
            endItem={item.endItem}
            onPress={item.onPress}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Account;
