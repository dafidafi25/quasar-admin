<template>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <q-card class="text-grey-8">
      <sensor-1 />
      <sensor-2 />
      <sensor-3 />
    </q-card>
  </div>
</template>

<script>
import sensor1 from "./knobSensor/sensors1.vue";
import sensor2 from "./knobSensor/sensors2.vue";
import sensor3 from "./knobSensor/sensors3.vue";

export default {
  name: "Charts",
  data() {
    return {
      value: 50,
    };
  },
  components: {
    sensor1,
    sensor2,
    sensor3,
  },
};
</script>
