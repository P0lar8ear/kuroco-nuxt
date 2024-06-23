<template>
  <v-container class="pa-6 pa-md-12">
    <h2>動的ルーティングテスト</h2>
    <v-sheet class="mx-auto" width="500">
      <v-empty-state
        headline="check!ok,clear"
        :title="`Page slug ${route.params.slug}`"
        text="This is a page for testing dynamic routing."
        image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
      ></v-empty-state>
    </v-sheet>
    <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.push(`/`);
};
</script>
