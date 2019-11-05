<template>
  <!-- Login -->
  <section class="container my-md-6 px-0 px-md-3">
    <div class="row justify-content-center no-gutters">
      <div class="col-md-10">
        <div class="row flex-md-row-reverse no-gutters">
          <!-- 輸入名稱 (md 以上 d-none) -->
          <div class="text-center w-100 bg-primary p-5 d-md-none">
            <h1 class="my-2 text-white">輸入名稱</h1>
          </div>
          <!-- 輸入名稱 (md 以上 d-block) + 表格 -->
          <div class="col-md-12 px-0">
            <div class="text-center w-100 bg-primary p-5 d-none d-md-block">
              <h1 class="my-2 text-white">輸入名稱</h1>
            </div>
            <b-form @submit="onSubmit" class="px-5 py-5 pt-md-0 bg-primary">
              <b-form-group>
                <b-form-input
                  id="nickname"
                  v-model.trim="login.nickname"
                  placeholder="Enter your nickname"
                ></b-form-input>
              </b-form-group>
              <b-button
                type="submit"
                class="btn btn-block btn-lg btn-accent text-white py-3"
              >進入聊天</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <b-row>
    <b-col cols="12">
      <h2>
        Login
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group>
            <b-form-input id="nickname" v-model.trim="login.nickname" placeholder="Enter your nickname"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="!login.nickname">Login</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>-->
</template>

<script>
import router from "../router";

export default {
  name: "AddBoard",
  data() {
    return {
      login: { nickname: "" }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      router.push({
        name: "RoomList",
        params: { nickname: this.login.nickname }
      });
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
