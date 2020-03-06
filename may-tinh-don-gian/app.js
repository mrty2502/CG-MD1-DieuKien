let input ="";
function chosenum1() {
    input += "1";
    document.getElementById('out-put').value=input;
}
function chosenum2() {
    input += "2";
    document.getElementById('out-put').value=input;
}

function chosenum3() {
    input += "3";
    document.getElementById('out-put').value=input;
}

function chosenum4() {
    input += "4";
    document.getElementById('out-put').value=input;
}

function chosenum5() {
    input += "5";
    document.getElementById('out-put').value=input;
}

function chosenum6() {
    input += "6";
    document.getElementById('out-put').value=input;
}

function chosenum7() {
    input += "7";
    document.getElementById('out-put').value=input;
}

function chosenum8() {
    input += "8";
    document.getElementById('out-put').value=input;
}

function chosenum9() {
    input += "9";
    document.getElementById('out-put').value=input;
}

function chosenum0() {
    input += "0";
    document.getElementById('out-put').value=input;
}

function chosesum() {
    input+="+";
    document.getElementById('out-put').value=input;
}

function chosesub() {
    input+="-";
    document.getElementById('out-put').value=input;
}

function chosemulti() {
    input+="*";
    document.getElementById('out-put').value=input;
}

function chosedivi() {
    input+="/";
    document.getElementById('out-put').value=input;
}
 function letreplay() {
    document.getElementById('out-put').value = 0;
    input=""
 }
function result() {
    document.getElementById('out-put').value= eval(input);
}