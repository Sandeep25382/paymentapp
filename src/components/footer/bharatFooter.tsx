import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BharatFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={{color: '#333'}}>
        By proceeding further, you allow XYZ to fetch your current and future
        plan expiry information and remind you
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default BharatFooter;
