const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const oknoWidth = window.innerWidth;
const oknoHeight = window.innerHeight;

const kulicky = [];

class Koule{
    constructor(x,y,spx,spy,color,size){ //speed x, speed y
        this.x = x;
        this.y = y;
        this.spx = spx;
        this.spy = spy;
        this.color = color;
        this.size = size;
    }
    
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.fill();
    }

    update(){
        if((this.x+this.size)>=oknoWidth){ //prava strana
            this.spx = -this.spx;
        }
        if((this.x-this.size)<=0){//levá strana
            this.spx = -this.spx;
        }
        if((this.y+this.size)>=oknoHeight){
            this.spy = -this.spy;
        }
        if((this.y-this.size)<=0){
            this.spy = -this.spy;
        }

        this.x += this.spx;
        this.y += this.spy;
    }
}
while(kulicky.length<50){
    const size = random(10,50);
    const barva = "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
    //const novKoule = new Koule(60,60,10,10,"yellow",size);
    const novKoule = new Koule(random(0+size,oknoWidth-size),random(0+size,oknoHeight-size),random(-7,7),random(-7,7),barva,size);
    kulicky.push(novKoule);
}

function loop(){
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,oknoWidth,oknoHeight);

    for(const kulicka of kulicky){
        kulicka.draw();
        kulicka.update();
    }

    requestAnimationFrame(loop);
}

function random(min,max){
    const numb = Math.floor(Math.random()*(max-min+1))+min;
    return numb;
}

loop();
