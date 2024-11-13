<template>
  <ClientOnly>
    <v-container class="pa-6 pa-md-12">
      <h2></h2>
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
import { fetchFromApi } from "@/utils/api.js";

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

// データを取得する関数
const loadDetailData = async (pageNumber) => {
  const data = await fetchFromApi<ResponseData>("/rcms-api/3/sample_list", {
    pageID: pageNumber || 1,
  });
  Response.value = data;
};

watch(page, (newPage) => {
  loadDetailData(newPage);
});

await loadDetailData(page.value);

const router = useRouter();
const goBack = () => {
  router.push(`/`);
};
</script>
