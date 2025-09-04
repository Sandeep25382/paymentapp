export const colors = {
  // Replace with Figma styles
  bg: '#F2F2F2',
  surface: '#FFFFFF',
  primary: '#6C5CE7',
  primaryHover: '#5B4FD0',
  text: '#EDEDF2',
  textMuted: '#B4B4C0',
  border: '#2A2A34',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
};

export const radii = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, full: 999 };
export const spacing = { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64 };

export const typography = {
  h1: { fontSize: 32, lineHeight: 40, fontWeight: '700' as const },
  h2: { fontSize: 24, lineHeight: 32, fontWeight: '700' as const },
  h3: { fontSize: 18, lineHeight: 24, fontWeight: '600' as const },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' as const },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '400' as const },
};

export const elevation = {
  1: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 1 }, shadowRadius: 3, elevation: 2 },
  2: { shadowColor: '#000', shadowOpacity: 0.12, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8, elevation: 4 },
};
