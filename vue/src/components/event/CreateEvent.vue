<template>
  <form @submit.prevent="submit">
    <div class="uk-padding-small">
      <h4 class="uk-heading-bullet">Добавление нового события</h4>
      <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
      <input type="text" class="uk-input uk-form-small" placeholder="Описание" v-model="description">
      <button class="uk-button uk-button-default uk-button-small">Добавить</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  ...mapMutations(['createEvent']),
  name: "CreateEvent",
  props: ['man'],
  data() {
    return {
      name: null,
      description: null
    }
  },
  methods: {
    ...mapMutations(['createEvent']),
    submit() {
      this.createEvent({
        name: this.name,
        description: this.description,
        id: Date.now(),
        man: this.man
      });
      this.name = null;
      this.description = null;
      this.$emit('createEvent')
    }
  }
}
</script>

<style scoped>

</style>
