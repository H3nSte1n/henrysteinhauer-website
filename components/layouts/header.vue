<template>
  <header class="header">
    <div class="header-row">
      <h2 class="header-row--big">{{ sublinePartOne }}</h2>
      <h2 class="header-row--small header-row--small-invert header-row--small header-row--small-text" v-html="tag" />
    </div>
    <div ref="row" class="header-row">
      <p ref="stripe" class="header-row--small header-row__stripe"></p>
      <div class="header-row__container">
        <h2 class="header-row--big header-row--big-blobs-reverse">{{ sublinePartTwo }}</h2>
        <AboutMe :about-me-info="aboutMe.infos" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import AboutMe from '@/components/ui/about-me.vue';
import type { AboutMeInterface } from '@/components/ui/about-me.vue';

@Component({
  components: {
    AboutMe,
  },
})
export default class Header extends Vue {
  @Prop({ required: true })
  readonly sublinePartOne!: string;

  @Prop({ required: true })
  readonly sublinePartTwo!: string;

  @Prop({ required: true })
  readonly tag!: string;

  @Prop({ required: true })
  readonly aboutMe!: AboutMeInterface;

  // TODO: Outsource animation logic
  getGapToBottom(scrollPosition: number, maxHeigt: number) {
    const currentGap = (this.$refs.stripe as HTMLElement).getBoundingClientRect().top;
    const scrollPos = scrollPosition - currentGap;

    if (scrollPos >= maxHeigt) return;
    (this.$refs.stripe as HTMLElement).style.height = `${scrollPos}px`;
  }

  animateOnScroll() {
    const scrollPosition = (this.$refs.stripe as HTMLElement).getBoundingClientRect().top;
    const maxHeigt = (this.$refs.row as HTMLElement).offsetHeight;

    document.addEventListener('scroll', () => this.getGapToBottom(scrollPosition, maxHeigt));
  }

  mounted() {
    this.animateOnScroll();
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  max-width: 92%;
  margin-bottom: 100px;
  padding-top: 30vh;

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
    align-items: center;
    margin: 0px 0;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 30px 0;
    }

    &__container {
      position: relative;
      width: 63vw;
    }

    &__stripe {
      width: 20px;
      align-self: flex-start;
      background-color: black;
      margin: 0 auto;
      transition: height 0.5s ease-out;
    }

    &--big {
      font-size: 15vw;
      font-weight: 400;
      position: relative;

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
        position: absolute;
        top: -22%;
        left: 38%;
        border-radius: 100%;
        background-color: rgba(61, 142, 23, 0.2125);
        filter: blur(5vw);
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
        background-image: url('./assets/images/illustration-circle-contact.svg');
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
</style>
