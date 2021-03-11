<template>
  <span>Список периодов:</span>
  <ul class="uk-list uk-list-collapse uk-list-divider">
    <li v-for="period of getPeriods" :key="period.id">
      <Period v-bind:period="period"></Period>
    </li>
    <li v-if="!openCreatePeriod" @click="openCreatePeriod = true">
      <span uk-icon="plus" style="cursor: pointer"></span>
    </li>
    <li v-if="openCreatePeriod">
      <CreatePeriod v-on:create-period="openCreatePeriod = false;"></CreatePeriod>
    </li>
  </ul>
</template>
<script>
import CreatePeriod from "@/components/period/CreatePeriod";
import Period from "@/components/period/Period";

export default {
  name: "Periods",
  data() {
    return {
      openCreatePeriod: false,
    }
  },
  computed: {
    getPeriods(){
      return this.$store.getters.getPeriods;
    }
  },
  components: {Period, CreatePeriod}
}
</script>

<style scoped>

</style>
