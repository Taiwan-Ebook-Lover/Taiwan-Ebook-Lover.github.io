import { color, ColorProps } from '@utils/style/color';
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
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

const Box = styled.div<BoxProps>`
  ${compose(border, color, flexbox, grid, layout, position, space)}
`;

export default Box;
