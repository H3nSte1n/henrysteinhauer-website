<template>
  <div class="index">
    <Navigation />
    <ContentBox headline="Angaben gemäß § 5 TMG">
      <h3 class="subheadline">Kontaktdaten</h3>
      <List :items="contactData" />
    </ContentBox>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import InfoBox from '@/components/layouts/info-box.vue';
import Navigation from '@/components/layouts/navigation.vue';
import Footer from '@/components/layouts/footer.vue';
import ContentBox from '@/components/ui/content-box.vue';
import List from '@/components/ui/list.vue';

@Component({
  components: {
    InfoBox,
    Navigation,
    Footer,
    ContentBox,
    List,
  },
})
export default class Index extends Vue {
  contactData = [
    'Henry Steinhauer',
    'Taunusstraße 24',
    '53225 Bonn',
    'Tel.: 01525 1586470',
    'E-Mail: hello@steinhauer.dev',
  ];
}
</script>

<style lang="scss" scoped>
.subheadline {
  margin-bottom: 16px;
}
</style>
