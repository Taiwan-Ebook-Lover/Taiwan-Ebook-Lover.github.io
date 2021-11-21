import useBookstores from '@api/useBookstores';
import { BookstoreEnum } from '@customTypes/bookstore';
import filterAtom from '@recoil/bookstoresFilter';
import { Button, Checkbox, Divider } from 'antd';
import { ChangeEvent, FunctionComponent, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const CheckboxGroup = Checkbox.Group;
const StyledCheckboxsLayout = styled(CheckboxGroup)`
  width: 22.5rem;
  max-width: 22.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem 1rem;
`;

export interface FilterCheckboxesProps {
  showConfirm?: boolean;
  onConfirm?: () => void;
}

const FilterCheckboxes: FunctionComponent<FilterCheckboxesProps> = ({
  showConfirm = false,
  onConfirm,
}) => {
  const { bookstores } = useBookstores();

  const options: Array<{ value: BookstoreEnum; label: string }> =
    bookstores
      ?.filter((bookstore) => bookstore.isOnline)
      .map((bookstore) => {
        return { label: bookstore.displayName, value: bookstore.id };
      }) || [];

  const [checkedList, setCheckedList] = useRecoilState(filterAtom);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);

  const onChange = (event: unknown) => {
    const list = event as Array<BookstoreEnum>;
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (event: unknown) => {
    const e = event as ChangeEvent<HTMLInputElement>;
    setCheckedList(e.target.checked ? Object.values(BookstoreEnum) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        全選
      </Checkbox>
      <Divider dashed style={{ margin: '1rem 0' }} />
      <StyledCheckboxsLayout options={options} value={checkedList} onChange={onChange} />
      {showConfirm && (
        <>
          <Divider dashed style={{ margin: '1rem 0' }} />
          <Button type="primary" onClick={onConfirm}>
            確認
          </Button>
        </>
      )}
    </>
  );
};

export default FilterCheckboxes;
