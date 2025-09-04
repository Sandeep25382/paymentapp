import {Image, Text, View} from 'react-native';
import SelectedRechargeDetail from '../components/rechargePlan/selectedRechargeDetail';
import Suggestion from '../components/rechargePlan/suggestions';
import {TextInput} from 'react-native';

const SelectRechargePlan = () => {
  return (
    <View>
      <SelectedRechargeDetail />
      <Suggestion />
      <View style={{padding: 10, backgroundColor: 'white'}}>
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
            marginVertical: 10,
          }}>
          <Image
            source={require('../../assets/images/search.png')}
            style={{
              width: 20,
              height: 20,
              tintColor: '#999',
            }}
          />
          <TextInput
            style={{height: 20,color:"black"}}
            placeholder="Search a plan, eg 349, 5G, etc."
          />
        </View>
        <Text style={{textAlign: 'center', color: '#969696'}}>
          No plans available{' '}
        </Text>
      </View>
    </View>
  );
};

export default SelectRechargePlan;
