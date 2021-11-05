<template>
  <a
    :key="index"
    ref="button"
    :href="buttonObj.src"
    :target="buttonObj.isTargetBlank ? '_blank' : '_self'"
    class="button"
  >
    <svg
      v-if="withSvg"
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
      ref="buttonContent"
      class="button__text"
      :class="{
        'button--mobile-relative': buttonObj.mobileHideSVG && withSvg,
        'button--relative': !withSvg,
        'button--left': buttonObj.textLeft,
        'button--underscore-animation': !withSvg,
      }"
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
  textLeft?: boolean;
  isTargetBlank?: boolean;
}

@Component
export default class Button extends Vue {
  @Prop({ required: true })
  readonly buttonObj!: IButtonObj;

  @Prop({ required: false })
  readonly styles!: Array<any>;

  @Prop({ required: false })
  readonly withSvg!: boolean;

  @Prop({ required: false })
  readonly withHoverAnimation!: boolean;

  get prepareStyle() {
    return '';
  }

  relativeCoords(event: MouseEvent) {
    const bounds = (event.target as HTMLInputElement).getBoundingClientRect();
    const width = (this.$refs.button as HTMLElement).offsetWidth / 2;
    const height = (this.$refs.button as HTMLElement).offsetHeight / 2;
    const x = event.clientX - bounds.left - width;
    const y = event.clientY - bounds.top - height;
    return { x, y };
  }

  animate(event: MouseEvent) {
    const { x, y } = this.relativeCoords(event);
    const devider = 10;
    (this.$refs.buttonContent as HTMLElement).style.transform = `translate(${-(x / devider)}px, ${-(y / devider)}px)`;
  }

  resetAnimation() {
    (this.$refs.buttonContent as HTMLElement).style.transform = 'translate(0px, 0px)';
  }

  mounted() {
    if (!this.withHoverAnimation) return;
    (this.$refs.button as HTMLElement).addEventListener('mousemove', this.animate);
    (this.$refs.button as HTMLElement).addEventListener('mouseleave', this.resetAnimation);
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
      stroke-dasharray: 1153;
      stroke-dashoffset: 0;

      @media screen and (min-width: 768px) {
        stroke-dasharray: 1153;
        stroke-dashoffset: 1153;
        transition: stroke-dashoffset 0.35s cubic-bezier(0.1, 0.7, 1, 0.1);
      }
    }
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 10vh;
  cursor: pointer;
  margin: 10px 10px;
  text-decoration: none;
  text-align: center;
  z-index: 9999;

  &:hover {
    .svg__path--animation {
      stroke-dasharray: 1150;
      stroke-dashoffset: 0;
    }
  }

  &__text {
    transition: transform 0.2s linear;
    color: black;
    text-decoration: none;
    font-size: 19px;
    position: absolute;
    padding: 10px;
    width: auto;
    z-index: 9999;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2vw;
    }
  }

  &--underscore-animation {
    &:hover {
      text-decoration: underline;
    }
  }

  &--left {
    text-align: left;
  }

  &--relative {
    position: relative;
  }

  &--mobile-relative {
    position: relative;

    @media screen and (min-width: 768px) {
      position: absolute;
    }
  }
}
</style>
