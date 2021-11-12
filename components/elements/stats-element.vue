<template>
  <div
    ref="stats-element"
    :class="invertedStyle ? 'stats-element stats-element--invert' : 'stats-element'"
    :style="{ left: `calc(50% - ${positionX}%)`, top: `${positionY}vh` }"
  >
    <div>
      <p class="stats-element__label">{{ stats.label }}</p>
      <bold class="stats-element--big">{{ stats.value }}</bold>
    </div>
    <div ref="blobs" class="blobs" />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import type { IAnimation } from '@/mixins/Animation';
import { Animation } from '~/mixins/Animation';

export interface IStats {
  label: String;
  value: String;
}

export interface IPosition {
  x: Number;
  y: Number;
}

@Component
export default class StatsElement extends Animation {
  @Prop({ required: true })
  readonly stats!: IStats;

  @Prop({ required: true })
  readonly position!: IPosition;

  @Prop({ default: false })
  readonly invertedStyle!: Boolean;

  animationsElements: Array<IAnimation> = [
    {
      methodObj: {
        name: 'revealAnimation',
        params: ['stats-element'],
      },
      target: 'stats-element',
    },
  ];

  calcRotationPosition() {
    const max = 0;
    const min = 360;

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addRotationPositionToBlobClass() {
    (this.$refs.blobs as HTMLElement).style.transform = `rotate(${this.calcRotationPosition()}deg)`;
  }

  mounted() {
    this.addRotationPositionToBlobClass();
    this.startObserver(this.animationsElements);
  }

  get positionX() {
    return this.position.x;
  }

  get positionY() {
    return this.position.y;
  }
}
</script>

<style lang="scss">
.stats-element {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  opacity: 0;
  transition: transform 0.5s ease-out 0.15s, opacity 0.35s ease-out 0.15s;

  &--visible {
    transform: translateY(0%);
    opacity: 1;
  }

  &__label {
    font-size: 3vw;
    margin-bottom: 10px;

    @media screen and (min-width: 640px) {
      font-size: 2.2vw;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
      }
  }

  &--invert {
    flex-direction: column-reverse;

    .stats-element__label {
      font-size: 17px;
      margin-bottom: 10px;

      @media screen and (min-width: 640px) {
        font-size: 2vw;
      }

      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }

    .stats-element--big {
      font-size: 36px;

      @media screen and (min-width: 640px) {
        font-size: 4.5vw;
      }

      @media screen and (min-width: 768px) {
        font-size: 4vw;
      }
    }
  }

  &--big {
    margin: 15px 0;
    font-size: 4.7vw;

    @media screen and (min-width: 640px) {
      font-size: 3.5vw;
    }

    @media screen and (min-width: 768px) {
      font-size: 3.5vw;
    }

    @media screen and (min-width: 920px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.4vw;
    }
  }

  @keyframes rotate_blob_before {
    0% {
      top: -77%;
      left: -78%;
    }
    5% {
      top: -70%;
      left: -77%;
    }
    10% {
      top: -60%;
      left: -65%;
    }
    15% {
      top: -57%;
      left: -53%;
    }
    20% {
      top: -45%;
      left: -47%;
    }
    23% {
      top: -37%;
      left: -39%;
    }
    27% {
      top: -25%;
      left: -34%;
    }
    30% {
      top: -20%;
      left: -25%;
    }
    34% {
      top: -14%;
      left: -17%;
    }
    37% {
      top: -7%;
      left: -12%;
    }
    46% {
      top: -4%;
      left: -10%;
    }
    50% {
      top: 0%;
      left: -8%;
    }
    67% {
      top: -6%;
      left: -10%;
    }
    72% {
      top: -28%;
      left: 15%;
    }
    78% {
      top: -39%;
      left: -20%;
    }
    83% {
      top: -48%;
      left: -38%;
    }
    85% {
      top: -56%;
      left: -37%;
    }
    90% {
      top: -69%;
      left: -49%;
    }
    92% {
      top: -72%;
      left: -56%;
    }
    95% {
      top: -76%;
      left: -72%;
    }
    100% {
      top: -77%;
      left: -78%;
    }
  }

  @keyframes rotate_blob_after {
    0% {
      top: 0%;
      left: -8%;
    }
    5% {
      top: -6%;
      left: -10%;
    }
    10% {
      top: -28%;
      left: 15%;
    }
    15% {
      top: -39%;
      left: -20%;
    }
    20% {
      top: -48%;
      left: -38%;
    }
    23% {
      top: -56%;
      left: -37%;
    }
    27% {
      top: -69%;
      left: -49%;
    }
    30% {
      top: -72%;
      left: -56%;
    }
    46% {
      top: -76%;
      left: -72%;
    }
    50% {
      top: -77%;
      left: -78%;
    }
    67% {
      top: -70%;
      left: -77%;
    }
    72% {
      top: -60%;
      left: -65%;
    }
    78% {
      top: -57%;
      left: -53%;
    }
    83% {
      top: -45%;
      left: -47%;
    }
    85% {
      top: -37%;
      left: -39%;
    }
    90% {
      top: -25%;
      left: -34%;
    }
    92% {
      top: -20%;
      left: -25%;
    }
    95% {
      top: -14%;
      left: -17%;
    }
    100% {
      top: 0%;
      left: -8%;
    }
  }
}

.blobs {
  position: absolute;
  transform: rotate(0);
  width: 12vw;
  height: 12vw;
  // top: -75%;
  // left: -25%;
  animation: rotate_blob 526s linear infinite;

  &::before {
    content: '';
    width: 12vw;
    height: 12vw;
    position: absolute;
    border-radius: 100%;
    top: -20%;
    left: -20%;
    background-color: rgba(23, 99, 142, 0.4);
    filter: blur(3vw);
  }

  &::after {
    content: '';
    width: 12vw;
    height: 12vw;
    position: absolute;
    top: 20%;
    left: 20%;
    border-radius: 100%;
    background-color: rgba(61, 142, 23, 0.4125);
    filter: blur(5vw);
  }
}

@keyframes rotate_blob {
  100% {
    transform: rotate(9000deg);
  }
}

@mixin transform($xAxis, $yAxis) {
  transform: translate($xAxis, $yAxis);
}
</style>
