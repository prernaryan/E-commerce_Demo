export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  shadowColor: string;
  white: string;
  black: string;
  gray: {
    deepGray: string;
    lightGray: string;
  };
  yellow: {
    pendingColor: string;
  };
  red: {
    asteriskSymbol: string;
    fieldError: string;
  };
  blue: {
    btnBlue: string;
  };
  green: {
    toggleButton: string;
  };
  transparent: string;
}

export const themes: {dark: ThemeColors; light: ThemeColors} = {
  dark: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#BB86FC',
    shadowColor: 'rgba(88, 91, 93, 0.1)',
    white: '#ffffff',
    black: '#000000',
    gray: {
      deepGray: '#76777B',
      lightGray: '#1E1E1E',
    },
    yellow: {
      pendingColor: '#DCA900',
    },
    red: {
      asteriskSymbol: '#FF5E6F',
      fieldError: '#FF6060',
    },
    blue: {
      btnBlue: '#004185',
    },
    green: {
      toggleButton: '#61AF46',
    },
    transparent: 'transparent',
  },
  light: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#6200EE',
    shadowColor: 'rgba(88, 91, 93, 0.1)',
    white: '#ffffff',
    black: '#000000',
    gray: {
      deepGray: '#76777B',
      lightGray: '#F5F5F5',
    },
    yellow: {
      pendingColor: '#DCA900',
    },
    red: {
      asteriskSymbol: '#FF5E6F',
      fieldError: '#FF6060',
    },
    blue: {
      btnBlue: '#004185',
    },
    green: {
      toggleButton: '#61AF46',
    },
    transparent: 'transparent',
  },
};
