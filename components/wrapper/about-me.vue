<template>
  <div id="aboutme" class="about-me">
    <h3 class="about-me__headline">{{ aboutMeInfo.headline }}</h3>
    <p class="about-me__desc">{{ aboutMeInfo.description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface IAboutMeProps {
  headline: string;
  description: string;
}

@Component
export default class AboutMe extends Vue {
  @Prop({ required: true })
  readonly aboutMeInfo!: IAboutMeProps;
}
</script>

<style scoped lang="scss">
.about-me {
  margin-top: 60px;

  &__headline {
    display: none;
    float: left;
    margin: 3px 30px 30px 0;
    font-size: 2vw;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  &__desc {
    font-size: 2.5vw;
    text-align: justify;
  }
}
</style>
