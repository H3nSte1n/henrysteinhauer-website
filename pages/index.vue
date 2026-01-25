<template>
  <div class="index">
    <Navigation />
    <Header v-bind="header" :about-me="aboutme" />
    <InfoBox :info-box-infos="{}" :with-blob="true">
      <h3 class="info-box__subline info-box__subline--small-gap">{{ date.subline }}</h3>
      <p>
        <strong id="animationNumber" ref="animationNumber" class="info-box__date">{{ date.year }}</strong>
      </p>
    </InfoBox>
    <SectionConnection />
    <InfoBox id="projects" :info-box-infos="projects.infos" :with-underline="false">
      <ProjectsShowcase :projects="projects.items" />
    </InfoBox>
    <SectionConnection />
    <InfoBox id="highlights" :info-box-infos="achievements.infos" :with-underline="false">
      <StatsOverview :stats="achievements.stats" :inverted-style="true" />
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
import ProjectsShowcase from '~/components/wrapper/projects-showcase.vue';
import type { IAnimation } from '@/mixins/Animation';
import { Animation } from '@/mixins/Animation';

@Component({
  components: {
    ProjectsShowcase,
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
    subline: "What I've accomplished up to",
    year: '2000',
  };

  aboutme = {
    infos: {
      headline: 'About Me',
      description:
        "I'm Henry Steinhauer, a twenty-five-year-old German software developer and author on Medium. I’m deeply passionate about exploring new programming languages, design patterns, and frameworks. Currently, I work at i22 focused on backend services. In my free time I work on various private development projects and love to run, climb, cook and play chess. If you'd like to chat, please feel free to reach out on LinkedIn or via email.",
    },
  };

  projects = {
    infos: {
      headline: 'Featured Work',
      caption: 'Backend systems, developer tooling, and shipped web products — built with reliability in mind.',
    },
    items: [
      {
        title: 'Coverage Badge Creator',
        description: 'CLI that generates coverage badges and updates README placeholders.',
        tags: ['TypeScript', 'CLI', 'Jest', 'Coverage', 'CI/CD'],
        bullets: [
          'Generates badges from coverage JSON summaries',
          'Updates README via placeholders ($coverage$, $lines$ …)',
          'CI-friendly CLI; published to npm/yarn',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/H3nSte1n/coverage-badge-creator', targetBlank: true },
          { label: 'npm', href: 'https://www.npmjs.com/package/coverage-badge-creator', targetBlank: true },
          { label: 'yarn', href: 'https://classic.yarnpkg.com/en/package/coverage-badge-creator', targetBlank: true },
        ],
      },
      {
        title: 'HTR Model (Handwritten Text Recognition)',
        description: 'Python ML pipeline + web demo for handwritten text recognition.',
        tags: ['Python', 'TensorFlow', 'Keras', 'OCR', 'HTR', 'CRNN'],
        bullets: [
          'Web demo: upload image → decoded text output',
          'Train/validate pipeline with greedy + beam search',
          'Dataset loading + preprocessing for IAM handwriting',
        ],
        links: [{ label: 'GitHub', href: 'https://github.com/H3nSte1n/HTR-Model', targetBlank: true }],
      },
      {
        title: 'OAuth 2.0 Provider (Go)',
        description: 'OAuth2/JWT provider concepts with strong domain modeling + documentation.',
        tags: ['Go', 'Gin', 'OAuth2', 'JWT', 'MongoDB', 'Docker'],
        bullets: [
          'Modeled users, scopes, resources, and access groups',
          'ERD + sequence diagrams to make flows auditable',
          'Dockerized dev setup for repeatable local runs',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/H3nSte1n/go-oauth-provider', targetBlank: true },
          {
            label: 'Docs/Diagrams',
            href: 'https://github.com/H3nSte1n/go-oauth-provider/tree/main/doc',
            targetBlank: true,
          },
        ],
      },
      {
        title: 'Claudia Eck – Coaching Website',
        description:
          'Production-style “business card” website built for a strong visual impression while keeping content central.',
        tags: ['Nuxt', 'Vue', 'JavaScript', 'SCSS', 'Nodemailer', 'reCAPTCHA', 'Docker'],
        bullets: [
          'Nuxt/Vue frontend with a high-polish experience and content-first structure',
          'Contact flow + email delivery via Nodemailer (reliable form handling)',
          'reCAPTCHA + Strapi CMS integration',
        ],
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/H3nSte1n/c-business-website',
            targetBlank: true,
          },
        ],
      },
    ],
  };

  achievements = {
    stats: [
      {
        label: 'Published Articles',
        value: '-',
      },
      {
        label: 'Contributions',
        value: '-',
      },
      {
        label: 'Repositories',
        value: '-',
      },
      {
        label: 'Core Stack',
        value: '-',
      },
    ],
    infos: {
      headline: 'My Highlights',
      caption:
        'Until today, there was a lot to try out, discover and implement. In the following, I have picked out and listed some key data.',
    },
  };

  skills = {
    infos: {
      headline: "What I've learned",
      caption:
        "Below are some of the programming languages and frameworks I've worked with this year. If you would like to know more, feel free to check out my GitHub page.",
    },
    stats: [
      {
        label: 'Intermediate',
        value: 'Go',
      },
      {
        label: 'Expert',
        value: 'Ruby',
      },
      {
        label: 'Intermediate',
        value: 'Podman',
      },
      {
        label: 'Intermediate',
        value: 'Kubernetes',
      },
      {
        label: 'Expert',
        value: 'TypeScript',
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
        src: 'https://www.linkedin.com/in/henry-steinhauer/',
        label: 'LinkedIn',
        mobileHideSVG: true,
        isTargetBlank: true,
      },
      {
        src: 'https://medium.com/@henrysteinhauer',
        label: 'Medium',
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
        params: [90, 2026, 'animationNumber', 2000],
      },
      target: 'animationNumber',
    },
  ];

  get mailLink(): string {
    return `mailto:${this.contact.email}`;
  }

  mappingGithubStats = (githubStats: Record<any, any>) => {
    return [
      {
        label: 'Published Articles',
        value: '10',
      },
      {
        label: 'Contributions',
        value: githubStats.totalContributions,
      },
      {
        label: 'Repositories',
        value: githubStats.repositories,
      },
      {
        label: 'Core Stack',
        value: '6',
      },
    ];
  };

  async mounted() {
    this.startObserver(this.animationsElements);

    try {
      const response = await fetch('/api/github-stats', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const { stats } = await response.json();
        this.achievements.stats = this.mappingGithubStats(stats);
      }
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
    }
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
    letter-spacing: 6px;

    @media screen and (min-width: 640px) {
      font-size: 16px;
      margin-bottom: 30px;
      letter-spacing: 8px;
    }

    &--small-gap {
      @media screen and (min-width: 640px) {
        font-size: 13px;
        margin-bottom: -2.5vw;
        letter-spacing: 8px;
      }
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
