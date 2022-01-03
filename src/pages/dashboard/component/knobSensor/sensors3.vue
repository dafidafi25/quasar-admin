<template>
  <div>
    <q-card-section class="justify-start">
      <div class="text-center text-h4">NODE MCU 1</div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col-4">
          <div class="text-h6 text-center q-mr-md">Suhu</div>
          <q-knob
            readonly
            v-model="value"
            show-value
            size="110px"
            :thickness="0.22"
            color="primary"
            track-color="info"
            class="q-ma-md"
          ></q-knob>
        </div>
        <div class="col-4">
          <div class="text-h6 text-center q-mr-md">Tegangan</div>
          <q-knob
            readonly
            v-model="value"
            show-value
            size="110px"
            :thickness="0.22"
            color="primary"
            track-color="info"
            class="q-ma-md"
          />
        </div>
        <div class="col-4">
          <div class="text-h6 text-center q-mr-md">Kelembaban</div>
          <q-knob
            readonly
            v-model="value"
            show-value
            size="110px"
            :thickness="0.22"
            color="primary"
            track-color="info"
            class="q-ma-md"
          />
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 46,
      nodeMCU3: null,
    };
  },
};
</script>
