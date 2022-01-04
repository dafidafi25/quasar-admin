<template>
  <div class="q-pa-md">
    <div class="text-h4 q-mb-lg">Tabel Anomali</div>
    <q-scroll-area style="height: 1000px; min-width: 1000px">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-center">Tegangan</th>
            <th class="text-right">Suhu</th>
            <th class="text-right">Kelembaban</th>
            <th class="text-right">Status Tegangan</th>
            <th class="text-right">Status Suhu</th>
            <th class="text-right">Status Kelembaban</th>
            <th class="text-right">NODE MCU ID</th>
            <th class="text-center">Waktu</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="text-center">{{ item.daya }}</td>
            <td class="text-right">{{ item.suhu }}</td>
            <td class="text-right">{{ item.kelembapan }}</td>
            <td class="text-right">
              {{
                item.status_daya == 1
                  ? "Tegangan Drop"
                  : item.status_daya == 2
                  ? "Tegangan Melemah"
                  : item.status_daya == 3
                  ? "Tegangan Normal"
                  : item.status_daya == 4
                  ? "Tegangan Meningkat"
                  : item.status_daya == 5
                  ? "Tegangan Terlalu Tinggi"
                  : null
              }}
            </td>
            <td class="text-right">
              {{
                item.status_suhu == 1
                  ? "Suhu Terlalu Rendah"
                  : item.status_suhu == 2
                  ? "Suhu Rendah Kurang dari 18 (°C)"
                  : item.status_suhu == 3
                  ? "Suhu Normal"
                  : item.status_suhu == 4
                  ? "Suhu Tinggi Lebih dari 27 (°C)"
                  : item.status_suhu == 5
                  ? "Suhu Terlalu Tinggi"
                  : null
              }}
            </td>
            <td class="text-right">
              {{
                item.status_kelembapan == 1
                  ? "Kelembaban Terlalu Rendah"
                  : item.status_kelembapan == 2
                  ? "Kelembaban Rendah Kurang dari 18 (°C)"
                  : item.status_kelembapan == 3
                  ? "Kelembaban Normal"
                  : item.status_kelembapan == 4
                  ? "Kelembaban Tinggi Lebih dari 27 (°C)"
                  : item.status_kelembapan == 5
                  ? "Kelembaban Terlalu Tinggi"
                  : null
              }}
            </td>
            <td class="text-right">
              {{ item.wemos_id }}
            </td>
            <td class="text-right">
              {{
                item.created_at.substring(0, item.created_at.indexOf("T")) +
                " " +
                item.created_at.substring(
                  item.created_at.indexOf("T") + 1,
                  item.created_at.indexOf("T") + 1 + 8
                )
              }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-scroll-area>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  data() {
    const $store = useStore();
    return {
      $store,
      items: [],
      valid: false,
    };
  },
  mounted() {
    console.log("tes");
    this.updateData();
  },
  methods: {
    acknowledge(id, ack) {
      if (ack == 0) {
        this.$store
          .dispatch("ACK_SENSOR", {
            id_sensor: id,
            ack_value: 2,
          })
          .then(() => this.updateData())
          .catch((err) => console.log(err));
      } else {
        alert("Ack Sudah diketahui");
      }
    },
    updateData() {
      this.$store
        .dispatch("GET_SENSOR_DATA", {
          pagination: 0,
          total_data: 50,
          start_date: "2021-12-24",
          end_date: "2025-12-27",
        })
        .then((res) => {
          this.valid = true;
          this.items = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
