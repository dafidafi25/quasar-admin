<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <area-chart></area-chart>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <tables-basic />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Charts",
  components: {
    // PieChart: defineAsyncComponent(() => import('components/charts/PieChart')),
    // ScatterPlot: defineAsyncComponent(() => import('components/charts/ScatterPlot')),
    // LineChart: defineAsyncComponent(() => import('components/charts/LineChart')),
    // BarChart: defineAsyncComponent(() => import('components/charts/BarChart')),
    AreaChart: defineAsyncComponent(() =>
      import("components/charts/AreaChart")
    ),
    // GuageChart: defineAsyncComponent(() => import('components/charts/GuageChart')),
    // TablesBasic: defineAsyncComponent(() => import('components/tables/TableBasic'))
  },
});
</script>

<style scoped></style>
