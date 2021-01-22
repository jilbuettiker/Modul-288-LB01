// Variabeln bestimmen
var i = 0;
var correctCount = 0 ;
//beginn bei Frage 1
generate(0);
// Einblenden von Frage und Antworten
function generate(index) {
    document.getElementById("quizfragen").innerHTML = data[index].frage;
    document.getElementById("1").innerHTML = data[index].antwort1;
    document.getElementById("2").innerHTML = data[index].antwort2;
}
// Punktezählung. Ist die Antwort richtig, gibt es einen Punk dazu und die Meldung "Richtig" erscheint. Meldung Falsch bei Falsch.


function checkAnswer() {
    if (document.getElementById("antwort1").checked && data[i].antwort1 == data[i].answer) {
       correctCount++;
       alert ('Richtig');

    }
    if (document.getElementById("antwort2").checked && data[i].antwort2 == data[i].answer) {
        correctCount++;
        alert ('Richtig');

    }
    if (document.getElementById("antwort1").checked && data[i].antwort1 != data[i].answer) {
        correctCount++;
        alert ('Falsch');

    }
    if (document.getElementById("antwort2").checked && data[i].antwort2 != data[i].answer) {
        correctCount++;
        alert ('Falsch');

    }


    // Schlussbild um die anzahl Punkte anzuzeigen
    i++;
    if(data.length-1 < i){
        document.write("<body style='background-color:#FFFFFF;'>");
        document.write("<div style='color:#000000;font-size:18pt;text-align:center;'>Du hast "+correctCount+" von 10 Punkte</div>");
        document.write("</body>");
    }
    
    generate(i);
}
