<template>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <q-card class="text-grey-8">
      <acktable />
    </q-card>
  </div>
</template>

<script>
import acktable from "./table/acktable.vue";
export default {
  name: "Charts",
  data() {
    return {
      value: 50,
    };
  },
  components: {
    acktable,
  },
};
</script>
