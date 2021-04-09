<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <p>User {{ $route.params.id }}</p>
        <form>
          <v-text-field label="Full Name" required v-model="data.name"
            >Fullname</v-text-field
          >
          <v-text-field label="Username" required v-model="data.username"
            >Username</v-text-field
          >
          <v-text-field label="E-mail" required v-model="data.email"
            >Email</v-text-field
          >
          <v-text-field label="Street" required v-model="data.address.street"
            >Street</v-text-field
          >
          <v-text-field label="City" required v-model="data.address.city"
            >City</v-text-field
          >
          <v-btn class="mr-4" color="success" @click="update(data)">
            Update
          </v-btn>
          <v-btn class="mr-4" color="error" @click="deleteUSER(data.id)">
            Delete
          </v-btn>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/*eslint-disable */
import axios from "axios";
import { mapActions } from "vuex";
import Navbar from "../components/Navbar";
export default {
  name: "UserDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      alert: false,
      data: {
        id: "",
        username: "",
        name: "",
        email: "",
        address: {
          street: "",
          city: "",
        },
      },
    };
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).then((res) => {
      this.data = res.data;
    });
  },
  methods: {
    ...mapActions(["deleteUser", "updateUser"]),
    update(data) {
      this.$confirm("Do you want to update ?", "UPDATE USER", "question")
        .then(() => {
          if (data) {
            this.$alert("update successfully");
            this.updateUser(data);
            this.$router.push({ path: "/user-list" });
          } else {
            this.$alert("update failed");
            this.$router.push({ path: "/user-list" });
          }
        })
        .catch(() => {
          console.log("OK not selected.");
        });
    },
    deleteUSER(id) {
      this.$confirm("Do you want to delete ?", "DELETE USER", "question")
        .then(() => {
          if (id) {
            this.$alert("update successfully");
            this.deleteUser(id);
            this.$router.push({ path: "/user-list" });
          }
        })
        .catch(() => {
          this.$alert("update failed");
          this.$router.push({ path: "/user-list" });
        });
    },
  },
};
</script>
