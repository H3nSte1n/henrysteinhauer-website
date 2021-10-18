<template>
  <h2 class="subheadline" ref="subheadline" v-html="displayedText" />
</template>

<script lang="ts">
import { Prop, Component } from 'nuxt-property-decorator';
import { Animation, AnimationInterface } from '@/mixins/number-increase-animation';

@Component
export default class Subheadline extends Animation {
  @Prop({ required: true })
  readonly displayedText!: string;

  animationsElements: Array<AnimationInterface> = [
    {
      methodObj: {
        name: 'revealAnimation',
        params: ['subheadline'],
      },
      target: 'subheadline',
      options: {
        threshold: 0.2,
      },
    },
  ];

  mounted() {
    this.startObserver(this.animationsElements);
  }
}
</script>

<style scoped lang="scss">
.subheadline {
  font-size: 10vw;
  text-align: center;
  max-width: 1306px;
  font-weight: 400;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

  &--visible {
    transform: translateY(0%);
    opacity: 1;
  }

  @media screen and (min-width: 1480px) {
    font-size: 150px;
  }
}
</style>
