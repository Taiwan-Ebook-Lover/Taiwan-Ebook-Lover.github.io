import useBookstores from '@api/useBookstores';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from 'antd';
import { FunctionComponent } from 'react';
import BookstoreItem from './BookstoreItem';
import {
  BookstoresContainer,
  BookstoreSupportWrapper,
  ServiceStatusDesc,
  WhichBookstores,
} from './styles';

const BookstoreSupport: FunctionComponent = () => {
  const { bookstores } = useBookstores();

  return (
    <BookstoreSupportWrapper>
      看看支援
      <Popover
        placement="bottom"
        trigger="click"
        content={
          <BookstoresContainer>
            {bookstores && bookstores.map((item) => <BookstoreItem key={item.id} {...item} />)}
            <ServiceStatusDesc>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--success-color)' }} />
              <span>：服務中</span>
              <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'var(--error-color)' }} />
              <span>：暫停服務</span>
            </ServiceStatusDesc>
          </BookstoresContainer>
        }
      >
        <WhichBookstores>
          哪{bookstores ? ` ${bookstores.length} ` : '幾'}間台灣線上電子書店
        </WhichBookstores>
      </Popover>
    </BookstoreSupportWrapper>
  );
};

export default BookstoreSupport;
