import { OrderByEnum } from '@customTypes/searchOptions';
import orderByAtom from '@recoil/booksOrderBy';
import { Select } from 'antd';
import _ from 'lodash';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';

const { Option } = Select;

const options: Array<{ value: OrderByEnum; label: string }> = [
  { label: '綜合排序', value: OrderByEnum.DEFAULT },
  { label: '價格由低至高', value: OrderByEnum.PRICE_ASC },
  { label: '價格由高至低', value: OrderByEnum.PRICE_DESC },
];

const OrderBySelect: FunctionComponent = () => {
  const [orderBy, setOrderBy] = useRecoilState(orderByAtom);

  return (
    <Select
      size="large"
      placeholder="Please select"
      defaultValue={OrderByEnum.DEFAULT}
      style={{ width: '100%', minWidth: '10rem' }}
      value={orderBy}
      onChange={setOrderBy}
    >
      {_.map(options, (option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default OrderBySelect;
