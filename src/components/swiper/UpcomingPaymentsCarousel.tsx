import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {customTheme} from '../../theme/theme';

const SCREEN_WIDTH = Dimensions.get('window').width;

type BillOption = {
  icon: string;
  label: string;
  onPress: () => void;
  colors: string[]; // Added colors field for gradient
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

const ITEMS_PER_PAGE = 4;

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

const UpcomingPaymentsCarousel = () => {
  const pages = chunkArray(billOptions, ITEMS_PER_PAGE);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Upcoming Payments</Text>
        <TouchableOpacity style={styles.seeMoreBtn} activeOpacity={0.7}>
          <Text style={styles.seeMoreText}>See More</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={18}
            color={customTheme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <PagerView style={styles.pagerView} initialPage={0}>
        {pages.map((group, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            {group.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={item.onPress}
                style={styles.item}>
                <LinearGradient
                  colors={item.colors} // Use the gradient colors from the billOptions array
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  style={styles.iconBox}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={28}
                    color={'#fff'}
                  />
                </LinearGradient>
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: SCREEN_WIDTH,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: customTheme.colors.text,
  },
  pagerView: {
    width: SCREEN_WIDTH,
    height: 120,
  },
  page: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 14, // Rounded square
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  label: {
    fontSize: 12,
    color: customTheme.colors.text,
    marginTop: 6,
    textAlign: 'center',
  },
  seeMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  seeMoreText: {
    fontSize: 13,
    fontWeight: '500',
    color: customTheme.colors.primary,
    marginRight: 4,
  },
});

export default UpcomingPaymentsCarousel;
