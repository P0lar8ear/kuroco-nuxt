<template>
  <v-container class="pa-6 pa-md-12">
    <h2>API接続テスト</h2>
    <v-sheet class="mx-auto" width="300">
      <v-list lines="two">
        <v-list-item
          v-for="n in EventResponse.list"
          :key="n"
          :title="'title ' + n.subject"
          subtitle="Load check ok"
        ></v-list-item>
      </v-list>
    </v-sheet>

    <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const config = useRuntimeConfig();
const { data: EventResponse } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/sample`,
  { credentials: "include" }
);

const route = useRoute();
const router = useRouter();
const goBack = () => {
  router.push(`/`);
};
</script>
