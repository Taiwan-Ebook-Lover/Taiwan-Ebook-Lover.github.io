export const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

interface ThemeInterface {
  breakpoints: string[];
}

const globalTheme: ThemeInterface = {
  breakpoints: Object.values(breakpoints),
};

export default globalTheme;
