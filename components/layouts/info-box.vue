<template>
  <div class="info-box" :class="{ 'info-box--blob': withBlob }">
    <SubHeadline
      v-if="infoBoxInfos.headline"
      :class="!infoBoxInfos.caption ? 'info-box--gap' : ''"
      :displayed-text="infoBoxInfos.headline"
      :is-center="headlineCenter"
    />
    <svg
      v-if="withUnderline"
      width="100vw"
      height="12"
      viewBox="0 0 1798 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.500001 11C0.500001 11 455.5 1.00003 928 1.00001C1400.5 0.999995 1383.5 7.00016 1797.5 7"
        stroke="#1F1E1E"
      />
    </svg>
    <Caption v-if="infoBoxInfos.caption" class="info-box--gap" :displayed-text="infoBoxInfos.caption" />
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
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

  @Prop({ required: false })
  readonly withBlob!: boolean;

  @Prop({ required: false })
  readonly headlineCenter!: boolean;

  @Prop({ required: false })
  readonly withUnderline!: boolean;
}
</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  position: relative;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  padding: 3vh 0;

  @media screen and (min-width: 1024px) {
    padding: 0 10%;
  }

  &--blob {
    &::before {
      content: '';
      width: 75%;
      height: 90%;
      position: absolute;
      border-radius: 100%;
      bottom: 0%;
      left: 0%;
      background-color: rgba(23, 99, 142, 0.17);
      filter: blur(3vw);
    }

    &::after {
      content: '';
      width: 60%;
      height: 90%;
      position: absolute;
      bottom: 0%;
      left: 31%;
      border-radius: 100%;
      background-color: rgba(61, 142, 23, 0.1925);
      filter: blur(5vw);
    }
  }

  &__headline {
    margin-bottom: 2vh;
  }

  &--gap {
    margin-bottom: 12vh;

    @media screen and (min-width: 768px) {
      margin-bottom: 16vh;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 20vh;
    }
  }
}
</style>
