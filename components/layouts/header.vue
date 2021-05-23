<template>
  <header class="header">
    <div class="header-row">
      <h2 class="header-row--big">Full Stack</h2>
      <p class="header-row--small"></p>
    </div>
    <div class="header-row">
      <h1 class="header-row--small header-row--small-invert">Henry<br />Steinhauer</h1>
      <h2 class="header-row--big">Developer</h2>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  margin-bottom: 100px;

  @media screen and (min-width: 1480px) {
    margin-bottom: 200px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 30px 0;

    &--big {
      font-size: 15vw;
      font-weight: 400;
    }

    &--small {
      font-size: 26px;
      font-weight: 400;

      &-invert {
        padding-left: 26px;

        @media screen and (min-width: 640px) {
          padding-left: 6vw;
        }
      }
    }
  }
}
</style>
