import { BookstoreData } from '@api/useBookstores';
import Box from '@components/Box';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBookstoreLogo from '@utils/assets/getBookstoreLogo';
import { FunctionComponent } from 'react';
import { BookstoreLink, BookstoreLogo } from './styles';

const BookstoreItem: FunctionComponent<BookstoreData> = ({
  id,
  displayName,
  website,
  isOnline,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <BookstoreLogo src={getBookstoreLogo(id)} />
      <BookstoreLink href={website} target="_blank" rel="noreferrer">
        {displayName}
      </BookstoreLink>
      {isOnline ? (
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'var(--success-color)' }} />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'var(--error-color)' }} />
      )}
    </Box>
  );
};

export default BookstoreItem;
