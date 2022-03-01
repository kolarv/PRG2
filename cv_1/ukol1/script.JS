function zmen(){
    let km = document.getElementById("vst1").value;
    let dojezd = document.getElementById("vst2").value;
    let cena = document.getElementById("vst3").value;
    if(isNaN(km)){
        km=0;
    }
    if(isNaN(dojezd)){
        dojezd=0;
    }
    if(isNaN(cena)){
        cena=0;
    }

    let spotreba = km*(dojezd/100);
    document.getElementById("pocet").innerHTML = "spotřebováno litrů: "+spotreba;

    let kolik = spotreba*cena;
    document.getElementById("cena").innerHTML = "cena cesty: "+kolik+"kč";
}