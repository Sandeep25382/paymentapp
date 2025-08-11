import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {customTheme} from '../theme/theme';
import SeeMoreButton from '../components/button/seeMore';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 4.5;

type BillOption = {
  icon: string;
  label: string;
  onPress: () => void;
  colors: string[];
};

const billOptions: BillOption[] = [
  {
    icon: 'cellphone',
    label: 'Mobile Recharge',
    onPress: () => {},
    colors: ['#f857a6', '#ff5858'],
  },
  {
    icon: 'flash',
    label: 'Electricity',
    onPress: () => {},
    colors: ['#00c6ff', '#0072ff'],
  },
  {
    icon: 'water',
    label: 'Water',
    onPress: () => {},
    colors: ['#43cea2', '#185a9d'],
  },
  {
    icon: 'shield-home',
    label: 'LIC/Insurance',
    onPress: () => {},
    colors: ['#ff9966', '#ff5e62'],
  },
  {
    icon: 'gas-cylinder',
    label: 'Gas Cylinder',
    onPress: () => {},
    colors: ['#fbd786', '#f7797d'],
  },
  {
    icon: 'television-classic',
    label: 'DTH/CableTV',
    onPress: () => {},
    colors: ['#a18cd1', '#fbc2eb'],
  },
  {
    icon: 'google-play',
    label: 'Google Play',
    onPress: () => {},
    colors: ['#00f2fe', '#4facfe'],
  },
  {
    icon: 'car-multiple',
    label: 'FastTag Recharge',
    onPress: () => {},
    colors: ['#f7971e', '#ffd200'],
  },
];

const MoreBills = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>More</Text>
      <View style={styles.grid}>
        {billOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.85}
            onPress={item.onPress}>
            <LinearGradient
              colors={item.colors}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.iconContainer}>
              <MaterialCommunityIcons name={item.icon} size={26} color="#fff" />
            </LinearGradient>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SeeMoreButton onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: customTheme.colors.text,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: customTheme.colors.text,
  },
});

export default MoreBills;
