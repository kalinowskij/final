<template>
  <form @submit.prevent="submit">
    <div class="uk-padding-small">
      <h4 class="uk-heading-bullet">Добавление новой личности</h4>
      <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
      <input type="text" class="uk-input uk-form-small" placeholder="Описание" v-model="description">
      <button class="uk-button uk-button-default uk-button-small">Добавить</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "CreateMan",
  props: ['period'],
  data() {
    return {
      name: null,
      description: null
    }
  },
  methods: {
    ...mapMutations(['createMan']),
    submit() {
      this.createMan({
        name: this.name,
        description: this.description,
        id: Date.now(),
        period: this.period
      });
      this.name = null;
      this.description = null;
      this.$emit('createMan')
    }
  }
}
</script>

<style scoped>

</style>
