<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-12">
        <suhu :key="reRender1"></suhu>
      </div>
      <div class="col-12" :key="reRender2">
        <listrik></listrik>
      </div>
      <div class="col-12" :key="reRender3">
        <kelembaban></kelembaban>
      </div>
    </div>
  </q-page>
</template>

<script>
import Kelembaban from "./component/kelembaban.vue";
import Suhu from "./component/suhu.vue";
import Listrik from "./component/listrik.vue";

export default {
  name: "Charts",
  data() {
    return {
      reRender1: 1,
      reRender2: 1,
      reRender3: 1,
    };
  },
  components: {
    Kelembaban,
    Suhu,
    Listrik,
    // PieChart: defineAsyncComponent(() => import('components/charts/PieChart')),
    // ScatterPlot: defineAsyncComponent(() => import('components/charts/ScatterPlot')),
    // LineChart: defineAsyncComponent(() => import('components/charts/LineChart')),
    // BarChart: defineAsyncComponent(() => import('components/charts/BarChart')),
    // GuageChart: defineAsyncComponent(() => import('components/charts/GuageChart')),
    // TablesBasic: defineAsyncComponent(() => import('components/tables/TableBasic'))
  },
};
</script>

<style scoped></style>
