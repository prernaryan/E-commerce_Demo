// ThemeContext.tsx
import React, {createContext, useContext, ReactNode} from 'react';
interface YourContextType {}

//Remove Your and add Your accutal context name
// Create the ThemeContext
const YourContext = createContext<YourContextType | undefined>(undefined);

// YourProvider props
interface YourProviderProps {
  children: ReactNode;
}

// ThemeProvider to manage the current theme
export const YourProvider: React.FC<YourProviderProps> = ({children}) => {
  return <YourContext.Provider value={{}}>{children}</YourContext.Provider>;
};

// Custom hook to use the ThemeContext
export const useTheme = (): YourContextType => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useTheme must be used within a YourProvider');
  }
  return context;
};
