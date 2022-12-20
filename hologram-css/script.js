window.addEventListener("load", init, false);


function init(){
    'use strict';
    var animations = document.querySelectorAll(".elementAnimation");
    for(let i = 0; i < animations.length; i++){
        animations[i].classList.add("runningAnimation");
    }
}