import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Search from '../components/inputComponents/search';
import {NavigationProp} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

const SelectFastTagProvider = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleAddNew = () => {
    navigation.navigate('enterVehicleNumber');
  };
  const nav = [
    {
      id: 1,
      title: 'HDFC Bank',
      icon: require('../assets/images/airtel.png'),
    },
    {
      id: 2,
      title: 'HDFC Bank',
      icon: require('../assets/images/airtel.png'),
    },
    {
      id: 3,
      title: 'HDFC Bank',
      icon: require('../assets/images/airtel.png'),
    },
    {
      id: 4,
      title: 'HDFC Bank',
      icon: require('../assets/images/airtel.png'),
    },
  ];
  return (
    <View style={{padding: 10, flex: 1, gap: 14}}>
      <Search placeholder="Search by provider" />
      <View style={styles.bankList}>
        {nav.map(item => (
          <TouchableOpacity
            onPress={handleAddNew}
            style={styles.bankData}
            key={item.id}>
            <Image
              source={item.icon}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
            <View
              style={{
                borderBottomWidth: 1,
                width: '60%',
                borderBottomColor: '#E5E5E5',
              }}>
              <Text
                key={item.id}
                style={{
                  padding: 10,

                  borderRadius: 5,
                  marginVertical: 5,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankList: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
  },
  bankData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});

export default SelectFastTagProvider;
