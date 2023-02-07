$(document).ready(start)
var wort;
var sternewort="";
var versuche=10;
var gefunden=0;
var woerter = ["zyklop", "katzenbaby", "xylophon", "kabel", "dreisatz", "affe", "start"]
function start()
{
    $(".bs").click(buchstabenpruefen);
    anfang()
}
function anfang()
{
    $("#bild").attr("src", "0.png");
    wortgenerieren();
    sternewort=""
    versuche=10;
    gefunden=0;
    for (var i=0; i<wort.length;i++)
    {
        sternewort+="*"
    }
    $("#Wort").val(sternewort);

    $("#Versuche").val(versuche);
    $(".bs").removeAttr("disabled")
}
function wortgenerieren()
{
    var anzahl=woerter.length;
    var zufall=Math.round(Math.random() * anzahl);
    wort=woerter[zufall];
}
function buchstabenpruefen()
{
    $(this).attr("disabled", "true")
    var buchstabe=$(this).val();
    var flag=1;
    for (var i=0; i<wort.length; i++)
    {
        if (buchstabe==wort[i])
        {
            sternewort = sternewort.replaceAt(i, buchstabe);
            flag=0;
            gefunden++;
        }
    }
    if (flag==1)
    {
        var bildname=11-versuche
        bildname+=".png"
        versuche--;
        $("#Versuche").val(versuche);
        $("#bild").attr("src", bildname);
    }
    if (gefunden==wort.length)
    {
        alert("Gewonnen! Das gesuchte Wort war "+wort)
        anfang()
    }
    if (versuche<1)
    {
        alert("Verloren")
        anfang()
    }
    $("#Wort").val(sternewort);
}


String.prototype.replaceAt = function(index, replacement)  
{ 
    return this.substr(0, index) + replacement + this.substr(index + replacement.length); 
} 