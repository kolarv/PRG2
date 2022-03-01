function zmen(){
    let kmM = document.getElementById("vstM1").value;
    let dojezdM = document.getElementById("vstM2").value;
    let cena = document.getElementById("vstM3").value;

    let kmD = document.getElementById("vstD1").value;
    let dojezdD = document.getElementById("vstD2").value;

    let kmO = document.getElementById("vstO1").value;
    let dojezdO = document.getElementById("vstO2").value;

    if(isNaN(kmM)){
        kmM=0;
    }
    if(isNaN(dojezdM)){
        dojezdM=0;
    }
    if(isNaN(kmD)){
        kmD=0;
    }
    if(isNaN(dojezdD)){
        dojezdD=0;
    }
    if(isNaN(kmO)){
        kmO=0;
    }
    if(isNaN(dojezdO)){
        dojezdO=0;
    }
    if(isNaN(cena)){
        cena=0;
    }

    /*let spotrebaM = kmM*(dojezdM/100);
    let spotrebaD = kmD*(dojezdD/100);
    let spotrebaO = kmO*(dojezdO/100);*/


    let cenaM = kmM*(dojezdM/100)*cena;
    let cenaD = kmD*(dojezdD/100)*cena;
    let cenaO = kmO*(dojezdO/100)*cena;
    let cenaCelk=cenaM+cenaD+cenaO;

    document.getElementById("cena").innerHTML = cenaCelk+"kč";
    document.getElementById("prum").innerHTML = (cenaCelk/3)+"kč";

/*
    let kolik = spotreba*cena;
    document.getElementById("cena").innerHTML = "cena cesty: "+kolik+"kč";*/
}