<template>
  <q-page class="q-pa-sm">
    <tables-basic></tables-basic>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Tables",
  components: {
    TableProgress: defineAsyncComponent(() =>
      import("components/tables/TableProgress")
    ),
    TableCustomGrid: defineAsyncComponent(() =>
      import("components/tables/TableCustomGrid")
    ),
    TableDarkMode: defineAsyncComponent(() =>
      import("components/tables/TableDarkMode")
    ),
    TableActions: defineAsyncComponent(() =>
      import("components/tables/TableActions")
    ),
    TablesBasic: defineAsyncComponent(() =>
      import("components/tables/TableBasic")
    ),
  },
});
</script>

<style></style>
