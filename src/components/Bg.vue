<template>
  <div class="starry-sky">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  export default {
    props: {
      point: {
        type: Number,
        default: 25 
      },
      lineColor: {
        type: String,
        default: 'rgba(45,140,210,0.2)'
      },
      roundColor: {
        type: String,
        default: 'rgba(45,140,210,0.2)'
      },
    },
    data() {
      return {
        docWidth: 0,
        docHeight: 0,
        context: null,
        circleArr: [],
        timer: null,
      }
    },
    mounted() {
      const canvasDom = this.$refs.canvas
      this.docWidth = canvasDom.offsetWidth
      this.docHeight = canvasDom.offsetHeight
      canvasDom.width = canvasDom.offsetWidth
      canvasDom.height = canvasDom.offsetHeight
      this.context = canvasDom.getContext('2d')
      this.context.strokeStyle = this.lineColor;
      this.context.lineWidth = 1;
      this.context.fillStyle = this.roundColor;

      this.createCircleArr()
      this.draw() 
      this.cycleDraw()
    },
    methods: {
      rangeRadom(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      },
  
      drawCircle(context, x, y, r, moveX, moveY) {
        let circle = {
          x,
          y,
          r,
          moveX,
          moveY,
        }
        context.beginPath()
        context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
        context.closePath()
        context.fill()
        return circle
      },
     
      drawLine(context, beginX, beginY, closeX, closeY, opacity) {
        context.beginPath()
        context.strokeStyle = `rgba(0, 0, 0, ${opacity})`
        context.moveTo(beginX, beginY)
        context.lineTo(closeX, closeY)
        context.closePath()
        context.stroke()
      },
    
      createCircleArr() {
        for (let i = 0; i < this.point; i++) {
          this.circleArr.push(this.drawCircle(
            this.context,
            this.rangeRadom(this.docWidth, 0),
            this.rangeRadom(this.docHeight, 0),
            this.rangeRadom(15, 2),
            this.rangeRadom(10, -10)/40,
            this.rangeRadom(10, -10)/40
          ))
        }
      },
    
      draw() {
        const circleArr = this.circleArr
        this.context.clearRect(0, 0, this.docWidth, this.docHeight)
        for (let i = 0; i < this.point; i++) {
          this.drawCircle(this.context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
        }

        for (let i = 0; i < this.point; i++) {
          for (let j = 0; j < this.point; j++) {
            if (i + j < this.point) {
              let A = Math.abs(circleArr[i + j].x - circleArr[i].x)
              let B = Math.abs(circleArr[i + j].y - circleArr[i].y)
              let lineLength = Math.sqrt(A * A + B * B)
              let C = 1 / lineLength * 7 - 0.009
              let lineOpacity = C > 0.03 ? 0.03 : C;
              if (lineOpacity > 0) {
                this.drawLine(
                  this.context,
                  circleArr[i].x,
                  circleArr[i].y,
                  circleArr[i + j].x,
                  circleArr[i + j].y,
                  lineOpacity,
                )
              }
            }
          }
        }
      },
      cycleDraw() {
        this.timer = setInterval(() => {
          for(let i = 0; i < this.point; i++) {
            let cir = this.circleArr[i]
            cir.x += cir.moveX
            cir.y += cir.moveY
            if (cir.x > this.docWidth) {
              cir.x = 0
            } else if (cir.x < 0) {
              cir.x = this.docWidth
            }
            if (cir.y > this.docHeight) {
              cir.y = 0
            } else if (cir.y < 0) {
              cir.y = this.docHeight
            }
          }
          this.draw()
        }, 10)
      },
    },
    beforeDestory() {
      clearInterval(this.timer)
    }
  }
</script>

<style>
  .starry-sky {
    width: 100%;
    height: 80%;
    z-index: -1;
    position: absolute;
  }
  canvas {
      width: 100%;
      height: 80%;
  }
  
</style>
