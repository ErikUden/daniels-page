$(document).ready(yes)
var bilder = ["Esel.PNG", "Fisch.PNG","Hase.png","Hund.PNG","Katze.PNG","Kuh.PNG","Schwein.PNG","Vogel.PNG","Esel.PNG", "Fisch.PNG","Hase.png","Hund.PNG","Katze.PNG","Kuh.PNG","Schwein.PNG","Vogel.PNG"]
var zaehler = 0;
var test;
var t;
var s;
var versuche=0;
function yes()
{
    shuffle(bilder);
    container();
    $(".bild").hide(0);
    $(".karten").click(open);
}

function shuffle(bilder)
{
    bilder.sort(() => Math.random() - 0.5);
}

function container()
{
    document.writeln('<link rel="stylesheet" type="text/css" href="Memory.css"/>')
    document.writeln('<div id="grid">')
    for(var x = 0; x<16;x++)
    {
        document.writeln('<div class="karten", id="'+x+'"><img class="bild" id="bild'+ x +'" src="'+bilder[x]+'"></img></div>');
    }
    document.writeln("</div>")
}
function open()
{
    var i = $(this).attr("id");
    $('#bild'+i+'').fadeIn(500);
    if(zaehler==0)
    {
        test = i;
        t = $('#bild'+i+'').attr("src");
        //alert(zaehler);
        zaehler ++;
    }
    else
    {
        versuche ++;
        document.title="Versuch: "+versuche+"";
        var test2 = i;
        s = $('#bild'+i+'').attr("src");
        //alert(zaehler);
        zaehler = 0;
        //alert(zaehler);
        if(t==s)
        {
            //alert("richtig");
            $('#'+test+'').addClass("zug");
            $('#'+test2+'').addClass("zug");
            $('#bild'+test+'').hide(0);
            $('#bild'+test2+'').hide(0);
        }
        else
        {
            $('#bild'+test+'').hide(0);
            $('#bild'+test2+'').hide(0);
        } 
    }
    
}

