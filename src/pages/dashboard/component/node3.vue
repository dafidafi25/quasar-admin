<template>
  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
    <q-card class="text-grey-8">
      <q-card-section class="q-pa-none flex flex-center"
        >NODE MCU 1
      </q-card-section>
      <q-card-section class="q-pa-none flex flex-center">
        <q-knob
          readonly
          v-model="value"
          show-value
          size="90px"
          :thickness="0.22"
          color="orange"
          track-color="orange-3"
          class="text-orange q-ma-md"
        />
        <q-knob
          readonly
          v-model="value"
          show-value
          size="90px"
          :thickness="0.22"
          color="orange"
          track-color="orange-3"
          class="text-orange q-ma-md"
        />
        <q-knob
          readonly
          v-model="value"
          show-value
          size="90px"
          :thickness="0.22"
          color="orange"
          track-color="orange-3"
          class="text-orange q-ma-md"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Charts",
  data() {
    return {
      value: 50,
    };
  },
};
</script>
