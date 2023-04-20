<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Layout from './components/layout/index.vue';
import Navbar from './components/Navbar/index.vue';
</script>

<template class="uiui">
  <Layout>
    <template #header>
      <Navbar />
    </template>

    <template #maincontent>
      <RouterView style="height: 100%;" />
    </template>
  </Layout>
</template>

<style scoped></style>
