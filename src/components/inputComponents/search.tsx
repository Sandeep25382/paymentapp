import * as React from 'react';
import {Image, StyleProp, ViewStyle} from 'react-native';
import {Searchbar} from 'react-native-paper';

const Search = ({
  placeholder,
  style,
}: {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon={() => (
        <Image
          source={require('../../../assets/images/search.png')}
          style={{
            width: 20,
            height: 20,
            tintColor: '#999',
          }}
        />
      )}
      style={[
        {
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#E4E4E4',
        },
        style, // this can be undefined/null/array and still work
      ]}
    />
  );
};

export default Search;
