<template>
  <div class="link-admin"><router-link to="/"><span uk-icon="home"></span></router-link></div>
  <div class="link-admin"><span @click="saveToServer" uk-icon="database"></span></div>
  <div class="uk-padding-large">
    <Periods></Periods>
    <Save></Save>
  </div>
</template>

<script>
import Periods from "@/components/period/Periods";
import Save from "@/components/save/Save";
import {mapGetters, mapActions} from "vuex";

export default {
  data(){
    return {
      openCreatePeriod: false,
    }
  },
  name: "Admin",
  components: {Save, Periods},
  computed: {
    ...mapGetters(['getCode']),
    code(){
      return this.getCode;
    }
  },
  methods: {
    ...mapActions(['saveToServer']),
  },
  watch: {
    // code(){
    //   this.$store.dispatch('saveToServer');
    // }
  },
  mounted() {
    this.$store.dispatch('getFromServer')
  }
}
</script>

<style scoped>
</style>
