import {TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';

const EnterVehicleNumber = () => {
  return (
    <View style={{padding: 10, flex: 1, gap: 14}}>
      <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10}}>
        <Text>Vehicle Number</Text>
        <TextInput
          style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E5E5E5',
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
};

export default EnterVehicleNumber;
