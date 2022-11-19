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

function showMusicDetails(music){
    var musicDetail = document.getElementById('music-details')
    var preview = document.getElementById('music-detail-body').children
    var nodes
    switch(music.name){
        case "we could be":
            nodes = musicDetail.children

            console.log(nodes)
            nodes[0].innerHTML = "We Could Be"
            nodes[1].innerHTML = "by \"Just A Fad\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/4ci4yeWlhPhOvYzXRM9tPP?utm_source=generator")
            preview[1].innerHTML = 
            `"We Could Be" was the first song that I've ever worked with which got 
            released in streaming services like Spotify, iTunes, and Apple Music. 
            As I was discovering my path to music production, I asked Just A Fad if 
            I could use their songs for my mixing practice. In the end, they liked the 
            mix and they reuploaded their song with my mixdown.`
            break
        case "panaginip":
            nodes = musicDetail.children
            nodes[0].innerHTML = "Panaginip"
            nodes[1].innerHTML = "by \"Sinai\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/0CrXA4fbdlnBQVHNw8kfY9?utm_source=generator")
            preview[1].innerHTML = 
            `"Panaginip" was dedicated to those who were too scared to make a move, ending up 
            daydreaming of how their relationship might have come to be. Written back in December 2019, 
            the song took 8 months to compose due to scheduling conflicts, most of which were of COVID's 
            fault.`
            break
        case "chica":
            nodes = musicDetail.children
            nodes[0].innerHTML = "Chica"
            nodes[1].innerHTML = "by \"Akio Elijah\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/1BPv3arYQCUtzF0YyFSF25?utm_source=generator")
            preview[1].innerHTML = 
            `"Chica" is a project by Akio Elijah. I was asked by him if I could mix and master his own song.
            Unlike my other songs, this song is more on a 'swing' vibe which was new to me as I was used to
            working with Indie Rock.`
            break
        case "babae nanaman":
            nodes = musicDetail.children
            nodes[0].innerHTML = "Babae Nanaman"
            nodes[1].innerHTML = "by \"Just A Fad\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/0SxZxPTejXfd5vBL5P71Jr?utm_source=generator")
            preview[1].innerHTML = 
            `"Babae Nanaman" is a 4-track EP by Just A Fad. It was also my first time working with a full-fledged
            EP. Aside from mixing and mastering the song, this song also needed sound design to make some of the 
            songs a bit more 'full'. Initially consisting of 5 tracks, the EP included of "Babae Nanaman" an 
            intro-intermission which was removed from the release, "I Really Love Swimming in the Beach" which 
            is supposed to sound like the Beach Boys, "Cerveza", a chill song, "Ilaw", that includes my sound design, 
            and "The Lane" which features a distored vocal at the end.`
            break

        case "gloom":
            nodes = musicDetail.children
            nodes[0].innerHTML = "Gloom"
            nodes[1].innerHTML = "by \"Akio Elijah\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/4HY7r8dLgtVkD3upRdRwOk?utm_source=generator")
            preview[1].innerHTML = 
            `"Gloom" was another request from Akio Elijah for me to mix and master. Similar to his last single,
            it was way off my genre as it is more of like a 'street' beat to me. Regardless, it was fun to mix
            his song`
            break
        case "mhp":
            nodes = musicDetail.children
            nodes[0].innerHTML = "MHP(My Heart Prays)"
            nodes[1].innerHTML = "by \"Sinai\""
            preview[0].setAttribute("src", "https://open.spotify.com/embed/track/5H8uiTRfJGP5QajLVy4FaM?utm_source=generator")
            preview[1].innerHTML = 
            `"MHP", a.k.a. "My Heart Prays" talks about being selfless in a relationship, where one party 
            keeps committing to the relationship even if the other party isn't that interested anymore. The 
            general composition of the song is really tough as I was handling around 30 different instruments, 
            each with a unique characteristic. Sadly, I had the lack of time to properly mix the song due to 
            scheduling delays. I might remaster it soon tho.`
            break
    }
}

// $(document).ready(function () {
//     $("input").click(function() {
//         $("#music-details").show()
//         $("#music-details").animate({width: '1000px', height: '456px'}, 500)
//         document.getElementById("music-details").scrollIntoView()
//     })
// })