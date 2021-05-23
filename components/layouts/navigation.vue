<template>
  <div class="nav__container" :class="{ 'nav__container--hide': scrollDown }">
    <div :class="{ nav: true, 'nav--active': toggleActive }">
      <a href="#header">Henry Steinhauer</a>
      <nav>
        <ul :class="{ nav__list: true, 'nav__list--active': toggleActive }" @click="toggleMenue">
          <li
            v-for="(nav, index) in navs"
            :key="index"
            class="nav__list-item"
            :style="{ top: index > 0 && toggleActive ? 'calc(50% - 20%)' : '0px' }"
          >
            <a @click="smoothScrolling(nav.link)">
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface NavigationInterface {
  name: String;
  link: String;
}

@Component
export default class Navigation extends Vue {
  readonly navs: Array<NavigationInterface> = [
    {
      name: 'MENU',
      link: '',
    },
    {
      name: 'About Me',
      link: '#aboutme',
    },
    {
      name: 'Achivments',
      link: '#achivments',
    },
    {
      name: 'Skills',
      link: '#skills',
    },
    {
      name: 'Social Media',
      link: '#social',
    },
    {
      name: 'contact',
      link: '#contact',
    },
  ];

  toggleActive: Boolean = false;
  scrollDown: Boolean = false;

  toggleMenue() {
    if (window.innerWidth <= 700) {
      this.toggleActive = !this.toggleActive;
    } else {
      this.toggleActive = false;
    }
  }

  smoothScrolling(elementName: string) {
    if (elementName.length === 0) return;
    const element = document.querySelector(elementName);
    element!.scrollIntoView({
      behavior: 'smooth',
    });
    this.scrollDown = true;
  }

  detectScrollDirection() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        this.scrollDown = false;
      } else {
        this.scrollDown = true;
      }
      if (this.toggleActive) this.scrollDown = false;
      prevScrollpos = currentScrollPos;
    };
  }

  mounted() {
    this.detectScrollDirection();
  }
}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;

  &--active {
    height: 100vh;
  }

  &__container {
    width: 100%;
    position: sticky;
    top: 0px;
    padding: 15px 20px 0 15px;
    background-color: white;
    z-index: 1;
    transition: transform 0.4s ease-out;

    &--hide {
      transform: translateY(-50px);
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 0px;

    &--active {
      height: 100%;
    }

    @media screen and (min-width: 700px) {
      flex-direction: row;
      height: 100%;
    }

    &-item {
      padding: 0 0 20px 0;
      text-align: right;
      position: relative;

      @media screen and (min-width: 700px) {
        padding: 0 15px;
      }

      &:last-child {
        @media screen and (min-width: 700px) {
          padding: 0 0 0 15px;
        }
      }
      &:first-child {
        top: 0px;
        padding-bottom: 33px;
        @media screen and (min-width: 700px) {
          display: none;
          padding-bottom: 33px;
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
  }
}
</style>
