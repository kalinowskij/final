<template>
  <form @submit.prevent="submit">
    <div class="uk-padding-small">
      <h4 class="uk-heading-bullet">Добавление новой точки</h4>
<!--      <input type="text" class="uk-input uk-form-small" placeholder="Идентификатор картинки" v-model="imageId">-->
      <select class="uk-select uk-form-small" v-model="imageId">
        <option v-for="image of images" :key="image.id" :value="image.id">{{image.name}}</option>
      </select>
      <input type="text" class="uk-input uk-form-small" placeholder="X" v-model="x">
      <input type="text" class="uk-input uk-form-small" placeholder="Y" v-model="y">
      <button class="uk-button uk-button-default uk-button-small">Добавить</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "CreatePoint",
  props: ['event'],
  data() {
    return {
      imageId: null,
      x: null,
      y: null
    }
  },
  methods: {
    ...mapMutations(['createPoint']),
    submit() {
      this.createPoint({
        imageId: this.imageId,
        x: this.x,
        y: this.y,
        id: Date.now(),
        event: this.event
      });
      this.x = null;
      this.y = null;
      this.$emit('createPoint')
    }
  },
  computed: {
    images() {
      return this.$store.getters.getImages;
    }
  }
}
</script>

<style scoped>

</style>
