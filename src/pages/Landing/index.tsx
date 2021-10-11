import { Box } from '@components/Box';
import { GetApp } from '@components/GetApp';
import { FunctionComponent } from 'react';

const Landing: FunctionComponent = () => {
  return (
    <>
      <Box display="flex" padding="1rem" justifyContent="flex-end">
        <GetApp />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flex="1">
        Landing Page
      </Box>
    </>
  );
};

export default Landing;
