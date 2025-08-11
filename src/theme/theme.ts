import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const customTheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,

    // Primary & Accent
    primary: '#9d3be5',
    // primary: '#205781',

    secondary: '#FFEB3B', // Bright Yellow (used as secondary if needed)
    accent: '#FFEB3B',

    // Backgrounds
    background: '#F5F5F5', // Soft Grey
    surface: '#F2F2F2', // Card / modal background

    // Text
    text: '#212121', // Primary text
    onSurface: '#424242', // Text on surface or backgrounds
    placeholder: '#757575', // Hints, subheadings

    // Status Colors
    error: '#F44336',
    success: '#4CAF50', // Custom addition for success feedback
    info: '#03A9F4', // Info buttons like 'Link Bank Account'

    // Border / Divider
    outline: '#E0E0E0', // Borders or subtle lines

    // Others
    surfaceDisabled: '#E0E0E0',
    onSurfaceDisabled: '#9E9E9E',
    backdrop: 'rgba(0,0,0,0.5)',
  },
};
