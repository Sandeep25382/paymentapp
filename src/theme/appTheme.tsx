import React, { createContext, useContext, PropsWithChildren } from 'react';
import { colors, spacing, radii, typography, elevation } from './tokens';

type Theme = { colors: typeof colors; spacing: typeof spacing; radii: typeof radii; type: typeof typography; shadow: typeof elevation; };
const ThemeContext = createContext<Theme>({ colors, spacing, radii, type: typography, shadow: elevation });

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeContext.Provider value={{ colors, spacing, radii, type: typography, shadow: elevation }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
