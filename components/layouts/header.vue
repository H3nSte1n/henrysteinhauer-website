<template>
  <header class="header">
    <div class="header-row">
      <h2 class="header-row--big">Full Stack</h2>
      <p class="header-row--small"></p>
    </div>
    <div class="header-row">
      <h1 class="header-row--small header-row--small-invert header-row--small header-row--small-text">
        Henry<br />Steinhauer
      </h1>
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
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    &--big {
      font-size: 15vw;
      font-weight: 400;
    }

    &--small {
      font-size: 26px;
      font-weight: 400;

      &-text {
        background-image: url('./assets/illustration-circle-contact.svg');
        padding: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        text-transform: uppercase;
        font-size: 2vw;

        @media screen and (min-width: 768px) {
          font-size: 1.8vw;
        }

        @media screen and (min-width: 1024px) {
          padding: 71px;
          font-size: 2vw;
        }
      }

      &-invert {
        @media screen and (min-width: 640px) {
          margin-left: 2vw;
        }
      }
    }
  }
}
</style>
