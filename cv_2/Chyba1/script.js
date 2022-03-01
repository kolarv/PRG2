function prevzit()
{
    let arr=[],text,projet;
    projet = 0;
    text=document.getElementById("text").innerHTML;
    for(let i=0;i<text.length;i-=-1)
    {
        let pomoc=text[i];
        projet++;
        arr[i]=pomoc;
    }
    vypsat(arr,projet)
}

function vypsat(pole, pruchodu)
{
    document.getElementById("vystup").innerHTML=pole.join("*")+pruchodu;
}
