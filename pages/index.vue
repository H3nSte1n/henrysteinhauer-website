<template>
  <Header />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Header from '@/components/header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
