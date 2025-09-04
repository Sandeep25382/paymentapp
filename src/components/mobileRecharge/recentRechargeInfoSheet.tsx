import {Text, View, Image, TouchableOpacity} from 'react-native';
import {upcomingBills} from '../cards/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import ConfirmationModal from '../modal/ConfirmationModal';
import {useState} from 'react';

const RecentRechargeInfoSheet = ({
  item,

  closeModal,
}: {
  item: upcomingBills;
  openModal?: () => void;
  closeModal?: () => void;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToHistory = () => {
    if (closeModal) {
      closeModal();
    }
    navigation.navigate('TransactionHistory');
  };

  const handleConfirm = () => {
    // if (closeModal) {
    //   closeModal();
    // }
    setModalVisible(false);
  };

  const handleCancel = () => {
    // if (closeModal) {
    //   closeModal();
    // }
    setModalVisible(false);
  };

  return (
    <View
      style={{
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        // justifyContent: 'space-between',
        // alignItems: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
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
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          width: '100%',
          borderColor: '#E5E5E5',
          marginVertical: 10,
        }}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/viewhistory.png')}
            height={40}
            width={40}
          />
        </View>
        <TouchableOpacity
          onPress={navigateToHistory}
          style={{
            flex: 3,
            padding: 10,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: '#E5E5E5',
          }}>
          <Text>View History</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/delete.png')}
            height={40}
            width={40}
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            flex: 3,
            padding: 10,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: '#E5E5E5',
          }}>
          <Text>Delete Account</Text>
        </TouchableOpacity>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        title="Delete Account"
        message="Are you sure you want to delete this account ?"
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default RecentRechargeInfoSheet;
