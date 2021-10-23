import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends BorderProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const Box = styled.div<BoxProps>`
  ${compose(border, flexbox, grid, layout, position, space)}
`;
