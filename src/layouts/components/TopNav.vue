<template>
  <nav class="top-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/palete">Palete</RouterLink>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
  .top-nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      &:first-of-type {
        border: 0;
      }

      &.router-link-exact-active {
        color: var(--app-color-text);

        &:hover {
          background-color: transparent;
        }
      }
    }

    @media (min-width: 1024px) {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
  }
</style>
