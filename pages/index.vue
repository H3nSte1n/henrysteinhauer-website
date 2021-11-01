<template>
  <div class="index">
    <Navigation />
    <Header v-bind="header" :about-me="aboutme" />
    <InfoBox :info-box-infos="{}" :with-blob="true">
      <h3 class="info-box__subline">{{ date.subline }}</h3>
      <p>
        <strong id="animationNumber" ref="animationNumber" class="info-box__date">{{ date.year }}</strong>
      </p>
    </InfoBox>
    <SectionConnection />
    <InfoBox id="achivments" :info-box-infos="achievments.infos" :with-underline="false">
      <StatsOverview :stats="achievments.stats" :inverted-style="true" />
    </InfoBox>
    <SectionConnection />
    <InfoBox id="skills" :info-box-infos="skills.infos" :with-underline="false">
      <StatsOverview :stats="skills.stats" />
    </InfoBox>
    <SectionConnection />
    <InfoBox id="social" :info-box-infos="social.infos" :with-blob="true" :headline-center="true">
      <h3 class="info-box__subline">{{ social.subline }}</h3>
      <SocialMediaBar :icons="social.icons" />
    </InfoBox>
    <SectionConnection />
    <InfoBox id="contact" :info-box-infos="contact.infos" :with-blob="true" :headline-center="true">
      <h3 class="info-box__subline">{{ contact.subline }}</h3>
      <Button
        :button-obj="{
          label: contact.email,
          src: contact.mailLink,
        }"
        :with-hover-animation="true"
        :with-svg="true"
      />
    </InfoBox>
    <Footer />
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
import Footer from '@/components/layouts/footer.vue';
import Button from '@/components/ui/button.vue';
import SectionConnection from '@/components/ui/section-connection.vue';
import { Animation, AnimationInterface } from '@/mixins/number-increase-animation';

@Component({
  components: {
    InfoBox,
    SocialMediaBar,
    StatsOverview,
    AboutMe,
    Header,
    Navigation,
    Footer,
    Button,
    SectionConnection,
  },
})
export default class Index extends Animation {
  header = {
    sublinePartOne: 'Software',
    sublinePartTwo: 'Developer',
    tag: 'Henry <br>Steinhauer',
  };

  date = {
    subline: 'What I"ve accomplished to',
    year: '2000',
  };

  aboutme = {
    infos: {
      headline: 'About Me',
      description:
        'Hey, I am a passionate Software Engineer and writer on Medium. I love to explore new programming languages, design patterns, and frameworks. In my free time, I work on various private development projects and run, climb and read books. Hey, I am a passionate Software Engineer and writer on Medium. I love to explore new programming languages, design patterns, and frameworks. In my free time, I work on various private development projects and run, climb and read books.',
    },
  };

  achievments = {
    stats: [
      {
        label: 'Published Articles',
        value: '-',
      },
      {
        label: 'Commits',
        value: '-',
      },
      {
        label: 'Repositories',
        value: '-',
      },
      {
        label: 'Programming Languages',
        value: '-',
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
        mobileHideSVG: true,
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Twitter',
        mobileHideSVG: true,
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Medium',
        mobileHideSVG: true,
      },
      {
        src: 'https://github.com/H3nSte1n',
        label: 'Reddit',
        mobileHideSVG: true,
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
      target: 'animationNumber',
    },
  ];

  get mailLink(): String {
    return `mailto:${this.contact.email}`;
  }

  mappingGithubStats = (githubStats: Record<any, any>) => {
    return [
      {
        label: 'Published Articles',
        value: '6',
      },
      {
        label: 'Commits',
        value: githubStats.data.user.contributionsCollection.contributionCalendar.totalContributions,
      },
      {
        label: 'Repositories',
        value: githubStats.data.user.repositories.totalCount,
      },
      {
        label: 'Programming Languages',
        value: '6',
      },
    ];
  };

  async fetch() {
    const githubStats = await fetch(`http://localhost:3000/api/github-stats`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const { stats } = await githubStats.json();
    this.achievments.stats = this.mappingGithubStats(stats);
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
  margin: 0 20px 20px 20px;
}

.info-box {
  &__subline {
    font-size: 10px;
    font-weight: 300;
    text-transform: uppercase;

    @media screen and (min-width: 640px) {
      font-size: 13px;
    }
  }
  &__mail {
    color: black;
    text-decoration: none;
    font-size: 19px;

    @media screen and (min-width: 640px) {
      font-size: 3vw;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2vw;
    }
  }

  &__date {
    font-size: 34vw;
    margin-top: -50px;
    text-align: left;
    font-weight: 500;
    letter-spacing: 1vw;
  }
}
</style>
