<template>
  <ul class="list">
    <li class="list__item" v-for="(item, key) in items" :key="key">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Button from '@/components/ui/button.vue';
import type { IButtonObj } from '@/components/ui/button.vue';

@Component({
  components: {
    Button,
  },
})
export default class SocialMediaBar extends Vue {
  @Prop({ required: true, default: [] })
  readonly items!: Array<IButtonObj>;
}
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  padding: 0;

  &__item {
    padding: 3px 0;
  }
}
</style>
