<template>
  <div class="container my-md-3">
    <h2>
      Add Room
      <b-link @click="$router.go(-1)">(Room List)</b-link>
    </h2>
    <b-jumbotron class="bg-primary-lighter">
      <b-form @submit="onSubmit">
        <b-input-group>
          <b-form-input style="width: 50vw" id="roomname" v-model.trim="room.roomName" placeholder="Enter Room Name"></b-form-input>
          <b-button squared type="submit" variant="outline-success" :disabled="!room.roomName">Save</b-button>
        </b-input-group>
      </b-form>
    </b-jumbotron>
  </div>
</template>
<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "AddBoard",
  data() {
    return {
      ref: firebase.database().ref("chatrooms/"),
      room: { roomName: "" }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      let newData = this.ref.push();
      newData.set({
        roomName: this.room.roomName
      });
      router.go(-1).catch(error => {
        alert("Error adding document: ", error);
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
