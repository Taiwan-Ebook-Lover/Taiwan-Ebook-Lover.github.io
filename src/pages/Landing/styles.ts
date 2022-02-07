import styled, { createGlobalStyle } from 'styled-components';
import { maxWidth, MaxWidthProps } from 'styled-system';

/**
 * index
 */

export const LandingPageStyle = createGlobalStyle`
  body {
    background-color: var(--gray-3) !important;
  }
`;

export const EbookLogo = styled.img<MaxWidthProps>`
  ${maxWidth}
`;

/**
 * TwitterPromotion
 */

export const TwitterPromotionWrapper = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-5);
  }
`;

/**
 * BookstoreSupport
 */

export const BookstoreSupportWrapper = styled.p`
  align-items: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-7);
  cursor: default;
`;

export const BookstoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding: 0.3rem 0;
`;

export const ServiceStatusDesc = styled.div`
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

export const WhichBookstores = styled.span`
  margin-left: 0.2rem;
  color: var(--primary-5);
  cursor: pointer;
`;

/**
 * BookstoreItem
 */

export const BookstoreLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
`;

export const BookstoreLink = styled.a`
  margin: 0 0.5rem;
  font-weight: 300;
  color: var(--gray-7);
`;
