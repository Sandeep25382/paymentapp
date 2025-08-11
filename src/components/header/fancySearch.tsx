import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FancySearchBox = ({
  onSearch,
  onVoiceInput,
  placeholder = 'Search for billers, utilities...',
}: {
  onSearch: (query: string) => void;
  onVoiceInput: () => void;
  placeholder?: string;
}) => {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    onSearch?.('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onVoiceInput}>
        <Icon name="microphone" size={24} color="#6e11b0" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          onSearch?.(text);
        }}
        placeholderTextColor="#aaa"
      />

      {searchText ? (
        <TouchableOpacity onPress={handleClear}>
          <Icon name="close" size={24} color="#6e11b0" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onSearch?.(searchText)}>
          <Icon name="magnify" size={24} color="#6e11b0" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1eefc',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    borderRadius: 30,
    margin: 16,
    shadowColor: '#6e11b0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default FancySearchBox;
