<template>
  <div class="info-box">
    <SubHeadline :class="caption.length == 0 ? 'info-box--gap' : ''" :displayed_text="subheadline" />
    <Caption class="info-box--gap" v-if="caption.length > 0" :displayed_text="caption" />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import SubHeadline from '@/components/ui/subheadline.vue';
import Caption from '@/components/ui/caption.vue';

@Component({
  components: {
    SubHeadline,
    Caption
  }
})
export default class InfoBox extends Vue {
  @Prop({required: true})
  readonly subheadline!: String

  @Prop({default: ""})
  readonly caption!: String
}
</script>

<style scoped lang="scss">

.info-box {
  display: flex;
  max-width: 1400px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vh;

  &__headline {
    margin-bottom: 2vh;
  }

  &--gap {
    margin-bottom: 20vh;
  }
}

</style>
