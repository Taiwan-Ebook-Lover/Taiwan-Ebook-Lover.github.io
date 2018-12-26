<template>
  <!-- A Pen by Grélard Antoine on CodePen. -->
  <!-- https://codepen.io/ikoshowa/pen/qOMvpy -->
  <div class="bookshelf-wrapper">
    <ul class="books-list">
      <li class="book-item first"></li>
      <li class="book-item second"></li>
      <li class="book-item third"></li>
      <li class="book-item fourth"></li>
      <li class="book-item fifth"></li>
      <li class="book-item sixth"></li>
    </ul>
    <div class="shelf"></div>
  </div>
</template>

<style lang='scss' scoped>
  $thickness : 5px;
  $duration : 2500;
  $delay : $duration/6;
  $bookColor: #B3E5FC;

  @mixin polka($size, $dot, $base, $accent){
    background: $base;
    background-image: radial-gradient($accent $dot, transparent 0);
    background-size:$size $size;
    background-position: 0 -2.5px;
  }

  .bookshelf-wrapper {
    position: relative;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .books-list {
    margin: 0 auto;
    width: 300px;
    padding: 0;
  }

  .book-item {
    position: absolute;
    top: -120px;
    box-sizing: border-box;
    list-style: none;
    width: 40px;
    height: 120px;
    opacity: 0;
    background-color: transparent;
    border: $thickness solid $bookColor;
    transform-origin: bottom left;
    transform: translateX(300px);
    animation: travel #{$duration}ms linear infinite;

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
        height: $thickness;
        background-color: $bookColor;
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
        height: $thickness*3.5;
        border-top: $thickness solid $bookColor;
        border-bottom: $thickness solid $bookColor;
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
        border: $thickness solid $bookColor;
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
        height: $thickness*3.5;
        border-top: $thickness solid $bookColor;
        border-bottom: $thickness solid $bookColor;
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
        height: $thickness;
        background-color: $bookColor;
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
        border: $thickness solid $bookColor;
      }
    }

    &:nth-child(2) {
      animation-delay: #{$delay*1}ms;
    }

    &:nth-child(3) {
      animation-delay: #{$delay*2}ms;
    }

    &:nth-child(4) {
      animation-delay: #{$delay*3}ms;
    }

    &:nth-child(5) {
      animation-delay: #{$delay*4}ms;
    }

    &:nth-child(6) {
      animation-delay: #{$delay*5}ms;
    }

  }

  .shelf {
    width: 300px;
    height: $thickness;
    margin: 0 auto;
    background-color: $bookColor;
    position: relative;

    &:before,
    &:after {
      content: '';
      position : absolute;
      width: 100%;
      height: 100%;
      @include polka(10px, 30%, $bookColor, rgba(255,255,255,0.5));
      top: 200%;
      left: 5%;
      animation: move #{$duration/10}ms linear infinite;
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
</style>
