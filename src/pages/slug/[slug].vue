<template>
  <ClientOnly>
    <v-container class="pa-6 pa-md-12">
      <h2>API接続テスト</h2>
      <v-sheet class="mx-auto" width="300">
        <p v-if="EventResponse">
          タイトル：{{ EventResponse.details.subject }}
        </p>
        <p v-else>データを読み込み中...</p>
        <p v-if="error">エラーが発生しました: {{ error.message }}</p>
      </v-sheet>

      <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
    </v-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";

const EventResponse = ref(null);
const error = ref(null);
const loading = ref(true);

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const fetchEventDetails = async () => {
  try {
    loading.value = true;
    const { data, error: fetchError } = await useFetch(
      `${config.public.kurocoApiDomain}/rcms-api/3/sample_detail/${route.params.slug}`
    );
    if (fetchError.value) throw fetchError.value;
    EventResponse.value = data.value;
  } catch (err) {
    console.error("APIリクエストエラー:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
};

await fetchEventDetails();

const goBack = () => {
  router.push(`/slug/`);
};
</script>
