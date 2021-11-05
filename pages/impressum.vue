<template>
  <div class="impressum">
    <Navigation />
    <SubsiteHeader v-bind="header" />
    <ContentBox headline="Angaben gemäß § 5 TMG">
      <h3 class="subheadline">Kontaktdaten</h3>
      <List :items="pesonalData" :gap="true" />
      <List :items="contactData" :gap="true" />
      <p><strong>Steuer - Identifikationsnummer: </strong> REPLACE_ME</p>
      <p><strong>Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV:</strong></p>
      <List :items="pesonalData" :gap="true" />
    </ContentBox>
    <ContentBox headline="Eingebundene Schriften">
      <p>Diese Website nutzt die folgenden Schriften, die direkt über den eigenen Server eingebunden werden:</p>
      <List :items="fontsData" :gap="true" />
      <p>Designed by PangramPangram</p>
      <p>https://pangrampangram.com/</p>
    </ContentBox>
    <ContentBox headline="Urheberrechtshinweis">
      <p>
        Alle Inhalte dieser Website, insbesondere Texte und Fotografien, sind urheberrechtlich geschützt (Copyright).
        Soweit nicht ausdrücklich anders gekennzeichnet, liegt das Urheberrecht bei Claudia Eck. Falls Sie Inhalte
        dieser Website nutzen möchten, fragen Sie mich bitte.
      </p>
      <p>
        Die auf dieser Website (Deine URL) verwendeten Bilder kommen von pexels.com und dürfen frei ohne Angaben des
        Erstellers verwendet werden.
      </p>
      <p>
        Wer gegen das Urheberrecht verstößt (z.B. indem er die Inhalte ohne explizite Genehmigung des Rechteinhabers
        kopiert und etwa auf einer eigenen Website verwendet), macht sich gem. § 106 ff Urhebergesetz strafbar. Er muss
        dem Rechteinhaber dementsprechend Schadensersatz leisten. Das Verfolgen und Auffinden von kopierten Inhalten ist
        im Internet ohne großen Aufwand möglich.
      </p>
    </ContentBox>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SubsiteHeader from '@/components/global/subsite-header.vue';
import Navigation from '@/components/global/navigation.vue';
import Footer from '@/components/global/footer.vue';
import List from '@/components/elements/list.vue';
import ContentBox from '@/components/global/content-box.vue';

@Component({
  components: {
    SubsiteHeader,
    Navigation,
    Footer,
    ContentBox,
    List,
  },
})
export default class Index extends Vue {
  header = {
    headline: 'Impressum',
  };

  pesonalData = ['Henry Steinhauer', 'Taunusstraße 24', '53225 Bonn'];
  contactData = ['Tel.: 01525 1586470', 'E-Mail: hello@steinhauer.dev'];
  fontsData = ['RadioGrotesk'];
}
</script>

<style lang="scss" scoped>
p {
  margin: 15px 0;
}
.subheadline {
  margin-bottom: 16px;
}
</style>
