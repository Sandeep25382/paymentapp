import {View} from 'react-native';

import {Fragment} from 'react';
import AllAccountComponents from './allAccountsComp';

const AllAccounts = () => {
  const data = [
    {
      id: '1',
      company: 'Rahul Basu',
      transactionID: '9987654321',
      amount: '123',
      date: '10 Jul 2025',
      status: 'pending',
      logo: '',
    },
    {
      id: '2',
      company: 'Rahul Basu',
      transactionID: '9987654321',
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
          <AllAccountComponents item={item} />
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

export default AllAccounts;
