import {TextInput, View} from 'react-native';
import {Image} from 'react-native';
import BackgroundPaper from '../components/paper/backgroundPaper';
import RecentAccounts from '../components/mobileRecharge/recentAccounts';
import AllAccounts from '../components/mobileRecharge/allaccounts';
import BharatFooter from '../components/footer/bharatFooter';

const MobileRecharge = () => {
  return (
    <View style={{padding: 10, flex: 1, gap: 14}}>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 40,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            borderWidth: 1,
            borderColor: '#E4E4E4',
          }}>
          <Image
            source={require('../assets/images/search.png')}
            style={{
              width: 20,
              height: 20,
              tintColor: '#999',
            }}
          />
          <TextInput
            style={{height: 20}}
            placeholder="Search by number or name"
          />
        </View>
      </View>
      <BackgroundPaper
        title="Recent Accounts"
        children={<RecentAccounts />}
        // onPress={() => {}}
      />
      <BackgroundPaper
        title="All Contacts"
        children={<AllAccounts />}
        // onPress={() => {}}
      />

      <BharatFooter />
    </View>
  );
};

export default MobileRecharge;
