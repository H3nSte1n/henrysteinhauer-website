<template>
  <header ref="header" id="header" class="header">
    <div class="header-row">
      <h2 class="header-row--big header-row--view-blob-mobile">{{ sublinePartOne }}</h2>
      <h3 class="header-row--small header-row--small-invert header-row--small header-row--small-text" v-html="tag" />
    </div>
    <div ref="row" class="header-row">
      <svg
        class="svg svg--hide-small svg--screen-h"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 316 747"
      >
        <path
          ref="path"
          d="M193.181 1c2 173-199.069 263.5-191.999 518 4 144 177.5 238 269.5 225.5 73.6-10 43.833-23.833 0-31.5"
          stroke="#000"
        />
      </svg>
      <div class="header-row__container">
        <h2 class="header-row--big header-row--big-blobs-reverse">{{ sublinePartTwo }}</h2>
        <svg class="svg svg--hide-large" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257 327">
          <path
            ref="path2"
            d="M255.993 1C256.802 77.4 202 136.675 117 146 23.5 156.257-14.5 267 10.5 311"
            stroke="#000"
          />
        </svg>
        <AboutMe :about-me-info="aboutMe.infos" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import type { IAboutMeProps } from '@/components/wrapper/about-me.vue';
import AboutMe from '@/components/wrapper/about-me.vue';
import type { IAnimation } from '@/mixins/Animation';
import { Animation } from '@/mixins/Animation';

@Component({
  components: {
    AboutMe,
  },
})
export default class Header extends Animation {
  @Prop({ required: true })
  readonly sublinePartOne!: string;

  @Prop({ required: true })
  readonly sublinePartTwo!: string;

  @Prop({ required: true })
  readonly tag!: string;

  @Prop({ required: true })
  readonly aboutMe!: IAboutMeProps;

  totalLength!: number;
  path!: SVGGeometryElement;

  getAnimationsElement(refSvgName: string): Array<IAnimation> {
    return [
      {
        methodObj: {
          name: 'animateOnScroll',
          params: ['drawSVG', [this.initPath(refSvgName), refSvgName]],
        },
        target: 'header',
      },
    ];
  }

  mounted() {
    this.startObserver(this.getAnimationsElement('path'));
    this.startObserver(this.getAnimationsElement('path2'));
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  max-width: 100vw;
  margin-bottom: 100px;
  padding-top: 30vh;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1480px) {
    margin-bottom: 200px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 87%;
    margin: 0 auto;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 30px auto;
      align-items: center;
    }

    &__container {
      position: relative;

      @media screen and (min-width: 768px) {
        width: 63vw;
      }
    }

    &__stripe {
      width: 20px;
      align-self: flex-start;
      background-color: black;
      margin: 0 auto;
      transition: height 0.5s ease-out;
    }

    &--view-blob-mobile {
      @media screen and (max-width: 768px) {
        &::before {
          content: '';
          width: 87vw;
          height: 87vw;
          position: absolute;
          border-radius: 100%;
          top: -103%;
          left: -38%;
          background-color: rgba(23, 99, 142, 0.2);
          filter: blur(8vw);
        }

        &::after {
          content: '';
          width: 87vw;
          height: 87vw;
          position: absolute;
          border-radius: 100%;
          background-color: rgba(61, 142, 23, 0.2125);
          filter: blur(8vw);
          top: -35%;
          left: 23%;
        }
      }
    }

    &--big {
      font-size: 18vw;
      font-weight: 400;
      position: relative;

      @media screen and (min-width: 768px) {
        font-size: 15vw;
      }
      @media screen and (min-width: 768px) {
        &::before {
          content: '';
          width: 26vw;
          height: 26vw;
          position: absolute;
          border-radius: 100%;
          top: 13%;
          left: 20%;
          background-color: rgba(23, 99, 142, 0.2);
          filter: blur(3vw);
        }

        &::after {
          content: '';
          width: 26vw;
          height: 26vw;
          top: -22%;
          left: 38%;
          position: absolute;
          border-radius: 100%;
          background-color: rgba(61, 142, 23, 0.2125);
          filter: blur(5vw);
        }
      }

      &-blobs-reverse {
        &::before {
          top: -22%;
          left: 38%;
        }

        &::after {
          top: 13%;
          left: 20%;
        }
      }
    }

    &--small {
      display: none;
      font-size: 26px;
      font-weight: 400;

      @media screen and (min-width: 768px) {
        display: block;
      }

      &-text {
        background-image: url('./assets/images/svgs/illustration-circle-contact.svg');
        padding: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        text-transform: uppercase;
        font-size: 2vw;

        @media screen and (min-width: 768px) {
          font-size: 1.8vw;
        }

        @media screen and (min-width: 1024px) {
          padding: 71px;
          font-size: 2vw;
        }
      }

      &-invert {
        @media screen and (min-width: 640px) {
          margin-left: 2vw;
        }
      }
    }
  }
}

.svg {
  padding: 0 34px;

  &--screen-h {
    height: 100vh;
  }

  &--hide-small {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  &--hide-large {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & path {
    transition: stroke-dashoffset 0.2s linear;
  }
}
</style>
