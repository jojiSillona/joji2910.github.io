var i = 0;

var skills = ["Photographer", "Programmer", "Musician", "Audio Engineer", "Video Editor", "GraPHiCS DeSIgnER"];
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