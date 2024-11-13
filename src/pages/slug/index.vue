<template>
  <ClientOnly>
    <v-container class="pa-6 pa-md-12">
      <h2>API接続テスト</h2>
      <v-sheet class="mx-auto" width="300">
        <v-list lines="two">
          <v-list-item
            v-for="n in Response?.list || []"
            :key="n.slug || n.topics_id"
            :title="'title ' + n.subject"
            subtitle="Load check ok"
            :to="n.slug ? `/slug/${n.slug}` : `/slug/${n.topics_id}`"
          ></v-list-item>
        </v-list>
      </v-sheet>

      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="7"
          :total-visible="Response?.pageInfo.totalCnt || 0"
        ></v-pagination>
      </div>

      <v-btn variant="tonal" @click="goBack"> ← Back </v-btn>
    </v-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRuntimeConfig } from "#app";

interface EventItem {
  subject: string;
  slug: string | null;
  topics_id: string | null;
}

interface PageInfo {
  totalCnt: number;
}

interface ResponseData {
  list: EventItem[];
  pageInfo: PageInfo;
}

const Response = ref<ResponseData | null>(null);
const page = ref(1);
const config = useRuntimeConfig();

// データを取得する関数
const loadDetailData = async (pageNumber) => {
  try {
    const { data, error } = await useFetch<ResponseData>(
      `${config.public.kurocoApiDomain}/rcms-api/3/sample_list`,
      {
        params: { pageID: pageNumber || 1 },
      }
    );

    if (error.value) throw error.value;
    Response.value = data.value || { list: [], pageInfo: { totalCnt: 0 } };
  } catch (err) {
    console.error("APIリクエストエラー:", err);
  }
};

// `page`が変更されるたびにAPIを再呼び出し
watch(page, (newPage) => {
  loadDetailData(newPage);
});

// 初回ロード時のデータ取得
await loadDetailData(page.value);

const router = useRouter();
const goBack = () => {
  router.push(`/`);
};
</script>
