import {Text, View, Image} from 'react-native';
import {upcomingBills} from '../cards/types';

const AllAccountComponents = ({item}: {item: upcomingBills}) => {
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
      <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
        <View style={{borderRadius: 100}}>
          <Image
            source={require('../../assets/images/airtel.png')}
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
  );
};

export default AllAccountComponents;
