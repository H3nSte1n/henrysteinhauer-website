<template>
  <div class="footer">
    <div class="footer__list">
      <Button
        v-for="(link, index) in links"
        :key="index"
        :button-obj="link"
        :styles="{ 'font-size': '13px', 'text-transform': 'uppercase', padding: '0px' }"
        customClasses="footer__list-item"
      />
    </div>
    <a class="footer__nav-item" @click="smoothScrolling">Back to Top</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '@/components/elements/button.vue';
import type { IButtonObj } from '@/components/elements/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Footer extends Vue {
  links: Array<IButtonObj> = [
    {
      label: 'Impressum',
      src: '/impressum',
      mobileHideSVG: true,
      textLeft: true,
    },
    {
      label: 'Design by<br>Johannes Zimmer',
      src: 'https://johanneszimmer.com/',
      mobileHideSVG: true,
      textLeft: true,
      isTargetBlank: true,
    },
  ];

  smoothScrolling() {
    const element = document.querySelector('.header');
    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  max-width: 92%;
  display: flex;
  flex: 1 1 0px;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-items: baseline;
  justify-content: space-between;
  margin: 16vh auto 6vh auto;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
    }

    &-item {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
    }
  }

  &__nav-item {
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    background-image: url(./assets/images/svgs/illustration-circle-contact.svg);
    padding: 32px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    font-size: 16px;
  }
}
</style>
