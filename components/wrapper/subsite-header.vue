<template>
  <header ref="header" class="header">
    <div class="header-row">
      <h2 class="header-row--big">{{ headline }}</h2>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({ required: true })
  readonly headline!: string;
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  max-width: 92%;
  padding-top: 30vh;
  margin: 10vh auto 17vh auto;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1480px) {
    margin-bottom: 200px;
  }

  &-row {
    width: 100%;
    margin: 0px 0;
    top: 50%;

    @media screen and (min-width: 768px) {
      margin: 30px 0;
    }

    &--big {
      font-size: 15vw;
      font-weight: 400;
      position: relative;

      &::before {
        content: '';
        width: 26vw;
        height: 26vw;
        position: absolute;
        border-radius: 100%;
        top: 13%;
        left: 20%;
        background-color: rgba(23, 99, 142, 0.2);
        filter: blur(3vw);
      }

      &::after {
        content: '';
        width: 26vw;
        height: 26vw;
        position: absolute;
        top: -22%;
        left: 38%;
        border-radius: 100%;
        background-color: rgba(61, 142, 23, 0.2125);
        filter: blur(5vw);
      }

      &-blobs-reverse {
        &::before {
          top: -22%;
          left: 38%;
        }

        &::after {
          top: 13%;
          left: 20%;
        }
      }
    }
  }
}
</style>
