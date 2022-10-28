const skills = ["Programming", "Music", "Audio Engineering", "Photography",  "Video Editing", "GraPHiCS DeSIgn"];
let i = 0;
let timer;

function typeSkill(){
    let skill = skills[i].split("");
    var loopType = function() {
        if(skill.length > 0){
            document.getElementById("main-skill").innerHTML += skill.shift();
        } else {
            setTimeout(eraseSkill, 2000);
            return false;
        };
        timer = setTimeout(loopType, 150);
    };
    loopType();
};

function eraseSkill(){
    let skill = skills[i].split("");
    var loopErase = function() {
        if(skill.length > 0){
            skill.pop();
            document.getElementById("main-skill").innerHTML = skill.join("");
        } else {
            if(skills.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            setTimeout(typeSkill, 500);
            return false;
        };
        timer = setTimeout(loopErase, 100);
    };
    loopErase();
}

window.onload = function() {
    typeSkill();
}
