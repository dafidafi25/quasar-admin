<template>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <q-card class="text-grey-8">
      <q-card-section class="justify-start">
        <div class="text-center text-h4">NODE MCU 1</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Suhu(°C)</div>
            <div class="text-center">
              <q-knob
                readonly
                v-model="nodeMCU1.suhu"
                show-value
                size="110px"
                :thickness="0.22"
                color="primary"
                track-color="info"
                class="q-ma-md"
              ></q-knob>
            </div>
          </div>
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Kelembaban(%RH)</div>
            <div class="text-center">
              <q-knob
                readonly
                v-model="nodeMCU1.kelembapan"
                show-value
                size="110px"
                :thickness="0.22"
                color="primary"
                track-color="info"
                class="q-ma-md"
              />
            </div>
          </div>
        </div>
        <div class="text-center text-subtitle2">
          Last Updated {{ nodeMCU1.date }}
        </div>
      </q-card-section>
      <q-card-section class="justify-start">
        <div class="text-center text-h4">NODE MCU 2</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Suhu(°C)</div>
            <div class="text-center">
              <q-knob
                readonly
                v-model="nodeMCU2.suhu"
                show-value
                size="110px"
                :thickness="0.22"
                color="primary"
                track-color="info"
                class="q-ma-md"
              ></q-knob>
            </div>
          </div>
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Kelembaban(%Rh)</div>
            <div class="text-center">
              <q-knob
                readonly
                v-model="nodeMCU2.kelembapan"
                show-value
                size="110px"
                :thickness="0.22"
                color="primary"
                track-color="info"
                class="q-ma-md"
              />
            </div>
          </div>
        </div>
        <div class="text-center text-subtitle2">
          Last Updated {{ nodeMCU2.date }}
        </div>
      </q-card-section>
      <q-card-section class="justify-start">
        <div class="text-center text-h4">NODE MCU 3</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-4">
            <div class="text-h6 text-center q-mr-md">Suhu(°C)</div>
            <q-knob
              readonly
              v-model="nodeMCU3.suhu"
              show-value
              size="110px"
              :thickness="0.22"
              color="primary"
              track-color="info"
              class="q-ma-md"
            ></q-knob>
          </div>
          <div class="col-4">
            <div class="text-h6 text-center q-mr-md">Tegangan(V)</div>
            <q-knob
              readonly
              v-model="nodeMCU3.voltase"
              show-value
              size="110px"
              max="300"
              :thickness="0.22"
              color="primary"
              track-color="info"
              class="q-ma-md"
            />
          </div>
          <div class="col-4">
            <div class="text-h6 text-center q-mr-md">Kelembaban(%Rh)</div>
            <q-knob
              readonly
              v-model="nodeMCU3.kelembapan"
              show-value
              size="110px"
              :thickness="0.22"
              color="primary"
              track-color="info"
              class="q-ma-md"
            />
          </div>
        </div>

        <div class="text-center text-subtitle2">
          Last Updated {{ nodeMCU3.date }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import sensor1 from "./knobSensor/sensors1.vue";
import sensor2 from "./knobSensor/sensors2.vue";
import sensor3 from "./knobSensor/sensors3.vue";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD4o0VqJp6KQ_iNvEZRQJ3MgUjizJ4CgfQ",
  authDomain: "backendserver1.firebaseapp.com",
  databaseURL:
    "https://backendserver1-default-rtdb.asia-southeast1.firebasedatabase.app",
};

initializeApp(firebaseConfig);

const db = getDatabase();

export default {
  name: "Charts",
  data() {
    return {
      value: 50,
      nodeMCU1: {},
      nodeMCU2: {},
      nodeMCU3: {},
    };
  },
  components: {
    sensor1,
    sensor2,
    sensor3,
  },
  mounted() {
    const node1 = ref(db, "Anomaly-1");
    onValue(node1, (snapshot) => {
      const data = snapshot.val();
      this.nodeMCU1 = data;
      console.log(this.nodeMCU1);
    });
    const node2 = ref(db, "Anomaly-2");
    onValue(node2, (snapshot) => {
      const data = snapshot.val();
      this.nodeMCU2 = data;
    });
    const node3 = ref(db, "Anomaly-3");
    onValue(node3, (snapshot) => {
      const data = snapshot.val();
      this.nodeMCU3 = data;
    });
  },
};
</script>
