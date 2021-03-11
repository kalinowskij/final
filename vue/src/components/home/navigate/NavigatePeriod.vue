<template>
  <div class="period">
    <div class="period-name">{{name}}</div>
    <NavigatePeople v-bind:period="period"></NavigatePeople>
  </div>
</template>

<script>
import NavigatePeople from "@/components/home/navigate/NavigatePeople";
export default {
  name: "NavigatePeriod",
  components: {NavigatePeople},
  props: ['period'],
  data(){
    return {
      name: this.period.name
    }
  }
}
</script>

<style scoped>
  .period{
    padding: 5px;
  }
  .period-name {
    font-size: 1.4em;
    position: sticky;
    z-index: 100;
    top: 4px;
    background: #828dd2;
    padding: 5px;
    align-content: center;
    height: 70px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
</style>
