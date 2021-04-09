<template>
  <v-app id="inspire">
    <Navbar/>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <h3>Post List</h3>
        <br />
        <v-text-field
          outlined
          label="Search by ID"
          @keyup.enter="filterPostsById"
          clearable
          hide-details=""
          append-icon="mdi-account-search"
          @click:append="filterPostsById"
        ></v-text-field>
        <br />
        <v-row>
          <v-col v-for="post in posts" :key="post.id" cols="6">
            <v-sheet color="white" elevation="24">
              <v-list-item
                :key="post.id"
                :to="{ name: 'PostDetail', params: { id: post.id } }"
              >
                <v-list-item-icon large>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="250"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    style="font-size: 16px; font-weight: 500"
                    >{{ post.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle>
                    {{ post.body }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },
  name: "PostList",
  computed: mapGetters(["posts"]),
  created() {
    this.getPosts();
  },
  methods: {
    ...mapActions(["getPosts", "getPostById"]),
    filterPostsById(e) {
      if (e.target.value === "") {
        this.getPosts();
      } else {
        this.getPostById(e.target.value);
      }
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
search-container {
  top: 50%;
  left: 50%;
}
</style>

