function wynik() {
    let punkty = 0;
    let ilePytan = 5;

    for (let i = 1; i <= ilePytan; i++) {
        let nazwaRadio = document.getElementsByName('answer' + i);

        for (let j = 0; j < nazwaRadio.length; j++) {
            var wartoscRadio = nazwaRadio[j];
            if (wartoscRadio.value == "correct" && wartoscRadio.checked) {
                punkty++;
            }
        }
    }

    if (punkty == 1) document.getElementById('results').innerHTML = "Zdobyłeś " + punkty + " punkt na możliwe " + ilePytan + ".";
    else if (punkty == 2 || punkty == 3 || punkty == 4) document.getElementById('results').innerHTML = "Zdobyłeś " + punkty + " punkty na możliwe " + ilePytan + ".";
    else document.getElementById('results').innerHTML = "Zdobyłeś " + punkty + " punktów na możliwe " + ilePytan + ".";

    let ocena = punkty/ilePytan;
    if(ocena > 0.96) document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę celującą.";
    else if(ocena < 0.96 && ocena > 0.86) document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę bardzo dobrą.";
    else if(ocena < 0.85 && ocena > 0.71) document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę dobrą.";
    else if(ocena < 0.70 && ocena > 0.56) document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę dostateczną.";
    else if(ocena < 0.41 && ocena > 0.55) document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę dopuszczającą.";
    else document.getElementById('grade').innerHTML = "Otrzymałbyś/otrzymałabyś ocenę niedostateczną.";
}