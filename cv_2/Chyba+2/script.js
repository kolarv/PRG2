function soucet()
{
  let clen1, clen2;
  clen1=document.getElementById("clen1").value;
  clen2=document.getElementById("clen2").value;
  if (kontrola())
    {
      
    document.getElementById("vysledek").value=Number(clen1)+Number(clen2);
    }
    else
    {

      NeniCislo(); 
    }
}

function rozdil()
{
  let clen1, clen2;
  clen1=document.getElementById("clen1").value;
  clen2=document.getElementById("clen2").value;
  if (kontrola())
    {
    document.getElementById("vysledek").value=Number(clen1)-Number(clen2);
    }
    else
    {
      //alert("Někde jste nezadali číslo");
      NeniCislo();
    }
}

function soucin()
{
  let clen1, clen2;
  clen1=document.getElementById("clen1").value;
  clen2=document.getElementById("clen2").value;
  if (kontrola)
    {
    document.getElementById("vysledek").value=Number(clen1)*Number(clen2);
    }
    else
    {
      //alert("Někde jste nezadali číslo");
      NeniCislo();
    }
}

function podil()
{
  let clen1, clen2, vysledek;
  clen1=document.getElementById("clen1").value;
  clen2=document.getElementById("clen2").value;
  if (kontrola()) 
    {
      if (clen2 != 0)
        {
        vysledek=Number(clen1)/Number(clen2);
        vysledek=vysledek.toFixed(2);
        document.getElementById("vysledek").value=vysledek; 
        }
        else
        {
          alert("Nelze dělit nulou");
        }
    }
    else
    {

      NeniCislo(); 
    }
}

function NeniCislo() 
{
  clen1=document.getElementById("clen1").value;
  clen2=document.getElementById("clen2").value;
	
  if (isNaN(clen1)==true && isNaN(clen2)==false) 
    {
      alert("První člen není číslo");
    }
  else if (isNaN(clen1)==true && isNaN(clen2)==true) 
    {
      alert("Ani jeden člen není číslo");
    }
  else
    {
      alert("Druhý člen není číslo");
    }  
}

function kontrola()
{
    clen1=document.getElementById("clen1").value;
    clen2=document.getElementById("clen2").value;
    if(!isNaN(clen1) && !isNaN(clen2))
    {
        return true;
    }
}