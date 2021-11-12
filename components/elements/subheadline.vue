<template>
  <h2 ref="subheadline" class="subheadline" :class="{ 'subheadline--center': isCenter }" v-html="displayedText" />
</template>

<script lang="ts">
import { Prop, Component } from 'nuxt-property-decorator';
import type { IAnimation } from '@/mixins/Animation';
import { Animation } from '~/mixins/Animation';

@Component
export default class Subheadline extends Animation {
  @Prop({ required: true })
  readonly displayedText!: string;

  @Prop({ required: true })
  readonly isCenter!: boolean;

  animationsElements: Array<IAnimation> = [
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
  font-size: 12vw;
  text-align: center;
  width: 100%;
  max-width: 1306px;
  font-weight: 400;
  text-align: left;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

  &--visible {
    transform: translateY(0%);
    opacity: 1;
  }

  &--center {
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 90px;
  }
}
</style>
