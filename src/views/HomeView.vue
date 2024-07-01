<template>
  <div class="container full_image">
    <div class="py-3 px-4 center_layout fs_custom">
      <span style="word-break: keep-all;">{{ dayStateMsg }}</span>
      <div v-if="dayStateFlg" class="d-flex flex-column align-items-center toggle_layout">
        <span>
          開店 - 11:30 (AM)
        </span>
        <span>
          閉店 - 22:00 (PM)
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dayStateMsg: '本日も営業しています',
      dayStateFlg: true
    }
  },
  created() { 
    const date = new Date()
    if(date.getDay() == 0 || date.getDay() == 1) {
      this.dayStateMsg = '本日お休みです。'
      this.dayStateFlg = false
    }else{
      this.dayStateMsg = '本日も営業しています'
      this.dayStateFlg = true
    }
  }
}
</script>

<style scoped>
.full_image {
  padding-top: 3rem;

  background-color: #341d11;
  min-height: 400px;
  height: calc(100vh - 99px);
  width: 100%;

  background-image: url(../assets/img/RMR_Menu_Cover_Design.png);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
}

.center_layout {
  width: fit-content;
  margin: 0 auto;
  color: #e9a036;
  font-weight: bolder;

  /* left: 50%; */
  /* top: 5%; */
  /* transform: translateX(-50%); */

  border: 2px solid #341d11;
  /* border-radius: 2.5rem; */
  border-radius: .5rem;

  background-color: rgba(231, 204, 176, 0.75);
  box-shadow: .25rem .25rem .25rem #c81f11;

  text-shadow: 2px 2px 2px #902804, 0 0 .5rem #631b03, 0 0 1rem #631b03;
}

.toggle_layout {
  border-top: 2px solid #341d11;
}

.fs_custom {
  font-size: 1rem;
}

@media (min-width: 768px) {
  .fs_custom {
    font-size: 1.25rem;
  }
}
</style>