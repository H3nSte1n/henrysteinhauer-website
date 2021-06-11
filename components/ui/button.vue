<template>
  <a :href="buttonObj.src" class="button">
    <span class="button__icon">{{ buttonObj.label }}</span>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface Icon {
  src: String;
  label: String;
}

@Component
export default class Button extends Vue {
  @Prop({ required: true, default: [] })
  readonly buttonObj!: Icon;
}
</script>

<style scoped lang="scss">
.button {
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
  }
}
</style>
