<template>
  <NavigatePeriod
      v-for="period of periods"
      :key="period.id"
      v-bind:period="period"
  ></NavigatePeriod>
  <div class="event" style="min-height: 1000px">
    <div></div>
  </div>
</template>

<script>
import NavigatePeriod from "@/components/home/navigate/NavigatePeriod";
export default {
  name: "NavigatePeriods",
  components: {NavigatePeriod},
  computed: {
    periods() {
      return this.$store.getters.getPeriods;
    }
  }
}
</script>

<style scoped>

</style>
