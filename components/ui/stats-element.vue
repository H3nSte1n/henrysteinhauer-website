<template>
  <div
    :class="invertedStyle ? 'stats-element stats-element--invert' : 'stats-element'"
    :style="{ left: `calc(50% - ${positionX}%)`, top: `${positionY}px` }"
  >
    <p>{{ stats.label }}</p>
    <strong class="stats-element--big">{{ stats.value }}</strong>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface Stats {
  label: String;
  value: String;
}

export interface Position {
  x: Number;
  y: Number;
}

@Component
export default class StatsElement extends Vue {
  @Prop({ required: true })
  readonly stats!: Stats;
  @Prop({ required: true })
  readonly position!: Position;
  @Prop({ default: false })
  readonly invertedStyle!: Boolean;

  mounted() {
    console.log(this.position);
  }

  get positionX() {
    return this.position.x;
  }

  get positionY() {
    return this.position.y;
  }
}
</script>

<style scoped lang="scss">
.stats-element {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  transform: translate(0px, 0px);
  animation: test 1000s ease-in-out infinite;

  &--invert {
    flex-direction: column-reverse;

    .stats-element--big {
      font-size: 4vw;
    }
  }

  &--big {
    margin: 15px 0;
    font-size: 2vw;
  }
}

@mixin transform($xAxis, $yAxis) {
  transform: translate($xAxis, $yAxis);
}

@keyframes test {
  0% {
    @include transform(-10px, 20px);
  }
  15% {
    @include transform(10px, 30px);
  }
  30% {
    @include transform(40px, 40px);
  }
  45% {
    @include transform(20px, 50px);
  }
  60% {
    @include transform(-5px, 30px);
  }
  60% {
    @include transform(0px, 10px);
  }
  75% {
    @include transform(-20px, -10px);
  }
  90% {
    @include transform(50px, 20px);
  }
  100% {
    @include transform(7px, 60px);
  }
}
</style>
