<template>
  <div>
    {{ name }}
    <span uk-icon="trash" class="uk-margin-small-left" @click="remove()" style="cursor: pointer"></span>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Point",
  props: ['point'],
  data() {
    return {
      id: this.point.id,
      x: this.point.x,
      y: this.point.y,
    }
  },
  methods: {
    ...mapActions(['removePoint']),
    remove() {
      this.$store.dispatch('removePoint', this.point);
    },
  },
  computed: {
    ...mapGetters(['getImages']),
    name() {
      return this.getImages.filter(image => Number(image.id) === Number(this.point.imageId))[0].name + ' (x:' + this.point.x + ',y:' + this.point.y + ')'
    },
  }
}
</script>

<style scoped>

</style>
