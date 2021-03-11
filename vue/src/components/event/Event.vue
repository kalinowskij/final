<template>
  <h5 class="uk-link">
    <span @click="open = !open">{{name}}</span>
    <span uk-icon="pencil" class="uk-margin-small-left" @click="openEdit = !openEdit" style="cursor: pointer"></span>
    <span uk-icon="trash" class="uk-margin-small-left" @click="remove()" style="cursor: pointer"></span>
  </h5>
  <div v-if="openEdit">
    <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
    <textarea class="uk-input uk-form-small" placeholder="Описание" v-model="description"></textarea>
  </div>
  <div class="uk-padding-small">
    <span>Список точек:</span>
    <ul class="uk-list uk-list-collapse uk-list-divider">
      <li v-for="point of getPoints" :key="point.id">
        <Point v-bind:point="point"></Point>
      </li>
      <li class="uk-link">
        <span uk-icon="plus"  @click="openCreatePoint = true" style="cursor: pointer"></span>
      </li>
      <li v-if="openCreatePoint">
        <CreatePoint  v-bind:event="event" v-on:create-point="openCreatePoint = false;"></CreatePoint>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Point from "@/components/point/Point";
import CreatePoint from "@/components/point/CreatePoint";

export default {
  name: "Event",
  components: {CreatePoint, Point},
  props: ['event'],
  data: function () {
    return {
      name: this.event.name,
      openEdit: false,
      description: this.event.description,
      open: false,
      openCreatePoint: false,
    }
  },
  computed: {
    getPoints(){
      return !this.event.points ? [] : this.event.points;
    }
  },
  methods: {
    ...mapActions(['removeEvent']),
    remove(){
      this.$store.dispatch('removeEvent',this.event);
    }
  },
  watch: {
    name(){
      this.$store.dispatch('saveToServer');
    }
  }
}
</script>

<style scoped>

</style>
