var state = 0;
var failCtr = 0;
var msgs = {
    "no1" : "Oooch... vilech luegsch nomal ds Video, u atmisch töif düre... If that doesn't help, maybe call me? But only if you're really really really desperate ;)",
    "no2" : "Hmm... Evtl. muesch no ganz weni in Richtig Spiez loufe... U süsch mal mit Google Maps nach \"Bäckerei Linder\" sueche? Adrässe isch Spiezstrasse 61",
    "no3" : "Ooops... komisch, es sött es Briefli derte sii. Schade, iz muesch am Dave alüte... ",
    "wrong" : "Haha! Funny you! Das gsehni vo hie, dass das nid cha si..."
};

var checks = {
    "check6" : "1"
};

var checkmsgs = {
    "check6" : 
    { 
        0 : "Je genaaau!!",
        1 : "Leider nein... 1. Hiiwiis: Es isch ä Zahl...",
        2 : "Immer noni ;) 2. Hiiwiis: Es isch ä Zahl zwüsche 1 und 10",
        3 : "Hmmm, nope... 3. Hiiwiis: Es isch en ungeradi Zahl, chliner als 5...",
        99 : "Schad... het äue öbbis nid ganz klappet... darfsch glich witers ;)"
    }
};

function btnMsgClick(event) {
    let btn_id = event.toElement.id;
    let msgid = btn_id.substring(4);

    if(msgid in msgs) {
        alert(msgs[msgid]);
    }
}

function btnCheckClick(event) {
    let btn_id = event.toElement.id;
    let checkid = btn_id.substring(4);

    let input = window.document.getElementById(checkid);

    let text = input.value;
    
    if(text == checks[checkid]) {
        let step_id = checkid.substring(5);
        step_id = parseInt(step_id);
        nextState(step_id);
        alert(checkmsgs[checkid][0]);
    }
    else {
        failCtr++;
        if(failCtr in checkmsgs[checkid]) {
            alert(checkmsgs[checkid][failCtr]);
        }
        else {
            alert(checkmsgs[checkid][99]);
            let step_id = checkid.substring(5);
            step_id = parseInt(step_id);
            nextState(step_id);
        }
    }
}



function btnStepClick(event) {
    let btn_id = event.toElement.id;
    btn_id = btn_id.substring(5);
    let num = 0;
    try {
        num = parseInt(btn_id);
        if(Number.isNaN(num)) {
            throw Exception;
        }
        nextState(num);
        switch(num) {
            case 1:
            window.scrollBy(0, 11500);
            break;
        }
    }
    catch {
        if (btn_id == "end2") {
            let el = window.document.getElementById(btn_id);
            el.style.visibility = "visible";
        }
    }
}


function btnEndClick(event) {
    if(event.toElement.id == "btn_end1") {
        alert("Dave: Gratuliere! Du hesches bis hie gschafft! Fröiemi scho uf di... bis gli!");
    }
    else {
        alert("Dave: Lüt mir doch churz a ;)");
    }
}

function unhide(id) {
    let el = window.document.getElementById(id);
    el.style.visibility = "visible";
}

function init() {

    let localstate = localStorage.getItem("state");

    if(localstate) {
        console.log("State: " + localstate);
        state = localstate;
    }

    updateVisibility();
}

function nextState(nextstate) {
    state = nextstate;
    localStorage.setItem("state", state);
    updateVisibility();
    failCtr = 0;
    console.log("New state: " + state);
}


function updateVisibility() {
    for(i = 1; i <= state; i++) {
        unhide("step" + i);
    }
    
    if(state > 0) {
        unhide("giraffe");
        unhide("gras");
    }
}

function btnReset() {
    nextState(0);
    window.scrollBy(0, -100000);
    location.reload();
}