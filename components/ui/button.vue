<template>
  <a :key="index" :href="buttonObj.src" class="button">
    <img :src="require('/assets/illustration-circle-contact.svg')" alt="hover effect" class="button__hover" />
    <span class="button__icon" :style="styles" v-html="buttonObj.label" />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

export interface IButtonObj {
  src: String;
  label: String;
}

@Component
export default class Button extends Vue {
  @Prop({ required: true })
  readonly buttonObj!: IButtonObj;

  @Prop({ required: false })
  readonly styles!: Array<any>;

  get prepareStyle() {
    return '';
  }
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
  cursor: pointer;

  &:hover {
    .button__hover {
      opacity: 1;
    }
  }

  &__hover {
    opacity: 0;
  }

  &__icon {
    color: black;
    text-decoration: none;
    font-size: 19px;
    position: absolute;
    padding: 10px;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2vw;
    }
  }
}
</style>
