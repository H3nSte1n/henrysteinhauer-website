<template>
  <div ref="section-connection" class="section-connection">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 617">
      <path ref="path" class="path" d="M1 1c14.49 204.66 192.321 206.191 14.49 615" stroke="#000" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import { Animation, AnimationInterface } from '~/mixins/Animation';

@Component
export default class SectionConnection extends Animation {
  totalLength!: number;
  path!: SVGGeometryElement;

  getAnimationsElement(refSvgName: string): Array<AnimationInterface> {
    return [
      {
        methodObj: {
          name: 'animateOnScroll',
          params: ['drawSVG', [this.initPath(refSvgName), refSvgName]],
        },
        target: 'section-connection',
      },
    ];
  }

  mounted() {
    this.startObserver(this.getAnimationsElement('path'));
  }
}
</script>

<style scoped lang="scss">
.section-connection {
  width: 5vw;
  margin: 4vh 0;
}
svg {
  width: 100%;
  height: 100%;
  stroke-width: 1.5px;
}

.path {
  transition: stroke-dashoffset 0.2s linear;
}
</style>
