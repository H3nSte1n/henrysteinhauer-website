<template>
  <h2 class="subheadline">{{ displayedText }}</h2>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator';

@Component
export default class Subheadline extends Vue {
  @Prop({ required: true })
  readonly displayedText!: string;
}
</script>

<style scoped lang="scss">
.subheadline {
  font-size: 10vw;
  text-align: center;
  max-width: 1306px;
  font-weight: 400;

  @media screen and (min-width: 1480px) {
    font-size: 150px;
  }
}
</style>
