const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const oknoWidth = window.innerWidth;
const oknoHeight = window.innerHeight;

const tvary = [];

class Tvar{
    constructor(x,y,spx,spy,color,size,vykresli=true){ //speed x, speed y
        this.x = x;
        this.y = y;
        this.spx = spx;
        this.spy = spy;
        this.color = color;
        this.size = size;
        this.vykresli = vykresli;
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

    kolize(){
        for(const tvar of tvary){
            const xVZD = this.x-tvar.x;
            const yVZD = this.y-tvar.y;
            const delka = Math.sqrt(xVZD*xVZD+yVZD*yVZD);
            const celkSize = Number(this.size+tvar.size);
            if(delka<celkSize && tvar != this && tvar != evil){
                tvar.color = randomBarva();

            }
        }
    }
}

class Koule extends Tvar{
    constructor(x,y,spx,spy,color,size){
       super(x,y,spx,spy,color,size)
    }
    
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.fill();
    }
}

class Ctverec extends Tvar{
    constructor(x,y,spx,spy,color,size){
        super(x,y,spx,spy,color,size)
     }

     draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x-this.size,this.y-this.size,this.size*2,this.size*2);

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.stroke();
    }
}

class Trojuhelnik extends Tvar{
    constructor(x,y,spx,spy,color,size){
        super(x,y,spx,spy,color,size)
     }

     draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x-(this.size*2),this.y+(this.size));
        ctx.lineTo(this.x+(this.size*2),this.y+(this.size))
        ctx.lineTo(this.x,this.y-(this.size*2));
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.stroke();
     }
}

class EvilCircle extends Tvar{
    constructor(){
        super(oknoWidth/2,oknoHeight/2,0,0,"white",10);
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.fill();
    }

    kolize(){
        for(const tvar of tvary){
            const xVZD = this.x-tvar.x;
            const yVZD = this.y-tvar.y;
            const delka = Math.sqrt(xVZD*xVZD+yVZD*yVZD);
            const celkSize = Number(this.size+tvar.size);
            if(delka<celkSize && tvar != this){
                tvar.vykresli = false;
            }
        }
    }
    movHore(){
        if(!(this.y-10<0)){
            this.y=this.y-10;
        }
    }
    movDole(){
        if(!(this.y+10<0)){
            this.y=this.y+10;
        }
    }
    movLevo(){
        if(!(this.x-10<0)){
            this.x=this.x-10;
        }
    }
    movPravo(){
        if(!(this.x+10<0)){
            this.x=this.x+10;
        }
    }
}

const evil = new EvilCircle();
window.addEventListener("keydown",function(e){
    //this.alert(e.key);
    switch(e.key){
        case "w":
        evil.movHore();
        break;
        case "s":
        evil.movDole();
        break;
        case "d":
        evil.movPravo();
        break;
        case "a":
        evil.movLevo();
        break;
    }
})
while(tvary.length<25){
    const size = random(10,50);
    const barva = randomBarva();
        const novKoule = new Koule(random(0+size,oknoWidth-size),random(0+size,oknoHeight-size),random(-7,7),random(-7,7),barva,size);
        tvary.push(novKoule);
        const novKostka = new Ctverec(random(0+size,oknoWidth-size),random(0+size,oknoHeight-size),random(-7,7),random(-7,7),barva,size);
        tvary.push(novKostka);

        const novTroj = new Trojuhelnik(random(0+size,oknoWidth-size),random(0+size,oknoHeight-size),random(-7,7),random(-7,7),barva,size);
        tvary.push(novTroj);
    
   
}
tvary.push(evil);

function loop(){
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,oknoWidth,oknoHeight);

    for(const tvar of tvary){
        if(tvar.vykresli){
        tvar.draw();
        tvar.update();
        tvar.kolize();}
    }
    requestAnimationFrame(loop);
}

function random(min,max){
    const numb = Math.floor(Math.random()*(max-min+1))+min;
    return numb;
}
function randomBarva(){
    return "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
}

loop();
