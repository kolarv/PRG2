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
    }
    add(obrazek){
        this.obrazky.push(obrazek);
    }
    next(){
        this.index=(this.index+1)%this.obrazky.length;
    }
    prev(){
        if(this.index==0){this.index = this.obrazky.length-1}
        else{this.index--;}
    }
    vykresli(){
        obraz.src = this.obrazky[this.index].url;
        document.getElementById("desc").innerHTML = this.obrazky[this.index].text;
    }
}

const galerka = new galerie();
const obraz = document.getElementById("amongus");
var sec = 0;


function levo(){
    galerka.prev();
    galerka.vykresli();
    sec = 0;
}
function pravo(){
    galerka.next();
    galerka.vykresli();
    sec = 0;
}
function pridej(){
    let desc = document.getElementById("urlText").value;
    let url = document.getElementById("linkText").value;
    let obr = new obrazek(desc,url);
    galerka.add(obr);
    clear();
}
function clear(){
    document.getElementById("urlText").value = "";
    document.getElementById("linkText").value = "";
}

setInterval(function(){
    if(document.getElementById("check").checked){
        if(sec == 1000){
            pravo();
            sec = 0;
        }
        else{
            sec++;
            document.getElementById("test").innerHTML = sec;
        }
    }
},1);