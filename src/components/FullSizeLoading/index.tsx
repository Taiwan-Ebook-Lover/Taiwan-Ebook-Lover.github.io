import Box from '@components/Box';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

const FullSizeLoading: FunctionComponent = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" style={{ fontSize: 24 }} />
      <Box mt="1rem">Loading...</Box>
    </Box>
  );
};

export default FullSizeLoading;
