import Box from '@components/Box';
import FilterCheckboxes from '@components/FilterCheckboxes';
import KeywordInput from '@components/KeywordInput';
import OrderBySelect from '@components/OrderBySelect';
import { Button, Divider, Drawer, DrawerProps } from 'antd';
import { FunctionComponent } from 'react';

export interface FilterDrawerProps extends DrawerProps {
  onConfirm?: () => void;
}

const FilterDrawer: FunctionComponent<FilterDrawerProps> = ({ onConfirm, ...props }) => {
  return (
    <Drawer
      placement="left"
      width="26rem"
      title={
        <Box display="flex" justifyContent="space-between" alignItems="center">
          搜尋
          <Button type="primary" onClick={onConfirm}>
            確認
          </Button>
        </Box>
      }
      closable={false}
      {...props}
    >
      <Divider orientation="center" plain>
        「書名關鍵字」或「ISBN」
      </Divider>
      <KeywordInput />
      <Divider orientation="center" plain>
        篩選書店
      </Divider>
      <FilterCheckboxes />
      <Divider orientation="center" plain>
        結果排序
      </Divider>
      <OrderBySelect />
    </Drawer>
  );
};

export default FilterDrawer;
