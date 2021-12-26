<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="text-h6"> Chart Suhu </q-card-section>
      <q-card-section class="text-h6">
        <div class="row">
          <div class="col-3">tes</div>
          <div>tes</div>
          <div>tes</div>
        </div>
      </q-card-section>
      <q-card-section class="scroll overflow-hidden">
        <div
          ref="areachart"
          id="areaChart"
          style="height: 400px; width: 100%"
        ></div>
      </q-card-section>
      <q-resize-observer />
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "AreaChart",
  data() {
    let $store = useStore;
    return {
      model: false,
      $store,
      options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jumat",
              "Sabtu",
              "Minggu",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Email marketing",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [25, 26, 37, 37.8, 22, 30, 32.5],
          },
        ],
      },
      area_chart: null,
    };
  },
  mounted() {
    this.$store
      .dispatch("GET_TEMPERATURE_SENSOR", {
        pagination: 1,
        total_data: 25,
        filterSensor: "all",
        wemos_id: 1,
      })
      .then((res) => {
        console.log(res);
        this.init();
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      this.options.series[0].data[6] = 1;
    }, 3000);
  },
  watch: {
    "$q.dark.isActive": function () {
      this.init();
    },
  },
  methods: {
    init() {
      let areaChart = document.getElementById("areaChart");
      echarts.dispose(areaChart);
      let theme = this.model ? "dark" : "light";
      this.area_chart = echarts.init(areaChart, theme);
      this.area_chart.setOption(this.options);
    },
    onResize() {
      if (this.area_chart) {
        this.area_chart.resize();
      }
    },
    generateDate() {},
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1920px
  min-width: 1300px
</style>
