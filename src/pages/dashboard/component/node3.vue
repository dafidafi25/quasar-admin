<template>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <q-card class="text-grey-8">
      <q-card-section class="justify-start">
        <div class="text-center text-h4">NODE MCU 1</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-4">
            <div class="text-h6 text-center q-mr-md">Suhu(°C)</div>
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
          <div class="col-4">
            <div class="text-h6 text-center q-mr-md">Tegangan(V)</div>
            <q-knob
              readonly
              v-model="nodeMCU1.voltase"
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
        <div class="text-center text-subtitle2">
          Predicted data 10 minute after
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
          Predicted data 10 minute after
        </div>
      </q-card-section>
      <q-card-section class="justify-start">
        <div class="text-center text-h4">NODE MCU 3</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Suhu(°C)</div>
            <div class="text-center">
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
          </div>
          <div class="col-6">
            <div class="text-h6 text-center q-mr-md">Kelembaban(%RH)</div>
            <div class="text-center">
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
        </div>
        <div class="text-center text-subtitle2">
          Predicted data 10 minute after
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
import axios from "axios";

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
      axios
        .post("https://samantha25.ngrok.io/api/predictedValue", {
          index_volt: 100,
          volt: data.voltase,
          index_humid: 100,
          humid: data.kelembapan,
          index_temp: 100,
          temp: data.suhu,
        })
        .then((res) => {
          this.nodeMCU1.voltase = Math.floor(res.data.volt);
          this.nodeMCU1.kelembapan = Math.floor(res.data.humid);
          this.nodeMCU1.suhu = Math.floor(res.data.temp);
        });
    });
    const node2 = ref(db, "Anomaly-2");
    onValue(node2, (snapshot) => {
      const data = snapshot.val();
      axios
        .post("https://samantha25.ngrok.io/api/predictedValue", {
          index_volt: 60,
          volt: data.voltase,
          index_humid: 72,
          humid: data.kelembapan,
          index_temp: 73,
          temp: data.suhu,
        })
        .then((res) => {
          this.nodeMCU2.kelembapan = Math.floor(res.data.humid);
          this.nodeMCU2.suhu = Math.floor(res.data.temp);
        });
    });
    const node3 = ref(db, "Anomaly-3");
    onValue(node3, (snapshot) => {
      const data = snapshot.val();
      axios
        .post("https://samantha25.ngrok.io/api/predictedValue", {
          index_volt: 80,
          volt: data.voltase,
          index_humid: 80,
          humid: data.kelembapan,
          index_temp: 80,
          temp: data.suhu,
        })
        .then((res) => {
          this.nodeMCU3.kelembapan = Math.floor(res.data.humid);
          this.nodeMCU3.suhu = Math.floor(res.data.temp);
        });
    });
  },
};
</script>
