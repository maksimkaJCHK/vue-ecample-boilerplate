<template>
  <button class="btn">
    <slot>Отправить</slot>
  </button>
</template>

<style lang="scss">
  @import '@/assets/_easing.scss';

  .btn {
    color: #000;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: var(--app-border-radius);
    background: #e0dbdb;
    border: none;
    font: 16px/1.5 var(--app-font-family);
    transition: background-color .4s $easeInOutQuad 0s;

    &:hover {
      background: #b9b8b8;
    }

    &[disabled] {
      cursor: default;
      opacity: .6;

      &:hover {
        background: #fff;
      }
    }
  }
</style>
