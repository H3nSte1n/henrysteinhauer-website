<template>
  <header class="header">
    <div class="header__fill-box" />
    <h1>Henry Steinhauer</h1>
    <div class="header__fill-box" />
  </header>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__fill-box {
    display: block;
    width: 40%;
    height: 40vh;
    background-color: black;
  }
}
</style>
