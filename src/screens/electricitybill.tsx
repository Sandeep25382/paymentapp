import { View } from 'react-native';
import DataList from '../components/dummy/dummyData';
import Search from '../components/inputComponents/search';

const ElectricityBill = () => {
  const bankData = [
    {
      id: 1,
      title: 'XYZ Company',
      icon: require('../assets/images/airtel.png'),
    },
    {
      id: 2,
      title: 'XYZ Company',
      icon: require('../assets/images/airtel.png'),
    },
  ];

  return (
    <View style={{ padding: 10, flex: 1, gap: 10 }}>
      <Search placeholder="Search by provider" />
      <DataList
        data={bankData}
        onSearch={query => console.log('Searching:', query)}
        title="All Billers"
      />
    </View>
  );
};

export default ElectricityBill;
