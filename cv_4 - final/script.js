class obrazek{
    constructor(text,url){
        this.text = text;
        this.url = url;
    }
}
class galerie{
    constructor(){
        this.obrazky = [
        new obrazek("1","images/1.jpg"),
        new obrazek("2","images/2.jpg"),
        new obrazek("3","images/3.jpg"),
        new obrazek("4","images/4.jpg"),
        new obrazek("5","images/5.jpg"),
        new obrazek("6","images/6.jpg"),
        new obrazek("7","images/7.jpg"),
        new obrazek("8","images/8.jpg"),];
        this.index = 0;
        window.addEventListener("keypress",(e) => {
            switch(e.key){
                case "a":
                    this.prev();
                    break;
                case "d":
                    this.next();
                    break;
            }
        })
        this.interval();
    }
    sec;
    add(obrazek){
        this.obrazky.push(obrazek);
    }
    next(){
        this.index=(this.index+1)%this.obrazky.length;
        this.vykresli();
    }
    prev(){
        if(this.index==0){this.index = this.obrazky.length-1}
        else{this.index--;}
        this.vykresli();
    }
    vykresli(){
        document.getElementById("amongus").src = this.obrazky[this.index].url;
        document.getElementById("desc").innerHTML = this.obrazky[this.index].text;
        this.interval();
    }
    pridej(){
        let desc = document.getElementById("urlText").value;
        let url = document.getElementById("linkText").value;
        let obr = new obrazek(desc,url);
        this.add(obr);
        this.clear();
    }
    clear(){
        document.getElementById("urlText").value = "";
        document.getElementById("linkText").value = "";
    }

    interval(){
        clearInterval(this.sec);
        this.sec = setInterval(()=>{this.next();},1000);
    }
}

var galerka;
window.onload=function(){
    galerka = new galerie();
}


function mongus(event){
    if(event.clientX<1000){
        galerka.prev();
    }
    else{
        galerka.next();
    }
}/*
setInterval(function(){
    if(document.getElementById("check").checked){
        if(sec == 100){
            galerka.next();
            sec = 0;
        }
        else{
            sec++;
            document.getElementById("test").innerHTML = sec;
        }
    }
},1);*/