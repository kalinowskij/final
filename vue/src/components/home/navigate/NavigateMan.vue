<template>
  <div class="man">
    <div class="name">{{name}}</div>
    <NavigateEvents v-bind:man="man"></NavigateEvents>
  </div>

</template>

<script>
import NavigateEvents from "@/components/home/navigate/NavigateEvents";
export default {
  name: "NavigateMan",
  components: {NavigateEvents},
  props: ['man'],
  data(){
    return {
      name: this.man.name,
      events: this.man.events,
    }
  }
}
</script>

<style scoped>
.man{
}
.name{
  z-index: 90;
  font-size: 1.2em;
  position: sticky;
  top: 88px;
  background: #8ba3d4;
  padding: 5px;
  margin-top: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
