<template>
  <div>
    <q-card-section class="justify-start">NODE MCU 2 </q-card-section>
    <q-card-section class="q-pa-none flex flex-center">
      <q-knob
        readonly
        v-model="value"
        show-value
        size="120px"
        :thickness="0.22"
        color="primary"
        track-color="info"
        class="q-ma-md"
      />
      <q-knob
        readonly
        v-model="value"
        show-value
        size="140px"
        :thickness="0.22"
        color="primary"
        track-color="info"
        class="q-ma-md"
      />
      <q-knob
        readonly
        v-model="value"
        show-value
        size="120px"
        :thickness="0.22"
        color="primary"
        track-color="info"
        class="q-ma-md"
      />
    </q-card-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 46,
    };
  },
};
</script>
