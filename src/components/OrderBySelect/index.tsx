import { OrderByEnum } from '@customTypes/searchOptions';
import { Select } from 'antd';
import { FunctionComponent } from 'react';

const { Option } = Select;

const options: Array<{ value: OrderByEnum; label: string }> = [
  { label: '綜合排序', value: OrderByEnum.DEFAULT },
  { label: '價格由低至高', value: OrderByEnum.PRICE_ASC },
  { label: '價格由高至低', value: OrderByEnum.PRICE_DESC },
];

const OrderBySelect: FunctionComponent = () => (
  <Select
    size="large"
    placeholder="Please select"
    defaultValue={OrderByEnum.DEFAULT}
    style={{ width: '100%', minWidth: '10rem' }}
  >
    {options.map((option) => (
      <Option key={option.value} value={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);
export default OrderBySelect;
