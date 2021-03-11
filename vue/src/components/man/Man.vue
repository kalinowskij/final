<template>
  <h4 class="uk-link">
    <span @click="open = !open">{{name}}</span>
    <span v-if="open" uk-icon="pencil" class="uk-margin-small-left" @click="openEdit = !openEdit" style="cursor: pointer"></span>
    <span v-if="open" uk-icon="trash" class="uk-margin-small-left" @click="remove()" style="cursor: pointer"></span>
  </h4>
  <div v-if="open">
    <div v-if="openEdit">
      <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
      <textarea class="uk-input uk-form-small" placeholder="Описание" v-model="description"></textarea>
    </div>
    <div class="uk-padding-small">
      <span>Список событий:</span>
      <ul class="uk-list uk-list-collapse uk-list-divider">
        <li v-for="event of getEvents" :key="event.id">
          <Event v-bind:event="event"></Event>
        </li>
        <li class="uk-link" v-if="!openCreateEvent" @click="openCreateEvent = true">
          <span uk-icon="plus"  @click="openCreateEvent = true" style="cursor: pointer"></span>
        </li>
        <li v-if="openCreateEvent">
          <CreateEvent  v-bind:man="man" v-on:create-event="openCreateEvent = false;"></CreateEvent>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateEvent from "@/components/event/CreateEvent";
import Event from "@/components/event/Event";
import {mapActions} from "vuex";

export default {
  name: "Man",
  components: {Event, CreateEvent},
  props: ['man'],
  data: function () {
    return {
      name: this.man.name,
      openEdit: false,
      description: this.man.description,
      open: false,
      openCreateEvent: false,
    }
  },
  computed: {
    getEvents(){
      return this.man.events;
    }
  },
  methods: {
    ...mapActions(['removeMan']),
    remove(){
      this.$store.dispatch('removeMan',this.man);
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
