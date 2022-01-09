// A Pen by Grélard Antoine on CodePen.
// https://codepen.io/ikoshowa/pen/qOMvpy
import Box from '@components/Box';
import { cssVar, rgba } from 'polished';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const thickness = 5;
const duration = 2500;
const delay = duration / 6;

/* eslint-disable indent */
const StyledBookshelfWrapper = styled.div`
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  .books_list {
    margin: 0 auto;
    width: 300px;
    padding: 0;
  }

  .book_item {
    position: absolute;
    top: -120px;
    box-sizing: border-box;
    list-style: none;
    width: 40px;
    height: 120px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    border: ${thickness}px solid var(--primary-color);
    transform-origin: bottom left;
    transform: translateX(300px);
    animation: travel ${duration}ms linear infinite;

    &.first {
      top: -140px;
      height: 140px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: ${thickness}px;
        background-color: var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.second,
    &.fifth {
      &:before,
      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: ${thickness * 3.5}px;
        border-top: ${thickness}px solid var(--primary-color);
        border-bottom: ${thickness}px solid var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.third {
      &:before,
      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 10px;
        left: 9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: ${thickness}px solid var(--primary-color);
      }

      &:after {
        top: initial;
        bottom: 10px;
      }
    }

    &.fourth {
      top: -130px;
      height: 130px;

      &:before {
        box-sizing: border-box;
        content: '';
        position: absolute;
        top: 46px;
        left: 0;
        width: 100%;
        height: ${thickness * 3.5}px;
        border-top: ${thickness}px solid var(--primary-color);
        border-bottom: ${thickness}px solid var(--primary-color);
      }
    }

    &.fifth {
      top: -100px;
      height: 100px;
    }

    &.sixth {
      top: -140px;
      height: 140px;

      &:before {
        box-sizing: border-box;
        content: '';
        position: absolute;
        bottom: 31px;
        left: 0px;
        width: 100%;
        height: ${thickness}px;
        background-color: var(--primary-color);
      }

      &:after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        bottom: 10px;
        left: 9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: ${thickness}px solid var(--primary-color);
      }
    }

    &:nth-child(2) {
      animation-delay: ${delay * 1}ms;
    }

    &:nth-child(3) {
      animation-delay: ${delay * 2}ms;
    }

    &:nth-child(4) {
      animation-delay: ${delay * 3}ms;
    }

    &:nth-child(5) {
      animation-delay: ${delay * 4}ms;
    }

    &:nth-child(6) {
      animation-delay: ${delay * 5}ms;
    }
  }

  .shelf {
    width: 300px;
    height: ${thickness}px;
    margin: 0 auto;
    background-color: var(--primary-color);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      background-image: radial-gradient(${rgba(cssVar('--primary-color'), 0.5)} 30%, transparent 0);
      background-size: 10px 10px;
      background-position: 0 -2.5px;
      top: 200%;
      left: 5%;
      animation: move ${duration / 10}ms linear infinite;
    }

    &:after {
      top: 400%;
      left: 7.5%;
    }
  }

  @keyframes move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 10px;
    }
  }

  @keyframes travel {
    0% {
      opacity: 0;
      transform: translateX(300px) rotateZ(0deg) scaleY(1);
    }
    6.5% {
      transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    }
    8.8% {
      transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    }
    10% {
      opacity: 1;
      transform: translateX(270px) rotateZ(0deg);
    }
    17.6% {
      transform: translateX(247.2px) rotateZ(-30deg);
    }
    45% {
      transform: translateX(165px) rotateZ(-30deg);
    }
    49.5% {
      transform: translateX(151.5px) rotateZ(-45deg);
    }
    61.5% {
      transform: translateX(115.5px) rotateZ(-45deg);
    }
    67% {
      transform: translateX(99px) rotateZ(-60deg);
    }
    76% {
      transform: translateX(72px) rotateZ(-60deg);
    }
    83.5% {
      opacity: 1;
      transform: translateX(49.5px) rotateZ(-90deg);
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateX(0px) rotateZ(-90deg);
    }
  }
`;
/* eslint-enable indent */

const BooksLoading: FunctionComponent = () => {
  return (
    <Box height="200px" width="375px" position="relative">
      <StyledBookshelfWrapper>
        <ul className="books_list">
          <li className="book_item first"></li>
          <li className="book_item second"></li>
          <li className="book_item third"></li>
          <li className="book_item fourth"></li>
          <li className="book_item fifth"></li>
          <li className="book_item sixth"></li>
        </ul>
        <div className="shelf"></div>
      </StyledBookshelfWrapper>
    </Box>
  );
};

export default BooksLoading;
