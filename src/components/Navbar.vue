<template>
  <v-navigation-drawer app>
    <v-sheet color="grey lighten-4" class="pa-5">
      <v-avatar class="mb-2" size="50">
        <img src="../assets/logo.png" alt="logovue"
      /></v-avatar>
      <div>john@vuetifyjs.com</div>
    </v-sheet>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text, to] in links" :key="icon" link :to="to">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
/* eslint-disable */
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        ["mdi-account", "Users", "/user-list"],
        ["mdi-send", "Post", "/post-list"],
      ],
    };
  },
};
</script>