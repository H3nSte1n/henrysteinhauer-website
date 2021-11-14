<template>
  <div ref="nav" class="nav__container" :class="{ 'nav__container--hide': scrollDown }">
    <div :class="{ nav: true, 'nav--open': toggleActive, 'nav--close': !toggleActive }">
      <a v-if="!viewSubNavMenue" class="nav__list-item-link" href="/">
        <h1 class="nav__list-item-link--font-normal">
          {{ fullName }}
        </h1>
      </a>
      <a v-if="viewSubNavMenue" class="nav__list-item-link" @click="headerActivity">
        <h1 class="nav__list-item-link--font-normal">{{ fullName }}</h1>
      </a>
      <nav v-if="viewSubNavMenue" :class="{ 'nav__row--small': !toggleActive }">
        <ul :class="{ nav__list: true, 'nav__list--open': toggleActive }" @click="toggleMenue">
          <li
            v-for="(nav, index) in navs"
            :key="index"
            class="nav__list-item"
            :class="`nav__list-item--${toggleActive ? 'write' : 'remote'}-animation-${toggleActive ? index : 'base'}`"
            :style="{ top: index > 0 && toggleActive ? 'calc(50% - 20%)' : '0px', width: index === 0 && '100%' }"
          >
            <a
              class="nav__list-item-link nav__list-item-link--big nav__list-item-link--spacing"
              :class="{ 'nav__list-item-link--font-normal': index === 0 }"
              @click="smoothScrolling(nav.link)"
            >
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
      name: 'Highlights',
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

  headerActivity() {
    if (this.toggleActive) this.toggleMenue();
    this.smoothScrolling('#header');
  }

  toggleMenue() {
    if (window.innerWidth <= 768) {
      this.toggleActive = !this.toggleActive;
    } else {
      this.toggleActive = false;
    }
  }

  scrollToElement(elementName: string, offset: number) {
    const element = document.querySelector(elementName) as HTMLElement;
    // const elementPosition = element!.offsetTop;
    const elementPosition = window.pageYOffset + element.getBoundingClientRect().top;
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
      if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
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
  max-width: 87%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
  transition: height 0.5s ease-out;
  height: 100%;

  & a {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    &--open {
      height: 100vh;
      transition: height 0.5s ease-out;
    }

    &--close {
      height: 19px;
      transition: height 0.2s ease-out;
    }
  }

  &__container {
    width: 100vw;
    position: sticky;
    z-index: 99999;
    top: 0px;
    padding: 15px 0 0 0;
    transition: transform 0.4s ease-out;
    background-image: url('./assets/images/background-image.jpg');
    background-color: #edede7;
    border-bottom: 1px solid #000000;

    &--hide {
      transform: translateY(-100%);
    }
  }

  &__row {
    &--small {
      @media screen and (max-width: 768px) {
        width: 35%;
      }
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 0px;
    padding-left: 0px;

    &--open {
      height: 100%;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      height: 100%;
    }

    &-item {
      padding: 0 0 29px 0;
      text-align: right;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
        width: 0%;

        &--remove-animation-base {
          width: 0%;
        }

        &--write-animation-1 {
          transition: width 0.3s ease-out 0.3s;
          width: 100%;
        }

        &--write-animation-2 {
          transition: width 0.3s ease-out 0.6s;
          width: 100%;
        }

        &--write-animation-3 {
          transition: width 0.3s ease-out 0.9s;
          width: 100%;
        }

        &--write-animation-4 {
          transition: width 0.3s ease-out 1.2s;
          width: 100%;
        }
      }

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

        &--spacing {
          @media screen and (max-width: 768px) {
            font-size: 21px;
            letter-spacing: 10px;
          }
        }

        &--font-normal {
          font-size: 15px;
          letter-spacing: 3px;
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
