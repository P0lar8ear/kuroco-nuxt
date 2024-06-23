<template>
  <h1>API接続テスト</h1>
  <div>
    {{ EventResponse }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: EventResponse } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/sample`,
  { credentials: "include", server: false }
);

definePageMeta({
  layout: "sample",
});
</script>
