<template>
  <div class="q-pa-md">
    <div class="text-h3">Tabel Anomali</div>
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
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-center">{{ item.volt }}</td>
          <td class="text-right">{{ item.temp }}</td>
          <td class="text-right">{{ item.humidity }}</td>
          <td class="text-right">{{ item.volt_status }}</td>
          <td class="text-right">{{ item.temp_status }}</td>
          <td class="text-right">{{ item.humidity_status }}</td>
          <td class="text-right">
            {{
              item.anomaly == 1
                ? "Aman"
                : item.anomaly == 2
                ? "Terdapat Anomali"
                : "tidak ada anomali"
            }}
          </td>
          <td class="text-center">
            <q-btn color="red">ACK </q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          volt: 25,
          temp: 40,
          humidity: 40,
          volt_status: 3,
          temp_status: 3,
          humidity_status: 3,
          anomaly: 1,
        },

        {
          volt: 25,
          temp: 40,
          humidity: 40,
          volt_status: 3,
          temp_status: 3,
          humidity_status: 3,
          anomaly: 1,
        },
        {
          volt: 25,
          temp: 40,
          humidity: 40,
          volt_status: 3,
          temp_status: 3,
          humidity_status: 3,
          anomaly: 1,
        },
      ],
    };
  },
};
</script>
