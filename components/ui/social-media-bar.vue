<template>
  <div class="social-media-bar">
    <template v-for="(icon, index) in Icons">
      <a :key="index" :href="icon.src" class="social-media-bar__icon-container">
        <span class="social-media-bar__icon">{{ icon.label }}</span>
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface Icon {
  src: String;
  label: String;
}

@Component
export default class SocialMediaBar extends Vue {
  @Prop({ required: true, default: [] })
  readonly Icons!: Array<Icon>;
}
</script>

<style scoped lang="scss">
.social-media-bar {
  width: 100%;
  max-width: 1052px;
  display: flex;
  justify-content: space-around;
  &__icon {
    color: black;
    text-decoration: none;
    font-size: 19px;
    position: absolute;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2vw;
    }

    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 16vh;

      &:hover {
        background-image: url('./assets/illustration-circle-contact.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
