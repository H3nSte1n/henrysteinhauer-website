<template>
  <ul class="list" :class="{ 'list--gap': gap }">
    <li v-for="(item, key) in items" :key="key" class="list__item">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Button from '@/components/elements/button.vue';
import type { IButtonObj } from '@/components/elements/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class SocialMediaBar extends Vue {
  @Prop({ required: true, default: [] })
  readonly items!: Array<IButtonObj>;

  @Prop({ required: false })
  readonly gap!: boolean;
}
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  padding: 0;

  &__item {
    padding: 3px 0;
  }

  &--gap {
    margin: 15px 0;
  }
}
</style>
