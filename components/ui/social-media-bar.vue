<template>
  <div class="social-media-bar">
    <template v-for="(icon, index) in Icons">
      <Button :key="index" :button-obj="icon" :with-hover-animation="true" :with-svg="true" />
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Button from '@/components/ui/button.vue';
import type { IButtonObj } from '@/components/ui/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class SocialMediaBar extends Vue {
  @Prop({ required: true, default: [] })
  readonly Icons!: Array<IButtonObj>;
}
</script>

<style scoped lang="scss">
.social-media-bar {
  width: 100%;
  max-width: 1052px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (min-width: 920px) {
    flex-wrap: unset;
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

    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 16vh;

      &:hover {
        background-image: url('./assets/images/illustration-circle-contact.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
