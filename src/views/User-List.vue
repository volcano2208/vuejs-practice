<template>
  <v-app id="inspire">
    <Navbar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <h3>User List</h3>
        <br />
        <v-text-field
          outlined
          label="Search by ID"
          @keyup.enter="filterUsersById"
          clearable
          hide-details=""
          append-icon="mdi-account-search"
          @click:append="filterUsersById"
        ></v-text-field>
        <br />
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-list two-line>
                <template v-for="user in users">
                  <v-list-item :key="user.id">
                    <v-list-item-avatar>
                      <img src="../assets/logo.png" alt="logovue" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.username }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ user.email }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn :to="{ name: 'UserDetail', params: { id: user.id } }"
                      >Detail</v-btn
                    >
                  </v-list-item>
                  <v-divider
                    v-if="user !== 6"
                    :key="`divider-${user.id}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: "UserList",
  components: {
    Navbar,
  },
  computed: mapGetters(["users"]),
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["getUsers", "getUserById"]),
    filterUsersById(e) {
      if (e.target.value === "") {
        this.getUsers();
      } else {
        this.getUserById(e.target.value);
      }
    },
  },
};
</script>
<style scoped>
search-container {
  top: 50%;
  left: 50%;
}
</style>