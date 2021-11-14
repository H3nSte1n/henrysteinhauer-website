<template>
  <div class="content-box">
    <h2 v-if="headline" class="content-box__headline">
      {{ headline }}
    </h2>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator';

@Component
export default class Caption extends Vue {
  @Prop({ required: false })
  readonly headline!: string;
}
</script>

<style scoped lang="scss">
.content-box {
  margin-bottom: 100px;
  max-width: 87%;
  margin: 7vh auto;

  &__headline {
    margin-bottom: 20px;
  }
}
</style>
