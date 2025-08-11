import {Text, View, Image} from 'react-native';
import {upcomingBills} from '../types';

const Bills = ({item}: {item: upcomingBills}) => {
  return (
    <View style={{padding: 5, display: 'flex', gap: 5}}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
        <View style={{borderRadius: 100}}>
          <Image
            source={require('../../../assets/images/airtel.png')}
            height={40}
            width={40}
          />
        </View>
        <View>
          <Text style={{color: '#1A1A1A'}}>{item?.company}</Text>
          <Text style={{color: '#969696', fontSize: 12}}>
            {item?.transactionID}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          backgroundColor: '#F2F2F2',
          padding: 5,
          paddingLeft: 15,
          borderRadius: 100,
        }}>
        <Image
          source={require('../../../assets/images/alertorange.png')}
          height={10}
          width={10}
        />
        <Text style={{marginLeft: 15, fontSize: 12}}>₹{item?.amount}</Text>
        <Text style={{color: '#969696', fontSize: 12}}>
          due on {item?.date}
        </Text>
      </View>
    </View>
  );
};

export default Bills;
