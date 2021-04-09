<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <p>Post {{ $route.params.id }}</p>
        <form>
          <v-text-field label="Title" required v-model="data.title"
            >Title</v-text-field
          >
          <v-textarea
            solo
            name="input-7-4"
            label="Body"
            required
            v-model="data.body"
            >Body</v-textarea
          >
          <v-btn class="mr-4" color="success" @click="update(data)">
            Update
          </v-btn>
          <v-btn class="mr-4" color="error" @click="deletePOST(data.id)">
            Delete
          </v-btn>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import { mapActions } from "vuex";
import Navbar from "../components/Navbar";
export default {
  name: "PostDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      data: {
        id: "",
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then((res) => {
      this.data = res.data;
    });
  },
  methods: {
    ...mapActions(["deletePost", "updatePost"]),
    update(data) {
      this.$confirm("Do you want to update ?", "UPDATE POST", "question")
        .then(() => {
          if (data) {
            this.$alert("update successfully");
            this.updatePost(data);
            this.$router.push({ path: "/post-list" });
          } else {
            this.$alert("update failed");
            this.$router.push({ path: "/post-list" });
          }
        })
        .catch(() => {
          console.log("OK not selected.");
        });
    },
    deletePOST(id) {
      this.$confirm("Do you want to delete ?", "DELETE POST", "question")
        .then(() => {
          if (id) {
            this.$alert("update successfully");
            this.deletePost(id);
            this.$router.push({ path: "/post-list" });
          }
        })
        .catch(() => {
          this.$alert("update failed");
          this.$router.push({ path: "/post-list" });
        });
    },
  },
};
</script>
