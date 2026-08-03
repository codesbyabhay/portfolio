const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "Laravel Developer",
    "Technical Trainer",
    "AI & ML Learner"
];

const typing = document.getElementById("typing");

let word = 0;
let letter = 0;
let reverse = false;

function typingEffect(){

    if(!typing) return;

    const current = words[word];

    if(!reverse){

        typing.textContent = current.slice(0, ++letter);

        if(letter === current.length){

            reverse = true;

            setTimeout(typingEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.slice(0,--letter);

        if(letter===0){

            reverse=false;

            word=(word+1)%words.length;

        }

    }

    setTimeout(typingEffect, reverse?45:90);

}

typingEffect();