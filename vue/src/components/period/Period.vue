<template>
  <h3 class="uk-link">
    <span @click="open = !open">{{name}}</span>
    <span v-if="open" uk-icon="pencil" class="uk-margin-small-left" @click="openEdit = !openEdit" style="cursor: pointer"></span>
    <span v-if="open" uk-icon="trash" class="uk-margin-small-left" @click="remove()" style="cursor: pointer"></span>
  </h3>
  <div v-if="open">
    <div v-if="openEdit">
      <input type="text" class="uk-input uk-form-small" placeholder="Название" v-model="name">
      <textarea class="uk-input uk-form-small" placeholder="Описание" v-model="description"></textarea>
    </div>

    <div class="uk-padding-small">
      <span>Список личностей:</span>
      <ul class="uk-list uk-list-collapse uk-list-divider">
        <li v-for="man of getPeople" :key="man.id">
         <Man v-bind:man="man"></Man>
        </li>
        <li class="uk-link" v-if="!openCreateMan">
          <span uk-icon="plus"  @click="openCreateMan = true" style="cursor: pointer"></span>
        </li>
        <li v-if="openCreateMan">
          <CreateMan  v-bind:period="period" v-on:create-man="openCreateMan = false;"></CreateMan>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateMan from "@/components/man/CreateMan";
import Man from "@/components/man/Man";
import {mapActions} from "vuex";

export default {
  name: "Period",
  components: {Man, CreateMan},
  props: ['period'],
  data: function () {
    return {
      name: this.period.name,
      description: this.period.description,
      open: false,
      openEdit: false,
      openCreateMan: false,
    }
  },
  computed: {
    getPeople(){
      return this.period.people;
    }
  },
  methods: {
    ...mapActions(['removePeriod']),
    remove(){
      this.$store.dispatch('removePeriod',this.period);
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
