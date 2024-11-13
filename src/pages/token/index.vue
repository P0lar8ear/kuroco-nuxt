<template>
  <ClientOnly>
    <v-container class="pa-6 pa-md-12">
      <h2>静的トークンテスト</h2>
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
  </ClientOnly>
</template>

<script setup lang="ts">
interface EventItem {
  subject: string;
  slug: string | null;
  topics_id: string | null;
}

interface EventResponse {
  list: EventItem[];
}
const config = useRuntimeConfig();
const { data: EventResponse, error: fetchError } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/6/token`,
  {
    headers: {
      "x-rcms-api-access-token": config.public.apiAccessToken,
    },
  }
);
const router = useRouter();
const goBack = () => {
  router.push(`/`);
};
</script>
