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
  methods: {
    OneSignalInit() {
      // Uncomment to set OneSignal device logging to VERBOSE
      // window.plugins.OneSignal.setLogLevel(6, 0);

      // NOTE: Update the setAppId value below with your OneSignal AppId.
      window.plugins.OneSignal.setAppId("ead9cdeb-c94d-4c7e-80ab-e20d7b8a6981");
      window.plugins.OneSignal.setNotificationOpenedHandler(function (
        jsonData
      ) {
        console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
      });

      // iOS - Prompts the user for notification permissions.
      //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
      window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(
        function (accepted) {
          console.log("User accepted notifications: " + accepted);
        }
      );
    },
  },
};
</script>
