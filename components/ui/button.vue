<template>
  <a :key="index" :href="buttonObj.src" target="_blank" class="button">
    <svg
      width="100%"
      viewBox="0 0 214 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="svg"
      :class="{ 'svg--mobile-hide': buttonObj.mobileHideSVG }"
    >
      <path
        class="svg__path--animation"
        d="M30.5293 24.3069C75.8885 9.58676 212.222 21.6082 212.991 57.1818C213.76 92.7554 163.788 121.214 89.4706 119.497C15.1532 117.78 -62.7958 32.2156 89.4706 14.4935C239.131 -2.9253 245.281 121.46 115.61 125.876C-14.0611 130.292 -73.7713 15.7201 156.613 1"
        stroke="black"
      />
    </svg>
    <span
      class="button__icon"
      :class="{ 'button--relative': buttonObj.mobileHideSVG }"
      :style="styles"
      v-html="buttonObj.label"
    />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface IButtonObj {
  src: String;
  label: String;
  mobileHideSVG?: boolean;
}

@Component
export default class Button extends Vue {
  @Prop({ required: true })
  readonly buttonObj!: IButtonObj;

  @Prop({ required: false })
  readonly styles!: Array<any>;

  get prepareStyle() {
    return '';
  }
}
</script>

<style scoped lang="scss">
.svg {
  width: 240px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  &--mobile-hide {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  &__path {
    &--animation {
      stroke-dasharray: 1150;
      stroke-dashoffset: 0;

      @media screen and (min-width: 768px) {
        stroke-dasharray: 1150;
        stroke-dashoffset: 1150;
        transition: stroke-dashoffset 0.5s ease-in-out;
      }
    }
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 16vh;
  cursor: pointer;
  margin: 10px 10px;
  text-decoration: none;

  &:hover {
    .svg__path--animation {
      stroke-dasharray: 1150;
      stroke-dashoffset: 0;
    }
  }

  &__icon {
    color: black;
    text-decoration: none;
    font-size: 19px;
    position: absolute;
    padding: 10px;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2vw;
    }
  }

  &--relative {
    position: relative;

    @media screen and (min-width: 768px) {
      position: absolute;
    }
  }
}
</style>
