import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../types/navigation';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const AddNewFooter = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleAddNew = () => {
    navigation.navigate('SelectFASTagProvider');
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleAddNew} style={styles.addnew}>
        <Text style={styles.addNewText}>Add New Vehicle</Text>
      </TouchableOpacity>
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
  addnew: {
    backgroundColor: '#6C54FF',
    width: '100%',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  addNewText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddNewFooter;
