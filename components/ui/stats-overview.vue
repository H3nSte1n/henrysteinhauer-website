<template>
  <div class="stats_overview">
    <template v-for="(skill, index) in stats">
      <StatsElement :key="index" :stats="skill" :position="statsPosition[index]" :invertedStyle="invertedStyle"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import StatsElement, { Position, Stats } from '@/components/ui/stats-element.vue'

@Component({
  components: {
    StatsElement
  }
})
export default class StatsOverview extends Vue {
  statsPosition!: Array<Position> = [];
  containerHeight: Number = 0;

  @Prop({ required: true })
  readonly stats!: Array<Stats>
  @Prop({default: false})
  readonly invertedStyle!: Boolean;

  private calcSkillPosition() {
    const gap = 50;
    let minWidth = 0;
    let maxWidth = 100;
    let minHeight = 0;
    let maxHeight = 20;

    this.stats.forEach((_stat, index) => {
      this.statsPosition.push({
        x: Math.floor(Math.random() * maxWidth) + minWidth,
        y: Math.floor(Math.random() * maxHeight) + minHeight + gap
      })
      if(index % 2 == 0) {
        this.statsPosition[index].x = this.statsPosition[index].x * -1;
        minHeight += 120;
        maxHeight += 120;
        minWidth += 100;
        maxWidth += 100;
      }
    })
    this.containerHeight = (this.stats.length / 2) * 120
  }

  created() {
    this.calcSkillPosition();
  }
}
</script>

<style scoped lang="scss">

.stats_overview {
  display: flex;
  max-width: 1400px;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

</style>
