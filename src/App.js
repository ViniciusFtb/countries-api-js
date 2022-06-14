import React from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes/Themes';
import { useDarkMode } from './components/Themes/useDarkMode';

export function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <Header theme={theme} toggleTheme={themeToggler}/>
        <Dashboard />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
  
};

