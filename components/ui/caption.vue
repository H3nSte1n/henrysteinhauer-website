<template>
  <div>
    <hr v-if="dividingLine" />
    <p class="caption">
      {{ displayedText }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator';

@Component
export default class Caption extends Vue {
  @Prop({ required: true })
  readonly displayedText!: string;

  @Prop({ default: false })
  readonly dividingLine!: boolean;
}
</script>

<style scoped lang="scss">
.caption {
  font-size: 1.4vw;
  max-width: 1050px;
  margin: 6vh 10px 0 10px;

  @media screen and (min-width: 1480px) {
    font-size: 26px;
  }
}
</style>
