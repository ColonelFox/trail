


var failCtr = 0;

function btnReadyClick() {
    console.log("Hallo");
    window.scrollBy(0, 100000);
}

function btnCheckClick() {
    
    let phrase = window.document.getElementById("keyphrase");
    let text = phrase.value;
    console.log(text);

    if(text == "hallo") {
        unhideSecret();
    }
    else {
        if(failCtr == 0) {
            alert("Leider nein... Hinweis 1!");
        }
        else if(failCtr == 1) {
            alert("Leider nein... Hinweis 2!");
        }
        else if(failCtr == 2) {
            alert("Leider nein... Hinweis 3!");
        }
        else {
            alert("Leider auch falsch... darfsch glich witers ;)");
            unhideSecret();
        }
        failCtr++;
    }
}

function unhideSecret() {
    let secret = window.document.getElementById("secret");
    secret.style.visibility = "visible";
}