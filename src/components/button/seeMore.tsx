import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {customTheme} from '../../theme/theme'; // Adjust if needed

const SeeMoreButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>See More</Text>
      <MaterialCommunityIcons
        name="chevron-down"
        size={22}
        color={customTheme.colors.primary}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: customTheme.colors.surface,
    borderWidth: 1,
    borderColor: customTheme.colors.outline,
  },
  text: {
    fontSize: 14,
    color: customTheme.colors.primary,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 4,
  },
});

export default SeeMoreButton;
