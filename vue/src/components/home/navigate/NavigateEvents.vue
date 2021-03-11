<template>
  <NavigateEvent v-for="event of events" :key="event.id" v-bind:event="event"></NavigateEvent>
</template>

<script>
import NavigateEvent from "@/components/home/navigate/NavigateEvent";

export default {
  name: "NavigateEvents",
  components: {NavigateEvent},
  props: ['man'],
  data() {
    return {
      events: this.man.events,
    }
  }
}
</script>

<style scoped>

</style>
