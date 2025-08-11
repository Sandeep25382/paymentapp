import Bills from './bills';
import {View} from 'react-native';
import {upcomingBills} from '../types';
import {Fragment} from 'react';

const UpcomingBills = () => {
  const data: upcomingBills[] = [
    {
      id: '1',
      company: 'Adani Electricity Mumbai Ltd',
      transactionID: '1234567890',
      amount: '1234',
      date: '30 June 2025',
      status: 'pending',
      logo: '',
    },
    {
      id: '2',
      company: 'Postpaid Bill',
      transactionID: '9987654321',
      amount: '1234',
      date: '30 June 2025',
      status: 'pending',
      logo: '',
    },
  ];
  return (
    <View style={{paddingVertical: 10}}>
      {data.map((item, index) => (
        <Fragment key={item?.id}>
          <Bills item={item} />
          {data.length - 1 !== index && (
            <View
              style={{
                borderTopWidth: 1,
                width: '100%',
                borderColor: '#E5E5E5',
                marginVertical: 10,
              }}></View>
          )}
        </Fragment>
      ))}
    </View>
  );
};

export default UpcomingBills;
