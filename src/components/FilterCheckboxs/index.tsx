import { BookstoreData, bookstoresUrl } from '@api/useBookstores';
import { BookstoreEnum } from '@customTypes/bookstore';
import filterAtom from '@recoil/bookstoresFilter';
import { Checkbox } from 'antd';
import { ChangeEvent, FunctionComponent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSWRConfig } from 'swr';

const CheckboxGroup = Checkbox.Group;

const FilterCheckboxs: FunctionComponent = () => {
  const { cache } = useSWRConfig();
  const bookstores: Array<BookstoreData> = cache.get(bookstoresUrl);

  const options: Array<{ value: BookstoreEnum; label: string }> = bookstores.map((bookstore) => {
    return { label: bookstore.displayName, value: bookstore.id };
  });

  const [checkedList, setCheckedList] = useRecoilState(filterAtom);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

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
        Check all
      </Checkbox>
      <CheckboxGroup options={options} value={checkedList} onChange={onChange} />
    </>
  );
};

export default FilterCheckboxs;
