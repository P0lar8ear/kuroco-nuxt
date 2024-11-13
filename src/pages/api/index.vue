<template>
  <ClientOnly>
    <v-container class="pa-6 pa-md-12">
      <h2>API接続テスト</h2>
      <v-sheet class="mx-auto" width="300">
        <v-list lines="two">
          <v-list-item
            v-for="(item, index) in EventResponse.list"
            :key="index"
            :title="'title ' + item.subject"
            subtitle="Load check ok"
          ></v-list-item>
        </v-list>

        <div v-if="loading">データを読み込み中...</div>
        <div v-if="error">エラーが発生しました: {{ error.message }}</div>
      </v-sheet>

      <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
    </v-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// 必要な変数を定義
const EventResponse = ref({ list: [] });
const error = ref(null);
const loading = ref(true);

const router = useRouter();

const fetchEventList = async () => {
  const config = useRuntimeConfig();
  try {
    loading.value = true;
    const { data, error: fetchError } = await useFetch(
      `${config.public.kurocoApiDomain}/rcms-api/3/sample`
    );
    if (fetchError.value) throw fetchError.value;
    EventResponse.value = data.value || { list: [] };
  } catch (err) {
    console.error("APIリクエストエラー:", err);
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchEventList);

const goBack = () => {
  router.push(`/`);
};
</script>
