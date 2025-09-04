import { useColorScheme } from 'react-native';
import { DarkColors, LightColors } from '../../constants/colors';

export const useColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? DarkColors : LightColors;
};
