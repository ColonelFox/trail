


var failCtr = 0;

function btnReadyClick() {
    unhide("giraffe");
    unhide("step1");
    window.scrollBy(0, 100000);
}

function btnNotReadyClick() {
    alert("Oooch... vilech luegsch nomal ds Video, u atmisch töif düre... If that doesn't help, maybe call me? But only if you're really really really desperate ;)");
}

function btnCheckBuslineClick() {
    
    let phrase = window.document.getElementById("busline");
    let text = phrase.value;
    console.log(text);

    if(text == "1") {
        unhide("step2");
        failCtr = 0;
    }
    else {
        if(failCtr == 0) {
            alert("Leider nein... 1. Hiiwiis: Es isch ä Zahl...");
            failCtr++;
        }
        else if(failCtr == 1) {
            alert("Immer noni ;) 2. Hiiwiis: Es isch ä Zahl zwüsche 1 und 10");
            failCtr++;
        }
        else if(failCtr == 2) {
            alert("Hmmm, nope... 3. Hiiwiis: Es isch en ungeradi Zahl, chliner als 5...");
            failCtr++;
        }
        else {
            alert("Schad... het äue öbbis nid ganz klappet... darfsch glich witers ;)");
            unhide("step2");
            failCtr = 0;
        }
    }
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

function unhide(id) {
    let el = window.document.getElementById(id);
    el.style.visibility = "visible";
}