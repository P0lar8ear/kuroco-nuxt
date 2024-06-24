<template>
  <h1>kuroco deploy test🥷💭</h1>

  <v-container class="pa-6 pa-md-12">
    <h2>動的ルーティング</h2>
    <v-sheet class="mx-auto" width="300">
      <v-form ref="form" @submit.prevent="handleSubmit" @change="validateForm">
        <v-text-field
          v-model="id"
          :rules="rules"
          label="id"
          Number
          type="number"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block :disabled="isSubmitDisabled"
          >Submit</v-btn
        >
      </v-form>
    </v-sheet>
  </v-container>

  <v-container class="pa-6 pa-md-12">
    <h2>API接続テスト</h2>
    <v-sheet class="mx-auto" width="300">
      <v-btn class="mt-2" type="submit" block @click="goAPI">go check</v-btn>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const id = ref<number | "">("");
    const isSubmitDisabled = ref<boolean>(true);
    const form = ref(null);

    const rules = [
      (value: number | ""): boolean | string => {
        if (value && Number(value)) return true;
        return "You must enter a valid number.";
      },
    ];

    const router = useRouter();

    const validateForm = () => {
      if (form.value) {
        isSubmitDisabled.value = !form.value.validate();
      }
    };

    const handleSubmit = () => {
      if (id.value && !isSubmitDisabled.value) {
        router.push(`/route/${id.value}`);
      }
    };

    const goAPI = () => {
      router.push(`/api/`);
    };

    return {
      id,
      rules,
      handleSubmit,
      form,
      isSubmitDisabled,
      validateForm,
      goAPI,
    };
  },
});
</script>
