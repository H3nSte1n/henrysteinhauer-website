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
  margin-top: 30px;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 10vw;
    padding-top: 10vw;
  }

  &__headline {
    display: none;
    float: left;
    margin: 3px 30px 30px 0;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin: 1.25vw 7vw 6vw 0;

    @media screen and (min-width: 1344px) {
      display: block;
    }
  }

  &__desc {
    font-size: 4vw;
    text-align: justify;
    letter-spacing: 0.05vw;

    @media screen and (min-width: 640px) {
      font-size: 2.5vw;
    }
  }
}
</style>
