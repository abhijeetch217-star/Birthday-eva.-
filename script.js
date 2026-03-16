const pages = document.querySelectorAll(".page");
let currentPage = 0;

window.onload = () => {

document.getElementById("loader").style.display="none";

typeText();
};

function showPage(index){

pages.forEach(p=>p.classList.remove("active"));

pages[index].classList.add("active");

}

function nextPage(){

if(currentPage < pages.length-1){

currentPage++;

showPage(currentPage);

}

}

function prevPage(){

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

}


/* typing effect */

const text="Happy Birthday Eva 🎂\nAaj ka din bohot special hai...\nKyuki aaj tumhara birthday hai 💛";

let i=0;

function typeText(){

const el=document.getElementById("typing");

if(!el) return;

if(i<text.length){

el.innerHTML+=text.charAt(i);

i++;

setTimeout(typeText,40);

}

}


/* hearts */

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},300);

}
