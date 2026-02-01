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
}

.track {
  display: grid;
  gap: 22px;

  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 85%);
  overflow-x: auto;
  padding: 6px 16px 10px 6px;
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
    gap: 28px;
  }
}

.card {
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;

  border-radius: 22px;
  padding: 28px;

  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.card::before {
  content: '';
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.04), transparent 40%);
  opacity: 0.6;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.085);
  }
}

.card__title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: rgba(0, 0, 0, 0.9);
}

.card__desc {
  margin: 10px 0 0;
  max-width: 52ch;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}

.chip {
  display: inline-flex;
  align-items: center;

  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);

  padding: 6px 10px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.55);
}

.bullets {
  margin: 18px 0 0;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.6);

  li::marker {
    color: rgba(0, 0, 0, 0.25);
  }
}

.links {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  align-items: center;
}

.link {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);

  text-decoration: underline;
  text-decoration-color: rgba(0, 0, 0, 0.2);
  text-underline-offset: 4px;

  transition: color 160ms ease, text-decoration-color 160ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .link:hover {
    color: rgba(0, 0, 0, 0.9);
    text-decoration-color: rgba(0, 0, 0, 0.45);
  }
}

.link:focus-visible {
  outline: 2px solid rgba(0, 0, 0, 0.25);
  outline-offset: 3px;
  border-radius: 6px;
}

.private-note {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
}
</style>
