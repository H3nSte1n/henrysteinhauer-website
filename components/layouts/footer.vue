<template>
  <div class="footer">
    <div class="footer__list">
      <a class="footer__list-item">Design by<br />Johannes Zimmer</a>
      <a class="footer__list-item">Impressum</a>
    </div>
    <a class="footer__nav-item" @click="smoothScrolling">Back to Top</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {
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
  justify-content: space-between;
  align-items: center;

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
    }
  }

  &__nav-item {
    position: relative;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      background-image: url(./assets/illustration-circle-contact.svg);
      padding: 32px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      font-size: 16px;
    }
  }
}
</style>
