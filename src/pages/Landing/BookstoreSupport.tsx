import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import useBookstores from '@api/useBookstores';
import { Popover } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import BookstoreItem from './BookstoreItem';

const StyledBookstoreSupport = styled.p`
  align-items: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  cursor: default;
`;

const StyledWhichBookstore = styled.span`
  margin-left: 0.2rem;
  color: var(--primary-5);
  cursor: pointer;
`;

const StyledBookstores = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding: 0.3rem 0;
`;

const StyledOnlineDesc = styled.div`
  grid-column: span 2;
  border-top: 1px solid var(--gray-4);
  padding-top: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  display: flex;
  align-items: center;

  & *:nth-child(even):not(:last-child) {
    margin-right: 1rem;
  }
`;

const BookstoreSupport: FunctionComponent = () => {
  const { bookstores } = useBookstores();

  return (
    <StyledBookstoreSupport>
      看看支援
      <Popover
        placement="bottom"
        trigger="click"
        content={
          <StyledBookstores>
            {bookstores && bookstores.map((item) => <BookstoreItem key={item.id} {...item} />)}
            <StyledOnlineDesc>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
              <span>：服務中</span>
              <CloseCircleTwoTone twoToneColor="#f5222d" />
              <span>：暫停服務</span>
            </StyledOnlineDesc>
          </StyledBookstores>
        }
      >
        <StyledWhichBookstore>
          哪{bookstores ? ` ${bookstores.length} ` : '幾'}間台灣線上電子書店
        </StyledWhichBookstore>
      </Popover>
    </StyledBookstoreSupport>
  );
};

export default BookstoreSupport;
