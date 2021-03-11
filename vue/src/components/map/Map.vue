<template>
  <div>
    <canvas id="myCanvas" :width="width" :height="height" @mousemove="showCoordinates" />
    <br><span>( {{x}} : {{y}})</span>
  </div>

</template>

<script>
import map from "../../assets/map.png";
import {mapGetters} from "vuex";
export default {
  name: "Map",
  props: ['points'],
  data(){
    return {
      ctx: null,
        x: 0,
        y: 0,
        mapImage: null,
        explosionImage: null,
        tankImage: null,
        tank2Image: null,
    }
  },
  computed: {
    ...mapGetters(['getImages']),
    width(){
      return window.screen.width - 400;
    },
    height(){
      return document.documentElement.scrollHeight
    },
    getAllImages() {
      return this.getImages;
    }
  },
  mounted() {
    var c = document.getElementById("myCanvas");
    this.ctx = c.getContext('2d');
    this.mapImage = new Image();
    this.mapImage.src = map;
    this.mapImage.onload = () => {
     this.ctx.drawImage(this.mapImage, 40, 0);
    }
    this.explosionImage = new Image();
    this.explosionImage.src = require('@/assets/explosion.png');
    this.tankImage = new Image();
    this.tankImage.src = require('@/assets/tank.png');
    this.tank2Image = new Image();
    this.tank2Image.src = require('@/assets/tank2.png');
    setInterval(() => {
      this.draw();
    }, 100);

  },
  methods: {
    showCoordinates(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    draw(){
      this.drawPoints();
    },
    drawPoints(){
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.mapImage, 40, 0);
      let cmp = this;
      this.points.forEach(point => {
        let src = this.getAllImages.filter(image => Number(image.id) === Number(point.imageId))[0].src;
        let x = point.x;
        let y = point.y;
        let img = new Image();
        img.src = require('@/assets/' + src);
        cmp.ctx.drawImage(img, x, y);

      })
    }
  }
}
</script>

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
</style>
