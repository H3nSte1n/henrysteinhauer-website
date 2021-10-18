<template>
  <div class="stats_overview" :style="{ height: `${containerHeight}px` }">
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
    let minHeight = 0;
    let maxHeight = 30;
    let invertResult = -1;

    this.stats.forEach((_stat, index) => {
      if (index % 2 === 0 && index !== 0) {
        minHeight += 280;
        maxHeight += 280;
      }
      invertResult = invertResult * -1;

      this.statsPosition.push({
        x: this.calcRandomNum(maxWidth, minWidth) * invertResult,
        y: this.calcRandomNum(maxHeight, minHeight),
      });
    });
    this.containerHeight = (this.stats.length / 2) * 280;
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
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
