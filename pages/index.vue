<template>
  <div class="index">
    <InfoBox :subheadline="achievements_headline" :caption="achievements_caption">
      <StatsOverview :stats="achievments" :invertedStyle="true" />
    </InfoBox>
    <InfoBox :subheadline="skill_headline" :caption="skill_caption">
      <StatsOverview :stats="skills" />
    </InfoBox>
    <InfoBox :subheadline="social_headline">
      <SocialMediaBar :Icons="icons"/>
    </InfoBox>
    <InfoBox :subheadline="contact_headline">
      <h3 class="info-box__subline">{{ contact_subline }}</h3>
      <a :href="linkMail" class="info-box__mail">
        {{ contact_mail }}
      </a>
    </InfoBox>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import InfoBox from '@/components/layouts/info-box.vue';
import SocialMediaBar, { Icon } from '@/components/ui/social-media-bar.vue';
import StatsOverview from '~/components/ui/stats-overview.vue';
import { Stats } from '@/components/ui/stats-element.vue'

@Component({
  components: {
    InfoBox,
    SocialMediaBar,
    StatsOverview
  },
})
export default class Index extends Vue {
  achievements_headline: String = "My Highlights"
  achievements_caption: String = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem "
  achievments: Array<Stats> = [
    {
      label: 'Published Articles',
      value: '6'
    },
    {
      label: 'Commits',
      value: '560'
    },
    {
      label: 'Repositories',
      value: '10'
    },
    {
      label: 'Programming Languages',
      value: '6'
    }
  ]
  skill_headline: String = "What I 've learned"
  skill_caption: String = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos e"
  skills: Array<Stats> = [
    {
      label: 'Skill Level',
      value: 'Kotlin'
    },
    {
      label: 'Skill Level',
      value: 'Ruby'
    },
    {
      label: 'Skill Level',
      value: 'Typescript'
    },
    {
      label: 'Skill Level',
      value: 'OpenAPI'
    },
    {
      label: 'Skill Level',
      value: 'Docker'
    }
  ]
  social_headline: String = "Want to know<br> more about me?"
  contact_headline: String = "...or interested in<br> working together?"
  contact_subline: String = "Let's talks!"
  contact_mail: String = "Henrysteinhauer@t-online.de"
  icons: Array<Icon> = [{
    src: "https://github.com/H3nSte1n",
    label: "Github"
  },
  {
    src: "https://github.com/H3nSte1n",
    label: "Twitter"
  },
  {
    src: "https://github.com/H3nSte1n",
    label: "Medium"
  },
  {
    src: "https://github.com/H3nSte1n",
    label: "Reddit"
  }]

  get linkMail(): String {
    return `mailto:${this.contact_mail}`
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
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;

  }
  &__mail {
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin-top: 34px;
  }
}
</style>
