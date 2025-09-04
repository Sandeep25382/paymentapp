import {Text, View, Image} from 'react-native';
import {upcomingBills} from '../types';

const RechargeHistoryComponent = ({item}: {item: upcomingBills}) => {
  console.log(item);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
      }}>
      <View style={{borderRadius: 100}}>
        <Image
          source={require('../../../../assets/images/mobilerecharge.png')}
          height={40}
          width={40}
        />
      </View>
      <View
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            gap: 5,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#969696', fontSize: 12}}>
              Postpaid Bill Paid
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#1A1A1A', fontSize: 16}}>9987654321</Text>
            <Text style={{color: '#1A1A1A', fontSize: 16}}>$400</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#969696', fontSize: 12}}>22 April 2024</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#969696', fontSize: 12}}>Debited from</Text>
            <Image
              source={require('../../../../assets/images/icicidebitfrom.png')}
              height={40}
              width={40}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RechargeHistoryComponent;
