import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    FlexboxProps {}

export const Box = styled.div<BoxProps>`
  ${compose(border, flexbox, layout, position, space)}
`;
