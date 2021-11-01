<template>
  <div ref="nav" class="nav__container" :class="{ 'nav__container--hide': scrollDown }">
    <div :class="{ nav: true, 'nav--active': toggleActive }">
      <a v-if="!viewSubNavMenue" class="nav__list-item-link" href="/">
        <h1>
          {{ fullName }}
        </h1>
      </a>
      <a v-if="viewSubNavMenue" class="nav__list-item-link" @click="smoothScrolling('.header')">
        <h1>{{ fullName }}</h1>
      </a>
      <nav v-if="viewSubNavMenue">
        <ul :class="{ nav__list: true, 'nav__list--active': toggleActive }" @click="toggleMenue">
          <li
            v-for="(nav, index) in navs"
            :key="index"
            class="nav__list-item"
            :style="{ top: index > 0 && toggleActive ? 'calc(50% - 20%)' : '0px' }"
          >
            <a class="nav__list-item-link nav__list-item-link--big" @click="smoothScrolling(nav.link)">
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
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
  private readonly fullName = 'Henry Steinhauer';
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
      name: 'contact',
      link: '#contact',
    },
  ];

  toggleActive: Boolean = false;
  scrollDown: Boolean = false;
  viewSubNavMenue = true;

  toggleMenue() {
    if (window.innerWidth <= 768) {
      this.toggleActive = !this.toggleActive;
    } else {
      this.toggleActive = false;
    }
  }

  scrollToElement(elementName: string, offset: number) {
    const element = document.querySelector(elementName) as HTMLElement;
    const elementPosition = element!.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  smoothScrolling(elementName: string) {
    if (elementName.length === 0) return;
    const navHeight = (this.$refs.nav as HTMLElement).offsetHeight;
    this.scrollToElement(elementName, navHeight);
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
    this.viewSubNavMenue = this.$nuxt.$route.path === '/';
    this.detectScrollDirection();
  }
}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  max-width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
  padding: 0 10px;

  & a {
    cursor: pointer;
  }

  &--active {
    height: 100vh;
  }

  &__container {
    width: 100vw;
    position: sticky;
    top: 0px;
    padding: 15px 0 0 0;
    z-index: 1;
    transition: transform 0.4s ease-out;
    background-image: url('./assets/images/background-image.jpg');
    background-color: #edede7;
    border-bottom: 1px solid #000000;

    &--hide {
      transform: translateY(-100%);
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

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 100%;
    }

    &-item {
      padding: 0 0 20px 0;
      text-align: right;
      position: relative;
      cursor: pointer;

      &-link {
        font-size: 8px;
        @media screen and (min-width: 768px) {
          line-height: 26px;

          &:before,
          &:after {
            backface-visibility: hidden;
            border: 1px solid rgba(rgb(0, 0, 0), 0);
            bottom: 0px;
            content: ' ';
            display: block;
            margin: 0 auto;
            position: relative;
            transition: all 280ms ease-in-out;
            width: 0;
          }

          &:hover:before,
          &:hover:after {
            backface-visibility: hidden;
            border-color: rgb(0, 0, 0);
            transition: width 350ms ease-in-out;
            width: 110%;
            letter-spacing: 2px;
            position: relative;
            left: -5%;
          }

          &:hover:before {
            bottom: auto;
            top: 0;
          }
        }

        &--big {
          font-size: 15px;
        }
      }
      @media screen and (min-width: 768px) {
        padding: 0 15px;
      }

      &:last-child {
        @media screen and (min-width: 768px) {
          padding: 0 0 0 15px;
        }
      }
      &:first-child {
        top: 0px;
        padding-bottom: 33px;
        @media screen and (min-width: 768px) {
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
