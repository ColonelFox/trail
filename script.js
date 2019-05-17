var state = 0;
var failCtr = 0;
var msgs = {
    "no1" : "Oooch... vilech luegsch nomal ds Video, u atmisch töif düre... If that doesn't help, maybe call me? But only if you're really really really desperate ;)"
};

var checks = {
    "check1" : "1"
};

var checkmsgs = {
    "check2" : 
    { 
        0 : "Leider nein... 1. Hiiwiis: Es isch ä Zahl...",
        1 : "Immer noni ;) 2. Hiiwiis: Es isch ä Zahl zwüsche 1 und 10",
        2 : "Hmmm, nope... 3. Hiiwiis: Es isch en ungeradi Zahl, chliner als 5...",
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
    }
    else {
        if(failCtr in checkmsgs[checkid]) {
            alert(checkmsgs[checkid][failCtr++]);
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
    let num = parseInt(btn_id);
    nextState(num);


    switch(num) {
        case 1:
        window.scrollBy(0, 11000);
        break;
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
    }
}

function btnReset() {
    nextState(0);
    window.scrollBy(0, -100000);
    location.reload();
}