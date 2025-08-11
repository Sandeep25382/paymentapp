import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {customTheme} from '../theme/theme'; // Adjust path if needed

type BillOption = {
  icon: string;
  label: string;
  onPress: () => void;
};

const billOptions: BillOption[] = [
  {icon: 'cellphone', label: 'Mobile Recharge', onPress: () => {}},
  {icon: 'flash', label: 'Electricity', onPress: () => {}},
  {icon: 'water', label: 'Water', onPress: () => {}},
  {icon: 'shield-home', label: 'LIC/Insurance', onPress: () => {}},
  {icon: 'gas-cylinder', label: 'Gas Cylinder', onPress: () => {}},
  {icon: 'television-classic', label: 'DTH/CableTV', onPress: () => {}},
  {icon: 'google-play', label: 'Google Play', onPress: () => {}},
  {icon: 'car-multiple', label: 'FastTag Recharge', onPress: () => {}},
];

const BillsAndRechargeHorizontal = () => {
  const renderItem: ListRenderItem<BillOption> = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={item.onPress}>
      <MaterialCommunityIcons
        name={item.icon}
        size={30}
        color={customTheme.colors.primary}
      />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.header}>Popular Categories</Text>
      <FlatList
        data={billOptions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: customTheme.colors.text,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    width: 90,
    alignItems: 'center',
    marginRight: 15,
  },
  label: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 12,
    color: customTheme.colors.text,
  },
});

export default BillsAndRechargeHorizontal;
