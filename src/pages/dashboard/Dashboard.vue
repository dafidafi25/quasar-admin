<template>
  <q-page class="row q-col-gutter-sm q-pb-sm">
    <nodemcu2 />
    <nodemcu1 />
  </q-page>
</template>

<script>
import nodemcu1 from "./component/node1.vue";
import nodemcu2 from "./component/node2.vue";

export default {
  components: {
    nodemcu1,
    nodemcu2,
  },
  data() {
    return {
      nodeMCU1: null,
      nodeMCU2: null,
      nodeMCU3: null,
    };
  },
};
</script>
