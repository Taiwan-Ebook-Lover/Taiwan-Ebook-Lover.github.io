import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import { ThemeEnum } from '@customTypes/styleTypes';
import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom';

const themes: { [key in ThemeEnum]: string } = {
  [ThemeEnum.DARK]: `${process.env.PUBLIC_URL}/dark-theme.css`,
  [ThemeEnum.LIGHT]: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={ThemeEnum.LIGHT}
      insertionPoint="styles-insertion-point"
    >
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
