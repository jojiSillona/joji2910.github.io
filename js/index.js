var i = 0;

var skills = ["Photography", "Programming", "Music", "Audio Engineering", "Video Editing", "GraPHiCS DeSIgn"];
var skill = skills[Math.floor(Math.random()*skills.length)];
var speed = 120;

function typeWrite(){
    if(i < skill.length){
        document.getElementById("main-skill").innerHTML += skill.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}

function cursor(){
    
}

window.onload = function(){
    typeWrite();
};