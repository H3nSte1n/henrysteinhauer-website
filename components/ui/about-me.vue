<template>
  <div class="about-me">
    <h3 class="about-me__headline">{{ aboutMeInfo.headline }}</h3>
    <p class="about-me__desc">{{ aboutMeInfo.description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface AboutMeInterface {
  headline: string;
  description: string;
}

@Component
export default class AboutMe extends Vue {
  @Prop({ required: true })
  readonly aboutMeInfo!: AboutMeInterface;
}
</script>

<style scoped lang="scss">
.about-me {
  &__headline {
    float: left;
    margin: 3px 30px 30px 0;
    font-size: 14px;
    font-weight: 400;
  }

  &__desc {
    font-size: 21px;
  }
}
</style>
