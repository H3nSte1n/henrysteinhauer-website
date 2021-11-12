<template>
  <div>
    <hr v-if="dividingLine" />
    <p ref="caption" class="caption">
      {{ displayedText }}
    </p>
  </div>
</template>

<script lang="ts">
import { Prop, Component } from 'nuxt-property-decorator';
import { Animation, IAnimation } from '@/mixins/Animation';

@Component
export default class Caption extends Animation {
  @Prop({ required: true })
  readonly displayedText!: string;

  @Prop({ default: false })
  readonly dividingLine!: boolean;

  animationsElements: Array<IAnimation> = [
    {
      methodObj: {
        name: 'revealAnimation',
        params: ['caption'],
      },
      target: 'caption',
      options: {
        threshold: 0.8,
      },
    },
  ];

  mounted() {
    this.startObserver(this.animationsElements);
  }
}
</script>

<style scoped lang="scss">
.caption {
  font-size: 3vw;
  max-width: 1050px;
  margin: 6vh 0 0 0;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s ease-out 0.15s, opacity 0.35s ease-out 0.15s;

  &--visible {
    transform: translateY(0%);
    opacity: 1;
  }

  @media screen and (min-width: 640px) {
    font-size: 2.5vw;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.4vw;
  }

  @media screen and (min-width: 1480px) {
    font-size: 26px;
  }
}
</style>
