import React, {ReactNode} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {DarkColors, LightColors} from '../../constants/colors';
const BackgroundPaper = ({
  title,
  children,
  onPress,
}: {
  title?: string;
  children: ReactNode;
  onPress?: () => void;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? DarkColors.background
          : LightColors.background,
        width: '100%',
        padding: 16,
        borderRadius: 15,

        borderWidth: 1,
        borderColor: '#E4E4E4',
      }}>
      {
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {title &&   <Text style={styles.title}>{title}</Text>}
          {onPress && (
            <TouchableOpacity onPress={onPress}>
              <Image
                height={30}
                width={30}
                source={require('../../assets/images/viewmore.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      }
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#1A1A1A',
  },
});

export default BackgroundPaper;
