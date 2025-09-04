import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';


const cardData = [
  {
    id: '1',
    cardHolder: 'Rahul Sharma',
    cardNumber: '**** **** **** 4582',
    expiry: '12/28',
    type: 'Visa',
    logo: require('../../assets/images/visa.png'),
    dueAmount: '₹5,230.00',
    minDue: '₹500.00',
    dueIn: 'Due in 3 days',
    color: ['#4A00E0', '#8E2DE2'],
  },
  {
    id: '2',
    cardHolder: 'Swati Mehta',
    cardNumber: '**** **** **** 7821',
    expiry: '09/26',
    type: 'Mastercard',
    logo: require('../../assets/images/visa.png'),
    dueAmount: '₹2,100.00',
    minDue: '₹250.00',
    dueIn: 'Due in 5 days',
    color: ['#FF416C', '#FF4B2B'],
  },
];

const Card = ({
  cardHolder,
  cardNumber,
  expiry,
  logo,
  dueAmount,
  minDue,
  dueIn,
  color,
}: (typeof cardData)[0]) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient colors={color} style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.cardHolder}>{cardHolder}</Text>
          <Text style={styles.expiry}>Exp: {expiry}</Text>
        </View>
      </LinearGradient>

      <View style={styles.detailsBox}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Due Amount</Text>
          <Text style={styles.value}>{dueAmount}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Minimum Due</Text>
          <Text style={styles.value}>{minDue}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.value, {color: '#FFA500'}]}>{dueIn}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.btnText}>Pay Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, {backgroundColor: '#eee'}]}>
            <Text style={[styles.btnText, {color: '#333'}]}>Manage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        renderItem={({item}) => <Card {...item} />}
      />
      <Svg
        width="100%"
        height="140"
        viewBox="0 0 1440 320"
        style={styles.svgWave}>
        <Path
          fill="#4A00E0"
          d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,197.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Svg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  cardContainer: {
    marginBottom: 32,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    height: 200,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 6,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  logo: {
    width: 50,
    height: 30,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolder: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  expiry: {
    color: 'white',
    fontSize: 14,
  },
  detailsBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginTop: -20,
    marginHorizontal: 12,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    color: '#777',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  actionBtn: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#4A00E0',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
  },
  svgWave: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
});

export default CardsScreen;
