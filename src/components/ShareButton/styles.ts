import styled from 'styled-components';

export const ShareButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  font-size: 1.2rem;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem !important;
    border-radius: 0.5rem;
    transition-duration: 0.3s;
    transition-property: background-color, opacity;

    &[aria-label] {
      border: 1px solid var(--gray-5) !important;
      background-color: var(--gray-1) !important;

      &:hover {
        background-color: var(--gray-4) !important;
      }

      & > [data-icon] {
        font-size: 2rem;
        margin-right: 0.7rem;
      }
    }
  }
`;

export const CopyButton = styled.button`
  grid-column: 1 / 3;
  background-color: var(--primary-color);
  cursor: pointer;
  color: var(--gray-1);
  border: none;

  &:hover {
    opacity: 0.8;
  }

  & > [data-icon] {
    margin-right: 0.5rem;
  }
`;
