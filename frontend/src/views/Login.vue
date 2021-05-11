<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <div v-if="client === ''">
      <div>
        <h1>SignUp</h1>
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <button @click="signup">新規登録</button>
      </div>
      <div>
        <h1>SignIn</h1>
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <button @click="signin">SignIn</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      uid: "",
      access_token: "",
      client: "",
      title: "",
      content: "",
      tasks: [],
      comment: "",
      posts: [],
    };
  },
  methods: {
    signup() {
      axios
        .post("/api/auth", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.access_token = response.headers["access-token"];
          this.client = response.headers["client"];
          this.uid = response.headers["uid"];

        });
    },
    signin() {
      console.log(this.email);
      console.log(this.password);
      axios
        .post("/api/auth/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.access_token = response.headers["access-token"];
          this.client = response.headers["client"];
          this.uid = response.headers["uid"];

        });
    },
    signout() {
      console.log(this.uid);
      console.log(this.access_token);
      console.log(this.client);
      axios
        .delete("/api/auth/sign_out", {
          test: { test: "test" },
          headers: {
            uid: this.uid,
            "access-token": this.access_token,
            client: this.client,
          },
        })
        .then((response) => {
          console.log(response);
          this.access_token = "";
          this.client = "";
          this.uid = "";
          localStorage.removeItem("uid");
          localStorage.removeItem("access-token");
          localStorage.removeItem("client");
        });
    },
  },
};
</script>
