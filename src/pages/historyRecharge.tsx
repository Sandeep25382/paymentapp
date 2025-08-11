import {View} from 'react-native';

import {Fragment} from 'react';
import {upcomingBills} from '../components/cards/types';
import RechargeHistoryComponent from '../components/cards/history/rechargeHistory';

const HistoryRecharge = () => {
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
    <View style={{padding: 10, backgroundColor: '#ffffff'}}>
      {data.map((item, index) => (
        <Fragment key={item?.id}>
          <RechargeHistoryComponent item={item} />

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

export default HistoryRecharge;
