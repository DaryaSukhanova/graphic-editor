import Tool from "./Tool";

export default class Circle extends Tool{
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen(){
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseUpHandler(e){
        this.mouseDown = false
    }
    mouseDownHandler(e){
        this.mouseDown = true
        this.ctx.beginPath() //говорит о том что мы начали рисовать новую линию
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(e){
        if(this.mouseDown){
            let startX = e.pageX - e.target.offsetLeft
            let startY = e.pageY - e.target.offsetTop
            let width = startX - this.startX
            let height = startY - this.startY
            this.r = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
            this.draw(this.startX, this.startY, this.r)
        }
    }

    draw(x, y, r){
        const img =  new Image()
        img.src = this.saved
        img.onload = ()=>{
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, 0, 2*Math.PI)
            // this.ctx.fill()
            this.ctx.stroke()
        }

    }
}