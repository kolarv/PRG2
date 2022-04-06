class Hra{
    #zachytavac = null;
    #znak = "";
    #brzy = true;
    #zpozdovac = null;
    #casStart = null;
    #casReakce = null;
    constructor(){}

    #nahodnyCas(min=500,max=5000){
        return Math.random()*(max-min)+min;
    }

    #nahodnyZnak(){
        let rand = Math.random()*26+65;
        return String.fromCharCode(rand);
    }

    stiskKl(e){
        window.removeEventListener("keypress",this.#zachytavac);
        let klavesa = e.key.toUpperCase();
        this.#casReakce = new Date()-this.#casStart;
        if(this.#brzy){
            this.#reakceBrzy();
        }
        else if(klavesa == this.#znak){
            this.#reakceOK();
        }
        else{
            this.#reakceChyba(klavesa);
        }
    }

    startKola(){
        this.#zpozdovac = null;
        this.stop();
        this.#znak=this.#nahodnyZnak();
        this.#brzy = true;
        this.#zpozdovac = setTimeout(() => {
            this.#brzy = false;
            this.vypisZnak(this.#znak);
            this.vypisVysledek("stiskni klavesu "+this.#znak);
            this.#casStart = new Date();
        }, this.#nahodnyCas());
        this.#zachytavac = this.stiskKl.bind(this);
        window.addEventListener("keypress",this.#zachytavac)
    }

    vypisZnak(znak=""){
        document.getElementById("pismeno").innerHTML=znak;
    }
    vypisVysledek(znak=""){
        document.getElementById("vysledek").innerHTML=znak;
    }

    #reakceBrzy(){
        this.vypisVysledek("stisk jsi klávesu moc brzo");
        setTimeout(() => {
            this.startKola();
        },4000);
    }
    #reakceOK(){
        this.vypisVysledek("stisk jsi klávesu, yay, tvá reakce byla "+this.#casReakce+"ms");
        setTimeout(() => {
            this.startKola();
        },4000);
    }
    #reakceChyba(znak){
        this.vypisVysledek("špatná klávesa, měls stisknout "+this.#znak+" ,ale stiskls "+znak);
        setTimeout(() => {
            this.startKola();
        },4000);
    }
    stop(){
        window.removeEventListener("keypress",this.#zachytavac);
        clearInterval(this.#zpozdovac);
        this.vypisZnak("");
        this.vypisVysledek("připrav se");
        this.#casReakce=null;
    }
}
window.onload=function(){
    hra1 = new Hra();
    hra1.startKola();
}