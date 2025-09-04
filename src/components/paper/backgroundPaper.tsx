import React, { ReactNode } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useColor } from '../../services/hooks/useColor';
const BackgroundPaper = ({
  title,
  children,
  onPress,
}: {
  title?: string;
  children: ReactNode;
  onPress?: () => void;
}) => {
  const { foreground, borderColor, primaryText } = useColor();

  const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'semibold',
      color: primaryText,
    },
    titleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    container: {
      backgroundColor: foreground,
      padding: responsiveWidth(4),
      marginVertical: responsiveHeight(0.7),
      borderRadius: 15,
      borderWidth: 1,
      borderColor: borderColor,
    },
  });

  return (
    <View style={styles.container}>
      {
        <View style={styles.titleContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {onPress && (
            <TouchableOpacity onPress={onPress}>
              <Image
                height={30}
                width={30}
                source={require('../../../assets/images/viewmore.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      }
      {children}
    </View>
  );
};

export default BackgroundPaper;
