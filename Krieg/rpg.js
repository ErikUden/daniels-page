
var charakter;
var gegner = "boxer";
var zaehler = 0;
var schaden = 10;
var grad = "mittel";


function schwierigkeitsgrad(modus)
{
    document.getElementById("easy").disabled =true;
    document.getElementById("mittel").disabled =true;
    document.getElementById("hard").disabled =true;
    if(modus=="easy")
    {
        //alert("Einfach");
        schaden = 20;
        grad = modus;
        gegner="kopf"
        document.getElementById("anzeige"). innerHTML ="(Schwierigkeitsgrad: Einfach)";
    }
    if(modus=="mittel")
    {
        //alert("Normal");
        schaden = 10;
        grad = modus;
        gegner="boxer"
        document.getElementById("anzeige"). innerHTML ="(Schwierigkeitsgrad: Normal)";
    }
    if(modus=="hard")
    {
        //alert("Schwer");
        schaden = 5;
        grad = modus;
        gegner="karate"
        document.getElementById("anzeige"). innerHTML ="(Schwierigkeitsgrad: Unmöglich)";
    }
}

//Bild für den eigenen Charakter durch abgespeichern der ID festlegen
function getid(id)
{
    charakter = id;
    kampfgenerieren();
}

//Berechnung des Ergebnisses vom Kampf durch Schere Stein Papier
function angriff(auswahl)
{
    //Zufallsauswahl vom Gegner, 0=Schere, 1=Stein, 2=Papier
    var gegnerauswahl = Math.floor(Math.random() * 2.9);
    zaehler = zaehler +1;
    //Bei gleicher Auswahl passiert nichts
    if(auswahl==gegnerauswahl)
    {
        document.writeln('<div id="verschwinde" class="kampflogunentschieden">Ihr habt aneinander vorbeigeschlagen</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
    }
    //Spieler verliert, weil 0=Schere, 1=Stein
    if(auswahl == 0 && gegnerauswahl == 1)
    {
        let eigeneleben = document.getElementById("eigeneleben")
        eigeneleben.value -= 10;
        document.writeln('<div id="verschwinde" class="kampflogverloren">Dein Gegner hat dich getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(eigeneleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(verloren,1000);
        }
    }
    //Spieler verliert, weil 1=Stein, 2=Schere
    if(auswahl == 1 && gegnerauswahl == 2)
    {
        let eigeneleben = document.getElementById("eigeneleben")
        eigeneleben.value -= 10;
        document.writeln('<div id="verschwinde" class="kampflogverloren">Dein Gegner hat dich getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(eigeneleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(verloren,1000);
        }
    }
    //Spieler verliert, weil 2=Papier, 0=Schere
    if(auswahl == 2 && gegnerauswahl == 0)
    {
        let eigeneleben = document.getElementById("eigeneleben")
        eigeneleben.value -= 10;
        document.writeln('<div id="verschwinde" class="kampflogverloren">Dein Gegner hat dich getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(eigeneleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(verloren,1000);
        }
    }
    //Spieler gewinnt, weil 0=Schere, 2=Papier
    if(auswahl == 0 && gegnerauswahl == 2)
    {
        let gegnerleben = document.getElementById("gegnerleben")
        gegnerleben.value -= schaden;
        document.writeln('<div id="verschwinde" class="kampfloggewonnen">Du hast deinen Gegner getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(gegnerleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(gewonnen,1000);
        }
    }
    //Spieler gewinnt, weil 1=Stein, 0=Schere
    if(auswahl == 1 && gegnerauswahl == 0)
    {
        let gegnerleben = document.getElementById("gegnerleben")
        gegnerleben.value -= schaden;
        document.writeln('<div id="verschwinde" class="kampfloggewonnen">Du hast deinen Gegner getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(gegnerleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(gewonnen,1000);
        }
    }
    //Spieler gewinnt, weil 2=Papier, 1=Stein
    if(auswahl == 2 && gegnerauswahl == 1)
    {
        let gegnerleben = document.getElementById("gegnerleben")
        gegnerleben.value -= schaden;
        document.writeln('<div id="verschwinde" class="kampfloggewonnen">Du hast deinen Gegner getroffen!</div>');
        var timeoutID;
        timeoutID = window.setTimeout(wegdamit, 2000);
        if(gegnerleben.value == 0)
        {
            document.getElementById("0").disabled =true;
            document.getElementById("1").disabled =true;
            document.getElementById("2").disabled =true;
            setTimeout(gewonnen,1000);
        }
    } 
}
//Einmalig im Kampf darf man sich heilen
function heilen()
{
    let heilen = document.getElementById("eigeneleben");
    if(heilen.value <= 80)
    {
        heilen.value += 20;
        document.getElementById("heilung"). innerHTML ="0x Heilen";
        document.getElementById("heilung").disabled =true;
    }
    else
    {
        alert("Du hast noch zu viele Leben, das lohnt sich noch nicht!")
    }

}
function gewonnen()
{
    alert("Du hast gewonnen, versuche einen anderen Schwierigkeitsgrad!")
    location.reload();
}
function verloren()
{
    alert("Du hast verloren, nochmal versuchen?")
    location.reload();
}
//Damit der Kampflog nach 2 Sekunden wieder verschwindet
function wegdamit()
{
    var element = document.getElementById("verschwinde");
    element.parentNode.removeChild(element);
}
//Erzeugen der Kampfübersicht/dem Kampfumfeld
function kampfgenerieren()
{
    document.writeln('"<body style="background-image:url(hintergrund.jpg")>"');
    document.writeln("<h1>Fight</h1>")
    document.writeln("<div class= 'kampfgrid'>")
    //Obere Zeile
        //css einbinden
        document.writeln('<link rel="stylesheet" type="text/css" href="rpg.css"/>')
        //Eigene Lebensanzeige
        document.writeln('<div class="box">HP<br><progress id="eigeneleben" value="100" max="100"><</progress></div>');
        //Bild vom ausgewählten Charakter
        document.writeln('<div class="boxi"><img src="'+charakter+'.jpg"></div>');
        //Eine Box in der "VS" steht
        document.writeln('<div class="box"><br><br><br<br><br><br><br><br><br>VS</div>');
        //Bild vom Gegner
        document.writeln('<div class="boxi"><img src="'+gegner+'.jpg"></div>');
        //Gegner Lebensanzeige
        document.writeln('<div class="box">HP<br><progress id="gegnerleben" value="100" max="100"><</progress></div>');
    //Untere Zeile
        //Lückenfüller
        document.writeln('<div class="boxi">Hier könnte ihre Werbung stehen!</div>');
        //Angriff durch Schere Stein Papier + einmal heilen
        document.writeln('<div class="box"><button id="0" class="schere" type="button" onClick="angriff(this.id)">Schere</button><br><br><button id="1" class="stein" type="button" onClick="angriff(this.id)">Stein</button><br><br><button id="2" class="papier" type="button" onClick="angriff(this.id)">Papier</button><br><br><button class="heilen" id="heilung" type="button" onClick="heilen()">1x Heilen (heilt 2 Schläge)</button></div>');
        //Kampflog
        document.writeln('<div class="boxi"></div>');
        //Beschreibung des Gegners je nach Schwierigkeitsgrad (Standardmäßig auf mittel)
        if(grad=="easy")
        {
            document.writeln('<div class="box">Kopf mit Arm<br>Bekommt doppelt so viel schaden zugefügt wie du!</div>');    
        }
        if(grad=="mittel")
        {
            document.writeln('<div class="box">Kleiner Wüterich<br>Bekommt gleich viel schaden zugefügt wie du!</div>');    
        }
        if(grad=="hard")
        {
            document.writeln('<div class="box">Karateprofi!<br>Bekommt nur halb so viel schaden zugefügt wie du!</div>');    
        }
        //Lückenfüller
        document.writeln('<div class="boxi">Hier könnte ihre Werbung stehen!</div>');
    document.writeln("</div>")
    setTimeout(alarm, 200);
}
function alarm()
{
    alert("Der Kampf funktioniert nach dem Schere Stein Papier Prinzip, dein Gegner wählt zufällig aus! Viel Glück!");
}