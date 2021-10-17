<template>
  <div class="footer">
    <template v-for="(link, index) in links">
      <Button
        :key="index"
        :button-obj="link"
        :styles="{ 'font-size': '16px', 'text-transform': 'uppercase' }"
        class="footer__list-item"
      />
    </template>
    <a class="footer__nav-item" @click="smoothScrolling">Back to Top</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '@/components/ui/button.vue';
import type { IButtonObj } from '@/components/ui/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Footer extends Vue {
  links: Array<IButtonObj> = [
    {
      label: 'Design by<br>Johannes Zimmer',
      src: 'https://johanneszimmer.com/',
      mobileHideSVG: true,
    },
    {
      label: 'Impressum',
      src: '/impressum',
      mobileHideSVG: true,
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
  display: flex;
  flex: 1 1 0px;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  &__list {
    display: flex;
    flex-direction: column;
    width: calc(50% + 40px);

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-item {
      padding: 12px 0;
      cursor: pointer;
    }
  }

  &__nav-item {
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    background-image: url(./assets/illustration-circle-contact.svg);
    padding: 32px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    font-size: 16px;
  }
}
</style>
