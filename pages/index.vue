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
          src: mailLink,
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
import InfoBox from '@/components/global/info-box.vue';
import AboutMe from '@/components/wrapper/about-me.vue';
import Header from '@/components/global/header.vue';
import Navigation from '@/components/global/navigation.vue';
import Footer from '@/components/global/footer.vue';
import Button from '@/components/elements/button.vue';
import SectionConnection from '@/components/global/section-connection.vue';
import SocialMediaBar from '@/components/wrapper/social-media-bar.vue';
import StatsOverview from '@/components/wrapper/stats-overview.vue';
import type { IAnimation } from '@/mixins/Animation';
import { Animation } from '@/mixins/Animation';

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
        "Hey, I'm Henry Steinhauer, a passionate Software Engineer and writer on Medium. I love to explore new programming languages, design patterns, and frameworks. In my free time, I work on various private development projects and run, climb, cook and read books. But before I chat you up too much ;D, welcome to my portfolio website. Here you can find some informations describing me and what I have done so far.",
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
        'This year, too, there was a lot to try out, discover and implement. I have picked out and listed a few key figures below.',
    },
  };

  skills = {
    infos: {
      headline: "What I 've learned",
      caption:
        'Below you can find some of the programming languages, frameworks and libraries I worked with this year. If you want to know more, you can check out my github page.',
    },
    stats: [
      {
        label: 'Skill',
        value: 'Kotlin',
      },
      {
        label: 'Skill',
        value: 'Ruby',
      },
      {
        label: 'Skill',
        value: 'Typescript',
      },
      {
        label: 'Skill',
        value: 'OpenAPI',
      },
      {
        label: 'Skill',
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
        isTargetBlank: true,
      },
      {
        src: 'https://twitter.com/H3nSte1n',
        label: 'Twitter',
        mobileHideSVG: true,
        isTargetBlank: true,
      },
      {
        src: 'https://medium.com/@henrysteinhauer',
        label: 'Medium',
        mobileHideSVG: true,
        isTargetBlank: true,
      },
      {
        src: 'https://www.reddit.com/user/H3nry_d3v',
        label: 'Reddit',
        mobileHideSVG: true,
        isTargetBlank: true,
      },
    ],
  };

  contact = {
    infos: {
      headline: '...or interested in<br> working together?',
    },
    subline: "Let's talk!",
    email: 'hello@steinhauer.dev',
  };

  animationsElements: Array<IAnimation> = [
    {
      methodObj: {
        name: 'increaseNumberAnimation',
        params: [90, 2021, 'animationNumber', 2000],
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
    const githubStats = await fetch(`${process.env.BASE_URL}/api/github-stats`, {
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
