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
            <th class="text-right">Anomali</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="text-center">{{ item.daya }}</td>
            <td class="text-right">{{ item.suhu }}</td>
            <td class="text-right">{{ item.kelembapan }}</td>
            <td class="text-right">{{ item.status_daya }}</td>
            <td class="text-right">{{ item.status_suhu }}</td>
            <td class="text-right">{{ item.status_kelembapan }}</td>
            <td class="text-right">
              {{
                item.ack_status == 1
                  ? "Aman"
                  : item.ack_status == 0
                  ? "Terdapat Anomali"
                  : item.ack_status == 2
                  ? "Sudah diketahui"
                  : "Tidak ada data"
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
        .dispatch("GET_ACK_SENSOR", {
          pagination: 0,
          total_data: 50,
          start_date: "2021-12-24",
          end_date: "2025-12-27",
          filterACK: "aa",
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
