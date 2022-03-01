function zmen(){
    let cena = cislo(document.getElementById("vstM3").value);

    let kmM = cislo(document.getElementById("vstM1").value);
    let dojezdM = cislo(document.getElementById("vstM2").value);
    
    let kmD = cislo(document.getElementById("vstD1").value);
    let dojezdD = cislo(document.getElementById("vstD2").value);

    let kmO = cislo(document.getElementById("vstO1").value);
    let dojezdO = cislo(document.getElementById("vstO2").value);

/*
    document.getElementById("cena").innerHTML = cenaCelk+"kč";
    document.getElementById("prum").innerHTML = (cenaCelk/3)+"kč";*/

    

    //celková cena a prum cena
    let cenaM = ((dojezdM*100)/kmM)*cena;
    let cenaD = ((dojezdD*100)/kmD)*cena;
    let cenaO = ((dojezdO*100)/kmO)*cena;

    let cenaCelk = cenaM+cenaD+cenaO;
    document.getElementById("cenaCelk").innerHTML = cenaCelk+" cena cesty";
    document.getElementById("prum").innerHTML = (cenaCelk/3)+" průměrná cena";

    let litrM = dojezdM*100/kmM;
    let litrD = dojezdD*100/kmD;
    let litrO = dojezdO*100/kmO;

    let litruCelk = (litrM+litrD+litrO);
    document.getElementById("cena").innerHTML = litruCelk+" spotřebováno litrů";

}

function autoVybr(){

    let test = document.getElementById("auto");
    let vybrane = test.value;
    switch (vybrane){
        case "traktor":
            document.getElementById("vstM2").value = 22;
            document.getElementById("vstD2").value = 16;
            document.getElementById("vstO2").value = 25;
            break;
            
        case "skoda":
            document.getElementById("vstM2").value = 9;
            document.getElementById("vstD2").value = 7;
            document.getElementById("vstO2").value = 12;
            break;
            
        case "BMW":
            document.getElementById("vstM2").value = 8;
            document.getElementById("vstD2").value = 4;
            document.getElementById("vstO2").value = 10;
            break;
            
        case "kolo":
            document.getElementById("vstM2").value = 0;
            document.getElementById("vstM3").value = 0;
            document.getElementById("vstD2").value = 0;
            document.getElementById("vstO2").value = 0;
            break;
    }
    zmen();
}

function cislo(numbr){
    numbr=numbr.replace(",",".");
    if(isNaN(numbr)){
        numbr = 0;
    }
    Number(numbr);
    return numbr;
}