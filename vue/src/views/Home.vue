<template>
  <div class="main">
    <div class="periods" id="periods">
      <div class="link-admin"><router-link to="/admin"><span uk-icon="cog"></span></router-link></div>
      <div class="link-admin"><span uk-icon="info" @click="test()"></span></div>
      <NavigatePeriods></NavigatePeriods>
    </div>
    <div>
      <Map v-bind:points="getDrawPoints"></Map>
    </div>
  </div>
</template>

<script>
import App from '../App.vue'
import NavigatePeriods from "@/components/home/navigate/NavigatePeriods";
import Map from "@/components/map/Map";
export default {
  name: "Home",
  components: {Map, NavigatePeriods},
  data: function (){
    return {
      count: App.data(),
      points: {},
      drawPoints: []
    }
  },
  mounted() {
    // const code = window.localStorage.getItem('code');
    // if(code){
    //   this.$store.dispatch('uploadCode', JSON.parse(code));
    // }
    // console.log(123)
    this.$store.dispatch('getFromServer')

    const periodsElement = document.getElementById('periods');
    periodsElement.addEventListener('scroll', this.handleScroll);
    this.points = this.getPoints;
  },
  computed: {
    activeFrom(){
      return (window.screen.height / 2) - 400;
    },
    activeTo(){
      return (window.screen.height / 2) - 200;
    },
    getPoints(){
      return this.$store.getters.getPoints;
    },
    getDrawPoints(){
      return this.drawPoints;
    }
  },
  methods: {
    handleScroll (event) {
      this.drawPoints = [];
      let y = event.target.scrollTop;
      let elements = document.getElementsByClassName('event');
      // Пределы по которым элемент считается активным
      elements.forEach((item) => {
        // console.log(item.scrollTop );
        let top = y - item.offsetTop + (window.screen.height / 2);
        if(top > this.activeFrom && top < this.activeTo){
          this.activePoint(item);
        }else{
          this.noActivePoint(item);
        }
      })
    },
    activePoint(item){
      item.classList.add('active-event');
      if(this.points){
        for(let key in this.points){
          if(item.id === key){
            this.points[key].forEach(point => {
              this.drawPoints.push(point);
            })
          }
        }
      }
    },
    noActivePoint(item){
      item.classList.remove('active-event');
    },
    test(){

    }
  }
}
</script>

<style scoped>
  .main{
    background-color: #214488;
    display: grid;
    grid-template-columns: 400px auto;
    grid-template-rows: 100%;
    height: 100vh;
  }
  .periods{
    overflow: auto;
  }
  .periods::-webkit-scrollbar {
    display: none;
  }
  .link-admin{
    padding: 10px;
  }
</style>
