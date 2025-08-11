import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

import {customTheme} from '../theme/theme'; // Adjust path

const mockPeople = Array.from({length: 23}, (_, i) => ({
  name: `Business ${i + 1}`,
}));

const BusinessesSection = () => {
  //   const {colors} = useTheme();
  const [expanded, setExpanded] = useState(false);

  const visiblePeople = expanded ? mockPeople : mockPeople.slice(0, 7);
  const showToggle = mockPeople.length > 7;

  const renderItem = ({item}: {item: {name: string}}) => (
    <View style={styles.avatarContainer}>
      <Avatar.Text
        size={52}
        label={item.name[0]}
        style={{backgroundColor: customTheme.colors.primary}}
        labelStyle={{color: '#FFF'}}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const renderToggleButton = () => (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      style={styles.avatarContainer}>
      <Avatar.Icon
        size={52}
        icon={expanded ? 'chevron-up' : 'chevron-down'}
        style={{backgroundColor: customTheme.colors.surface}}
        color={customTheme.colors.primary}
      />
      <Text style={styles.name}>{expanded ? 'Less' : 'More'}</Text>
    </TouchableOpacity>
  );

  const itemsToRender = showToggle
    ? expanded
      ? [...mockPeople.map(p => ({...p})), {name: 'toggle'}]
      : [...visiblePeople.map(p => ({...p})), {name: 'toggle'}]
    : visiblePeople;

  return (
    <View style={styles.section}>
      <Text style={[styles.header]}>Businesses</Text>
      <FlatList
        data={itemsToRender}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) =>
          item.name === 'toggle' ? renderToggleButton() : renderItem({item})
        }
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 12,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: customTheme.colors.text,
    marginBottom: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '25%',
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    color: customTheme.colors.onSurface,
    textAlign: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BusinessesSection;
