import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import axios from "axios";
import state from "./module-example/state";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

var nodeMCU1, nodeMCU2, nodeMCU3;

let api = "https://samantha25.ngrok.io/api";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      state,
    },
    state: {},
    actions: {
      GET_TEMPERATURE_SENSOR: ({}, { pagination, total_data, wemos_id }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/requestDataSensor", {
              pagination: pagination,
              total_data: total_data,
              filterSensor: "suhu",
              wemos_id: wemos_id,
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      },
      GET_VOLT_SENSOR: ({}, { pagination, total_data, wemos_id }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/requestDataSensor", {
              pagination: pagination,
              total_data: total_data,
              filterSensor: "daya",
              wemos_id: wemos_id,
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      },
      GET_HUMMID_SENSOR: (
        {},
        { pagination, total_data, filterSensor, wemos_id }
      ) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/requestDataSensor", {
              pagination: pagination,
              total_data: total_data,
              filterSensor: "kelembapan",
              wemos_id: wemos_id,
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      },
      GET_ACK_SENSOR: (
        {},
        { pagination, total_data, start_date, end_date, filterACK }
      ) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/requestACKSensor", {
              pagination: pagination,
              total_data: total_data,
              start_date: start_date,
              end_date: end_date,
              filterACK: filterACK,
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      },
      ACK_SENSOR: ({}, { id_sensor, ack_value }) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/updateACKSensorByID", {
              id_sensor: id_sensor,
              ack_value: ack_value,
            })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
