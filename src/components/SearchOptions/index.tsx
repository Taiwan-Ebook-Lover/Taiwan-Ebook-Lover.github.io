import { FilterOutlined } from '@ant-design/icons';
import Box from '@components/Box';
import FilterCheckboxes from '@components/FilterCheckboxes';
import OrderBySelect from '@components/OrderBySelect';
import { Button, Popover } from 'antd';
import { FunctionComponent } from 'react';
import { MarginProps } from 'styled-system';

export interface SearchOptionsProps extends MarginProps {}

const SearchOptions: FunctionComponent<SearchOptionsProps> = (props) => {
  return (
    <Box display="grid" gridTemplateColumns="auto auto" gridColumnGap="1rem" {...props}>
      <Popover placement="bottom" trigger="click" content={<FilterCheckboxes />}>
        <Button
          icon={<FilterOutlined />}
          size="large"
          style={{ padding: '0 1.2rem', height: 'auto' }}
        >
          篩選選項
        </Button>
      </Popover>
      <OrderBySelect />
    </Box>
  );
};

export default SearchOptions;
