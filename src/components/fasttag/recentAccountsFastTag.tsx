import {View} from 'react-native';

import {Fragment} from 'react';
import RecentAccountComponents from '../mobileRecharge/recentAccountComponents';
import RecentAccountComponentsFastTag from './recentAccountComponentsFastTag';

const RecentAccountsFastTag = () => {
  const data = [
    {
      id: '1',
      company: 'HDFC Bank - Fastag',
      transactionID: 'MH34AA7987',
      amount: '123',
      date: '10 Jul 2025',
      status: 'pending',
      logo: '',
    },
    {
      id: '2',
      company: 'HDFC Bank - Fastag',
      transactionID: 'MH34AA7987',
      amount: '123',
      date: '10 Jul 2025',
      status: 'pending',
      logo: '',
    },
  ];
  return (
    <View style={{paddingVertical: 10}}>
      {data.map((item, index) => (
        <Fragment key={item?.id}>
          <RecentAccountComponentsFastTag item={item} />
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

export default RecentAccountsFastTag;
