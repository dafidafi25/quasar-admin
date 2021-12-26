import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import axios from "axios";

let api = "http://localhost:4000/api";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    actions: {
      GET_TEMPERATURE_SENSOR: (
        {},
        { pagination, total_data, filterSensor, wemos_id }
      ) => {
        return new Promise((resolve, reject) => {
          axios
            .post(api + "/requestDataSensor", {
              pagination: pagination,
              total_data: total_data,
              filterSensor: filterSensor,
              wemos_id: wemos_id,
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
