<template>
  <div class="stats_overview" :style="{ height: `${containerHeight}vh` }">
    <template v-for="(skill, index) in stats">
      <StatsElement :key="index" :stats="skill" :position="statsPosition[index]" :inverted-style="invertedStyle" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import StatsElement, { Position, Stats } from '@/components/ui/stats-element.vue';

@Component({
  components: {
    StatsElement,
  },
})
export default class StatsOverview extends Vue {
  statsPosition: Array<Position> = [];
  containerHeight: Number = 0;

  @Prop({ required: true })
  readonly stats!: Array<Stats>;

  @Prop({ default: false })
  readonly invertedStyle!: Boolean;

  private calcSkillPosition() {
    const minWidth = 10;
    const maxWidth = 40;
    let minHeight = 10;
    let maxHeight = 20;
    let invertResult = -1;

    this.stats.forEach((_stat, index) => {
      if (index % 2 === 0 && index !== 0) {
        minHeight += 37;
        maxHeight += 37;
      }
      invertResult = invertResult * -1;

      this.statsPosition.push({
        x: this.calcRandomNum(maxWidth, minWidth) * invertResult,
        y: this.calcRandomNum(maxHeight, minHeight),
      });
    });
    this.containerHeight = (this.stats.length / 2) * 30;
  }

  calcRandomNum(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  created() {
    this.calcSkillPosition();
  }
}
</script>

<style scoped lang="scss">
.stats_overview {
  display: flex;
  max-width: 1050px;
  width: 95vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
