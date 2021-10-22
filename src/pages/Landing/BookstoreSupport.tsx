import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import useBookstores from '@api/useBookstores';
import { message, Tooltip } from 'antd';
import { FunctionComponent, useEffect } from 'react';
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
  padding: 1rem 0.6rem;
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
  const { bookstores, isLoading, error } = useBookstores();

  useEffect(() => {
    if (error) message.warning('暫時無法取得書店列表。');
  }, [error]);

  if (isLoading) return null;

  return (
    <StyledBookstoreSupport>
      看看支援
      <Tooltip
        placement="bottom"
        color="var(--gray-1)"
        trigger={['click', 'hover']}
        title={
          <StyledBookstores>
            {bookstores?.map((item) => (
              <BookstoreItem key={item.id} {...item} />
            ))}
            <StyledOnlineDesc>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
              <span>：服務中</span>
              <CloseCircleTwoTone twoToneColor="#f5222d" />
              <span>：暫停服務</span>
            </StyledOnlineDesc>
          </StyledBookstores>
        }
      >
        <StyledWhichBookstore>哪 {bookstores?.length} 間台灣線上電子書店</StyledWhichBookstore>
      </Tooltip>
    </StyledBookstoreSupport>
  );
};

export default BookstoreSupport;
