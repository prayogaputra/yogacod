const bodyDOM = document.getElementById("body")

var lampu = false
var listrik = false

function status(){
    if(lampu === true && listrik === true){
        bodyDOM.innerHTML = "nyala"
    }
    else{
        bodyDOM.innerHTML = "mati"
    }

}



function lampuon(){
    lampu = true
    status()
}
function lampuoff(){
    lampu = false
    status()
}
function listrikon(){
    listrik = true
    status()
}
function listrikoff(){
    listrik = false
    status()
}
status()
