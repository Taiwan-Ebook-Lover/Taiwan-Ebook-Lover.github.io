import { Box } from '@components/Box';
import { GetApp } from '@components/GetApp';
import { Button } from 'antd';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box display="flex" padding="1rem" justifyContent="flex-end">
        <GetApp />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex="1"
      >
        <p>Landing Page</p>
        <Button type="primary" onClick={() => navigate('/searches')}>
          Go to <code style={{ marginLeft: '0.5rem' }}>{'"/search"'}</code>
        </Button>
      </Box>
    </>
  );
};

export default Landing;
