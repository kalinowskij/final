<template>
  <NavigateMan v-for="man of people" :key="man.key" v-bind:man="man"></NavigateMan>
</template>

<script>
import NavigateMan from "@/components/home/navigate/NavigateMan";
export default {
  name: "NavigatePeople",
  components: {NavigateMan},
  props: ['period'],
  data() {
    return {
      people: this.period.people
    }
  }
}
</script>

<style scoped>

</style>
