<template>
  <div>
    <hr v-if="dividing_line" />
    <p class="caption">
      {{ displayed_text }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator';

@Component
export default class Caption extends Vue {
  @Prop({ required: true })
  readonly displayed_text!: string;

  @Prop({ default: false })
  readonly dividing_line!: boolean;
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
