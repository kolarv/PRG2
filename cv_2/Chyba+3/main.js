function vypocet()
{
    let vzdalenost, prumer, spotreba, cenap,cena;

  vzdalenost =  document.getElementById("vzdalenost").value;
   spotreba = document.getElementById("spotreba").value;
    cenap = document.getElementById("palivo").value;

    cenap = Number(cenap);
    //cena = Number(cena);
    spotreba = Number(spotreba);
    vzdalenost=Number(vzdalenost);
   prumer = Number((vzdalenost * cenap)/100);
    document.getElementById("spotrebaa").innerHTML = prumer;
   console.log(prumer)


}