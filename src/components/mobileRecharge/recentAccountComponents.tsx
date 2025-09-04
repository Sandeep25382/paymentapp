import {Text, View, Image, TouchableOpacity} from 'react-native';
import {upcomingBills} from '../cards/types';
import BottomSheetWithModal from '../bottomSheet/bottomsheet';
import RecentRechargeInfoSheet from './recentRechargeInfoSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import {useNavigation} from '@react-navigation/native';

const RecentAccountComponents = ({item}: {item: upcomingBills}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => [navigation.navigate('SelectARechargePlan')];

  return (
    <View
      style={{
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={{display: 'flex', flexDirection: 'row', gap: 10}}>
        <View style={{borderRadius: 100}}>
          <Image
            source={require('../../../assets/images/airtel.png')}
            height={40}
            width={40}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <Text style={{color: '#1A1A1A'}}>{item?.company}</Text>
          <Text style={{color: '#969696', fontSize: 12}}>
            {item?.transactionID}
          </Text>
          <Text style={{color: '#969696', fontSize: 12, paddingVertical: 5}}>
            Last recharged ${item.amount} on {item.date}
          </Text>
        </View>
      </TouchableOpacity>
      <BottomSheetWithModal title="Recent">
        {({closeModal}) => (
          <RecentRechargeInfoSheet
            item={{
              id: '1',
              company: 'Rahul Basu',
              transactionID: '9987654321',
              amount: '123',
              date: '10 Jul 2025',
              status: 'pending',
              logo: '',
            }}
            closeModal={closeModal} // Optional: only use if your component supports it
          />
        )}
      </BottomSheetWithModal>
    </View>
  );
};

export default RecentAccountComponents;
