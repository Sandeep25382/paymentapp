import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  useWindowDimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const SwiperHome = () => {
  const {height} = useWindowDimensions();
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);
  const totalPages = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % totalPages;
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <PagerView
      ref={pagerRef}
      style={[styles.pagerView, {height: height * 0.25}]}
      initialPage={0}>
      <View key="1" style={[styles.page, {backgroundColor: '#FFEB3B'}]}>
        <Image
          source={{uri: 'https://example.com/offer-image.jpg'}}
          style={styles.image}
        />
        <Text style={styles.headerText}>Exclusive 20% Cashback</Text>
        <Text style={styles.descriptionText}>
          Get 20% cashback on your first UPI transaction. Limited time offer!
        </Text>
        <Button title="Claim Offer" onPress={() => {}} color="#212121" />
      </View>

      <View key="2" style={[styles.page, {backgroundColor: '#4CAF50'}]}>
        <Image
          source={{uri: 'https://example.com/qr-code-scanner.jpg'}}
          style={styles.image}
        />
        <Text style={styles.headerText}>Scan to Pay</Text>
        <Text style={styles.descriptionText}>
          Scan any QR code to make secure UPI payments instantly.
        </Text>
        <Button title="Open Scanner" onPress={() => {}} color="#212121" />
      </View>

      <View key="3" style={[styles.page, {backgroundColor: '#03A9F4'}]}>
        <Image
          source={{uri: 'https://example.com/transaction-history.jpg'}}
          style={styles.image}
        />
        <Text style={styles.headerText}>Your Recent Transactions</Text>
        <Text style={styles.descriptionText}>
          View your complete transaction history and track your spending.
        </Text>
        <Button title="View History" onPress={() => {}} color="#212121" />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    width: '100%',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default SwiperHome;
