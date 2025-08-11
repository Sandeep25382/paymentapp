import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';

type SuggestionCardProps = {
  amount: string | number;
  type: string;
  benefits: string[];
  icon?: string; // optional icon name (e.g., "camera", "wifi", etc.)
  onPressIcon?: () => void; // optional callback when icon is pressed
};

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  amount,
  type,
  benefits,
  icon = 'chevron-right', // default icon
  onPressIcon,
}) => {
  return (
    <View style={style.layout}>
      <View style={style.titleBar}>
        <Text style={style.amount}>${amount}</Text>
        <TouchableOpacity style={style.seeMoreButton} onPress={onPressIcon}>
          <Icon source={icon} color={'#ffffff'} size={20} />
        </TouchableOpacity>
      </View>

      <View style={{paddingVertical: 4}}>
        <Text style={style.type}>{type}</Text>
      </View>

      <View style={{paddingVertical: 4}}>
        {benefits.map((item, index) => (
          <Text style={style.benefit} key={index}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  layout: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
  },
  amount: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMoreButton: {
    backgroundColor: '#6C54FF',
    borderRadius: 100,
    padding: 3,
  },
  type: {
    color: '#969696',
    fontSize: 12,
  },
  benefit: {
    color: '#1A1A1A',
    fontWeight: 'normal',
    fontSize: 12,
    paddingVertical: 3,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SuggestionCard;
