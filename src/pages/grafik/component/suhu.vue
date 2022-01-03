<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="text-h6"> Chart Suhu </q-card-section>
      <q-card-section class="text-h6">
        <div class="row">
          <div class="col-2 q-mr-md">
            <!-- <q-input filled v-model="firstDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="firstDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input> -->
          </div>
          <div class="col-2">
            <!-- <q-input filled v-model="firstDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="firstDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input> -->
          </div>
        </div>
      </q-card-section>
      <q-card-section class="scroll overflow-hidden">
        <div ref="Suhu" id="Suhu" style="height: 400px; width: 100%"></div>
      </q-card-section>
      <q-resize-observer />
    </q-card>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Suhu",
  data() {
    let $store = useStore;
    return {
      firstDate: "2019/01/01",
      lastDate: "2025/01/01",
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
              "2021/12/14",
              "2021/12/15",
              "2021/12/16",
              "2021/12/17",
              "2021/12/18",
              "2021/12/19",
              "2021/12/20",
              "2021/12/21",
              "2021/12/22",
              "2021/12/23",
              "2021/12/24",
              "2021/12/25",
              "2021/12/26",
              "2021/12/27",
              "2021/12/28",
              "2021/12/29",
              "2021/12/30",
              "2021/12/31",
              "2022/01/01",
              "2022/01/02",
              "2022/01/03",
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
        pagination: 0,
        total_data: 25,
        wemos_id: null,
      })
      .then((res) => {
        const array = res.data;
        let arrayChart = [];

        array.forEach((item) => {
          arrayChart.push(item.suhu);
        });
        this.options.series[0].data = arrayChart;
        this.init();
      })
      .catch((err) => console.log(err));
  },
  watch: {
    "$q.dark.isActive": function () {
      this.init();
    },
  },
  methods: {
    init() {
      let Suhu = document.getElementById("Suhu");
      echarts.dispose(Suhu);
      let theme = this.model ? "dark" : "light";
      this.area_chart = echarts.init(Suhu, theme);
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
