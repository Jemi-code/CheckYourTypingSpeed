const time = document.getElementById('timer');
const typingBox = document.getElementById('typing-box');
const displayText = document.getElementById('actual_text');
const note = document.querySelector(".moral");
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");
const average = document.createElement("P");


let data = 1;
let runner = 0;
let minutes = 0;
let seconds = 0;
let milsecs = 0;
let interval;

let arrTime = [];


const typeMe = {
    1: "Women do not have to conform, because history is seldom made on well behaved women",
    2: "No Ron, it's not Wingardium LeviOsa it's Wingardium LevioSA", 
    3: "The greatest glory lies not in never falling, but rising each time we fall",
    4: "What do we call a three humped camel? Pregnant!",
    5: "The quick brown fox jumped over your lazy ass because you do not want to get up", 
    6: "The road to success is littered with problems, each makes you stronger, each makes you wiser and braver",
    7: "All I want for Christmas is YOU- Yacht, Objectional new Season of Game of thrones and an Unbelievable amount of money",
    8: "Good men do bad things when they turn their backs when bad things happen",
    9: "Long ago, 9 planets lived together in harmony, but everything changed when IAU attacked",
    10: "Only NASA, master of all space science could stop them, but when the world needed him most, he vanished",
    11: "15 years past Mike Brown and Konstantin Batygin discovered a new planet, a rocky planet named Planet Nine",
    12: "And although it seems cool, it will never replace Pluto in our hearts",
    13: "But I believe Pluto is still a planet"
}

let spellChecker = () => {
    let typeVal = typingBox.value;
    let valueToType = typeMe[data];
    let valueTyped = typeMe[data].slice(0, typeVal.length)

        if(valueToType === valueTyped){
            note.innerHTML = `Done in ${minutes} minutes and ${seconds} seconds`; 
            clearInterval(interval);
            arrTime.push(Math.floor((seconds)));

            average.innerHTML = `Average typing speed is ${(runner/100)/data}`;
            document.querySelector(".typing-area").appendChild(average);
        }
        else if(typeVal === valueTyped){
            note.innerHTML = "Good luck";
        } 
        else{
            note.innerHTML = "There is a typo";
        }
}

// This functions shows how the timer will work 
let updateTimer = () => {
    time.innerHTML = `${addZero(minutes)}:${addZero(seconds)}:${addZero(milsecs)}`;
    runner += 1;

    minutes = Math.floor((runner/100)/60);
    seconds = Math.floor((runner/100) - (minutes*60));
    milsecs = Math.floor((runner) - (seconds*100) - (minutes*6000));
}

//this function will add zeros to the front of the number less than 9
let addZero = (num) => {
    if(num <= 9){
        num = '0' + num;
    }

    return num;
}

//this function will start running as soon as you start typing

let start = () => {
    let typeVal = typingBox.value.length;
    if(typeVal === 0){
        interval = setInterval(updateTimer, 10);
    }
}

let reset = () => {
    clearInterval(interval);
    time.innerHTML = "00:00:00";
    runner = 0;
    typingBox.value = "";
    data = 1;
    displayText.innerHTML = typeMe[data];
}

let next = () => {
    if(data > 12){
        data = 1;
    } else {
        data += 1;
    }
    typingBox.value = "";
    displayText.innerHTML = typeMe[data];
}

//this will start the timer as soon as you start typing
typingBox.addEventListener("keypress", start, false);
typingBox.addEventListener("click", start, false);
typingBox.addEventListener("keyup", spellChecker, false);
resetBtn.addEventListener("click", reset, false);
nextBtn.addEventListener("click", next, false);

const bars = document.querySelector(".bars");
const X = document.querySelector(".close-menu")
const items = document.getElementById("items");
const show = document.getElementById("nav-list1");
const and = document.getElementById("nav-list2");
const tell = document.getElementById("nav-list3");

let openMenu = () => {
    items.classList.remove("nav-items");
    show.classList.remove("nav-item");
    and.classList.remove("nav-item");
    tell.classList.remove("nav-item");

    items.classList.add("lib1");
    show.classList.add("show");
    and.classList.add("and");
    tell.classList.add("tell");
    X.style.display = "block";
    bars.style.display = "none";
}

let closeMenu = () => {
    items.classList.remove("lib1");
    show.classList.remove("show");
    and.classList.remove("and");
    tell.classList.remove("tell");

    items.classList.add("nav-items");
    show.classList.add("nav-item");
    and.classList.add("nav-item");
    tell.classList.add("nav-item");
    X.style.display = "none";
    bars.style.display = "block";
}

bars.addEventListener("click", openMenu);
X.addEventListener("click", closeMenu);
