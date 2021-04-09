<template>
  <v-main>
    <v-card width="500" class="mx-auto mt-9">
      <v-form v-model="valid" ref="form">
        <v-card-title>Welcome to Login</v-card-title>
        <v-card-text>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
            required
            v-model="password"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            @click="submit"
            :class="{
              'blue darken-4 white--text': valid,
              disabled: !valid,
            }"
            >Login</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
    <router-view></router-view>
  </v-main>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(v) || "E-mail must be valid",
      ],
      showPassword: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate() && this.email === "Admin@test" && this.password === "123") {
        this.$router.push({ path: "/user-list" });
        console.log("logged in successfully");
      } else {
        console.log("Invalid email or password");
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

