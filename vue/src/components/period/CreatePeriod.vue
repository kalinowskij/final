<template>
  <form @submit.prevent="submit">
    <div class="uk-padding-small uk-margin-left">
      <h4 class="uk-heading-bullet">Добавление нового периода</h4>
      <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
      <input type="text" class="uk-input uk-form-small" placeholder="Описание" v-model="description">
      <button class="uk-button uk-button-default uk-button-small">Добавить</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "CreatePeriod",
  data() {
    return {
      name: null,
      description: null
    }
  },
  methods: {
    ...mapMutations(['createPeriod']),
    submit(){
      this.createPeriod({
        name: this.name,
        description: this.description,
        id: Date.now()
      });
      this.name = null;
      this.description = null;
      this.$emit('createPeriod')
    }
  }
}
</script>

<style scoped>

</style>
