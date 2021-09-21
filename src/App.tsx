import { ThemeEnum } from '@customTypes/styleTypes';
import { Switch, Typography } from 'antd';
import { FunctionComponent } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import styled from 'styled-components';

const { Title } = Typography;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: FunctionComponent = () => {
  const { switcher, currentTheme, status } = useThemeSwitcher();

  const onChange = (checked: boolean) => {
    switcher({ theme: checked ? ThemeEnum.DARK : ThemeEnum.LIGHT });
  };

  if (status !== 'loaded') {
    return null;
  }

  return (
    <AppWrapper>
      <Title level={3}>Current theme: {currentTheme}</Title>
      <Switch checked={currentTheme === ThemeEnum.DARK} onChange={onChange} />
    </AppWrapper>
  );
};

export default App;
