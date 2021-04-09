<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn outlined :to="{path:'/'}">Vue Application</v-btn>
      <v-spacer></v-spacer>
      <v-btn text rounded @click="LoginRedirect">Login</v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "App",
  methods: {
    LoginRedirect() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
