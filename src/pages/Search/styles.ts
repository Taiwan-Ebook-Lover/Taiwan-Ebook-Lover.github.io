import styled from 'styled-components';
import {
  compose,
  fontSize,
  FontSizeProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  margin,
  MarginProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
} from 'styled-system';

/**
 * index
 */

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--gray-1);
  z-index: 1;
`;

export const TabsBorder = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid var(--gray-4);
`;

/**
 * BookItem
 */

export const ItemImage = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  border: 1px solid var(--gray-4);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ItemStoreBadge = styled.span<FontSizeProps>`
  display: inline-flex;
  align-items: center;
  background-color: var(--gray-4);
  padding-right: 1rem;
  border-radius: 0.75rem;
  ${fontSize}
`;

export const ItemStoreLogo = styled.img<MarginProps & MaxHeightProps & MaxWidthProps>`
  border: 1px solid var(--gray-4);
  border-radius: 50%;
  overflow: hidden;
  ${compose(margin, maxHeight, maxWidth)}
`;

export const ItemTitle = styled.h3<FontSizeProps>`
  margin: auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${fontSize}
`;

export const ItemAbout = styled.p<FontSizeProps & MaxHeightProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
  ${compose(fontSize, maxHeight)}
`;

export const ItemPrice = styled.span<FontSizeProps>`
  color: var(--primary-6);
  margin: 0;
  ${fontSize}
`;

export const ItemLayout = styled.div<GridTemplateColumnsProps>`
  height: 15rem;
  max-height: 15rem;
  max-width: 100vw;
  display: grid;
  grid-template-rows: 1.5rem 2.55rem 1fr 3rem;
  grid-template-areas:
    'thumbnail bookstore'
    'thumbnail title'
    'thumbnail about'
    'thumbnail price';
  grid-gap: 0.5rem 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  ${gridTemplateColumns}

  & ${ItemImage}, ${ItemStoreBadge}, ${ItemTitle}, ${ItemAbout}, ${ItemPrice} {
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
