import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
// import { NavigationProp } from '../../types/navigation';
// import { useNavigation } from '@react-navigation/native';

interface BankItem {
  id: number;
  title: string;
  icon: ImageSourcePropType;
}

interface DataListProps {
  data: BankItem[];
  onSearch?: (query: string) => void;
  placeholder?: string;
  title?: string;
}

const DataList: React.FC<DataListProps> = ({ data, title }) => {
  //   const navigation = useNavigation<NavigationProp>();

  //   const handleAddNew = () => {
  //     navigation.navigate('enterVehicleNumber');
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.bankList}>
        <Text style={{ fontSize: 18, fontWeight: '600', padding: 10 }}>
          {title}
        </Text>
        {data.map(item => (
          <TouchableOpacity style={styles.bankData} key={item.id}>
            <Image source={item.icon} style={styles.bankIcon} />
            <View style={styles.bankTitleWrapper}>
              <Text style={styles.bankTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 14,
  },
  bankList: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  bankData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  bankIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bankTitleWrapper: {
    borderBottomWidth: 1,
    width: '60%',
    borderBottomColor: '#E5E5E5',
  },
  bankTitle: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default DataList;
