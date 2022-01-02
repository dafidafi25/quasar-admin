<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 text-grey-8">Basic</div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input
            v-if="show_filter"
            filled
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            class="q-ml-sm"
            icon="filter_list"
            @click="show_filter = !show_filter"
            flat
          />
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const data = [
  {
    name: "27,5°",
    calories: "67%",
    fat: "Tidak Ada Asap",
    carbs: "tidak Terdeteksi Air",
    protein: "100 Watt",
    sodium: "20-20-2021",
    calcium: "14%",
    iron: "1%",
  },
];
const columns = [
  {
    name: "name",
    required: true,
    label: "Suhu",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "calories", align: "center", label: "Kelembaban", field: "calories" },
  { name: "fat", label: "Asap", field: "fat" },
  { name: "carbs", label: "Air", field: "carbs" },
  { name: "protein", label: "Daya", field: "protein" },
  { name: "sodium", label: "Tanggal", field: "sodium" },
];

export default defineComponent({
  name: "TableBasic",
  setup() {
    const show_filter = ref(false);
    const $store = useStore();

    return {
      filter: ref(""),
      show_filter,
      data,
      columns,
      $store,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1920px
  min-width: 1300px
</style>
