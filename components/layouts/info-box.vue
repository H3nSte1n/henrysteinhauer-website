<template>
  <div class="info-box">
    <SubHeadline
      v-if="infoBoxInfos.headline"
      :class="!infoBoxInfos.caption ? 'info-box--gap' : ''"
      :displayed-text="infoBoxInfos.headline"
    />
    <Caption v-if="infoBoxInfos.caption" class="info-box--gap" :displayed-text="infoBoxInfos.caption" />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import SubHeadline from '@/components/ui/subheadline.vue';
import Caption from '@/components/ui/caption.vue';

export interface InfoBoxInterface {
  headline?: String;
  caption?: String;
}

@Component({
  components: {
    SubHeadline,
    Caption,
  },
})
export default class InfoBox extends Vue {
  @Prop({ required: true })
  readonly infoBoxInfos!: InfoBoxInterface;
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
  margin-bottom: 200px;

  @media screen and (min-width: 1480px) {
    margin-bottom: 300px;
  }

  &__headline {
    margin-bottom: 2vh;
  }

  &--gap {
    margin-bottom: 20vh;
  }
}
</style>
