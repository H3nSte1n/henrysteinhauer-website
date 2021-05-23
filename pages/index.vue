<template>
  <div class="index">
    <Navigation />
    <Header />
    <InfoBox :info-box-infos="{}">
      <AboutMe :about-me-info="aboutme.infos" />
    </InfoBox>
    <InfoBox :info-box-infos="{}">
      <h3 class="info-box__subline">{{ date.subline }}</h3>
      <strong id="animationNumber" ref="animationNumber" class="info-box__date">{{ date.year }}</strong>
    </InfoBox>
    <InfoBox :info-box-infos="achievments.infos">
      <StatsOverview :stats="achievments.stats" :inverted-style="true" />
    </InfoBox>
    <InfoBox :info-box-infos="skills.infos">
      <StatsOverview :stats="skills.stats" />
    </InfoBox>
    <InfoBox :info-box-infos="social.infos">
      <h3 class="info-box__subline">{{ social.subline }}</h3>
      <SocialMediaBar :icons="social.icons" />
    </InfoBox>
    <InfoBox :info-box-infos="contact.infos">
      <h3 class="info-box__subline">{{ contact.subline }}</h3>
      <a :href="mailLink" class="info-box__mail">
        {{ contact.email }}
      </a>
    </InfoBox>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import InfoBox from '@/components/layouts/info-box.vue';
import SocialMediaBar from '@/components/ui/social-media-bar.vue';
import StatsOverview from '@/components/ui/stats-overview.vue';
import AboutMe from '@/components/ui/about-me.vue';
import Header from '@/components/layouts/header.vue';
import Navigation from '@/components/layouts/navigation.vue';
import { Animation, AnimationInterface } from '@/mixins/number-increase-animation';

@Component({
  components: {
    InfoBox,
    SocialMediaBar,
    StatsOverview,
    AboutMe,
    Header,
    Navigation,
  },
})
export default class Index extends Animation {
  date = {
    subline: 'What I"ve accomplished to',
    year: '2000',
  };

  aboutme = {
    infos: {
      headline: 'About Me',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolor',
    },
  };

  achievments = {
    stats: [
      {
        label: 'Published Articles',
        value: '6',
      },
      {
        label: 'Commits',
        value: '560',
      },
      {
        label: 'Repositories',
        value: '10',
      },
      {
        label: 'Programming Languages',
        value: '6',
      },
    ],
    infos: {
      headline: 'My Highlights',
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos e',
    },
  };

  skills = {
    infos: {
      headline: "What I 've learned",
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos e',
    },
    stats: [
      {
        label: 'Skill Level',
        value: 'Kotlin',
      },
      {
        label: 'Skill Level',
        value: 'Ruby',
      },
      {
        label: 'Skill Level',
        value: 'Typescript',
      },
      {
        label: 'Skill Level',
        value: 'OpenAPI',
      },
      {
        label: 'Skill Level',
        value: 'Docker',
      },
    ],
  };

  social = {
    infos: {
      headline: 'Want to know<br> more about me?',
    },
    subline: 'Follow me on',
    icons: [
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Github',
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Twitter',
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Medium',
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Reddit',
      },
    ],
  };

  contact = {
    infos: {
      headline: '...or interested in<br> working together?',
    },
    subline: "Let's talks!",
    email: 'hello@steinhauer.dev',
  };

  animationsElements: Array<AnimationInterface> = [
    {
      methodObj: {
        name: 'increaseNumberAnimation',
        params: [70, 2021, 'animationNumber'],
      },
      target: '#animationNumber',
    },
  ];

  get mailLink(): String {
    return `mailto:${this.contact.email}`;
  }

  mounted() {
    this.startObserver(this.animationsElements);
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.info-box {
  &__subline {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  &__mail {
    color: black;
    text-decoration: none;
    font-size: 20px;
  }

  &__date {
    font-size: 40vw;
  }
}
</style>
