<template>
  <div>
    <span uk-icon="code" style="cursor: pointer" @click="open = !open"></span>
    <div v-if="open">
      <textarea v-model="code" style="width: 100%" rows="10"></textarea>
    </div>
    <span v-if="open" uk-icon="upload" style="cursor: pointer" @click="uploadCode()"></span>
    <div v-if="open">
      <textarea v-model="parseCode" style="width: 100%" rows="10" placeholder="Parse code"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "Save",
  data(){
    return {
      open: false,
      parseCode: null,
    }
  },
  computed: {
    ...mapGetters(['getCode']),
    code(){
      return JSON.stringify(this.getCode);
    }
  },
  methods: {
    uploadCode(){
      this.$store.dispatch('uploadCode',this.parseCode);
    }
  }
}
</script>

<style scoped>

</style>
