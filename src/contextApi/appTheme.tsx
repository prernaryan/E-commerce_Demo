// ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';
import {ThemeColors, themes} from '../constants/colors';

// Define the context type
interface ThemeContextType {
  isDarkMode: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider props
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider to manage the current theme
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === 'dark',
  );

  // Memoize the selected colors to optimize re-renders
  const colors = useMemo(
    () => (isDarkMode ? themes.dark : themes.light),
    [isDarkMode],
  );

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    const listener = (preferences: {colorScheme: ColorSchemeName}) => {
      setIsDarkMode(preferences.colorScheme === 'dark');
    };

    // Listen to system theme changes
    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove(); // Cleanup listener on unmount
  }, []);

  return (
    <ThemeContext.Provider value={{isDarkMode, colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
