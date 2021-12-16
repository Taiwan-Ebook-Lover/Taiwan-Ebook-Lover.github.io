import Box from '@components/Box';
import { Empty } from 'antd';
import { FunctionComponent } from 'react';

const ResultEmpty: FunctionComponent = () => {
  return (
    <Box py="5rem">
      <Empty description="查無資料" />
    </Box>
  );
};

export default ResultEmpty;
