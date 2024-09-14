<template>
  <v-container class="pa-6 pa-md-12">
    <h2>API接続テスト</h2>
    <v-sheet class="mx-auto" width="300">
      タイトル：{{ EventResponse.details.subject }}
    </v-sheet>

    <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const config = useRuntimeConfig();
const route = useRoute();
const { data: EventResponse } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/3/sample_detail/${route.params.slug}`
);

const router = useRouter();
const goBack = () => {
  router.push(`/slug/`);
};
</script>
