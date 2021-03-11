<template>
  <div class="event" :id="id">
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "NavigateEvent",
  props: ['event'],
  data() {
    return {
      name: this.event.name,
      id: this.event.id,
      element: null
    }
  }

}
</script>

<style scoped>
.event {
  z-index: 80;
  color: #866363;
  transition: color 1s;
}

.active-event {
  color: white;
  transition: color 1s;
}
</style>
