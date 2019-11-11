<template>
  <!-- Main -->
  <div class="container my-md-3">
    <div class="row">
      <div class="col-md">
        <h1 class="h4 bg-primary-lighter text-center py-4 text-primary mb-0">Room List</h1>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
              v-for="room in rooms"
              :key="room.key"
              :to="{name: 'Chat', params: {nickname: nickname, roomid: room.key, roomname: room.roomName}}"
              action
            >
            <div class="d-flex my-3">
              <img
                src="@/assets/logo.png"
                class="bg-cover mr-5"
                style="height: 110px; min-width: 110px;"
              />
              <div class="mr-md-4 my-2 text-primary">
                <span class="h5">{{room.roomName}}</span>
                <br />
                <span>人數：0</span>
              </div>
            </div>
              <b-badge variant="primary" pill class="float:right">2</b-badge>
            </b-list-group-item>
          </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../Firebase";

export default {
  name: "BoardList",
  data() {
    return {
      nickname: this.$route.params.nickname,
      rooms: [],
      errors: [],
      ref: firebase.database().ref("chatrooms/")
    };
  },
  created() {
    this.ref.on("value", snapshot => {
      this.rooms = [];
      snapshot.forEach(doc => {
        let item = doc.val();
        item.key = doc.key;
        this.rooms.push(item);
      });
    });
  }
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>
