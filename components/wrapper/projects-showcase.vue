<template>
  <div class="showcase">
    <div class="track">
      <article v-for="p in projects" :key="p.title" class="card">
        <header class="card__header">
          <h3 class="card__title">{{ p.title }}</h3>
          <p class="card__desc">{{ p.description }}</p>
        </header>

        <ul class="chips">
          <li v-for="t in p.tags" :key="t" class="chip">{{ t }}</li>
        </ul>

        <ul class="bullets">
          <li v-for="b in p.bullets" :key="b">{{ b }}</li>
        </ul>

        <div class="links">
          <a
            v-for="l in p.links"
            :key="l.href"
            class="link"
            :href="l.href"
            v-bind="l.targetBlank ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
          >
            {{ l.label }}
          </a>
          <span v-if="p.private" class="private-note">Private repo • code on request</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

type ProjectLink = { label: string; href: string; targetBlank?: boolean };
type Project = {
  title: string;
  description: string;
  tags: string[];
  bullets: string[];
  links: ProjectLink[];
  private?: boolean;
};

@Component
export default class ProjectsShowcase extends Vue {
  @Prop({ required: true })
  readonly projects!: Project[];
}
</script>

<style lang="scss" scoped>
.showcase {
  width: 95vw;
  max-width: 1050px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.track {
  display: grid;
  gap: 16px;

  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 85%);
  overflow-x: auto;
  padding: 6px 4px 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
}
.track::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 900px) {
  .track {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
    padding: 0;
  }
}

.card {
  scroll-snap-align: start;
  border-radius: 18px;
  padding: 18px 18px 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
}

.card__title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0 0 6px;
}

.card__desc {
  margin: 0 0 12px;
  opacity: 0.85;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
}
.chip {
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.bullets {
  margin: 0 0 14px;
  padding-left: 18px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.link {
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.private-note {
  font-size: 12px;
  opacity: 0.75;
}
</style>
