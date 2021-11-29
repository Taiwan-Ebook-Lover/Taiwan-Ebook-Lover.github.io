import App from '@/App';
import GlobalStyle from '@assets/themes/globalStyle';
import globalTheme from '@assets/themes/globalTheme';
import { ThemeEnum } from '@customTypes/styleTypes';
import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

const themes: { [key in ThemeEnum]: string } = {
  [ThemeEnum.DARK]: `${process.env.PUBLIC_URL}/dark-theme.css`,
  [ThemeEnum.LIGHT]: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={globalTheme}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={ThemeEnum.LIGHT}
        insertionPoint="styles-insertion-point"
      >
        <App />
      </ThemeSwitcherProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
