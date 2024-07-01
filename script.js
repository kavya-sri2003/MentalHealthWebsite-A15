const heroDiv = document.querySelector("hero-img");
const selectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotofyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
    {
        album: "Stay",
        emblem: "Life is better with Music",
        "bg-color" : ["#0396FF","#0D1827"],
        "accent-color" : "0396FF",
         url: "https://th.bing.com/th/id/R.62b61026a178794d3be031e6e4b9f3e4?rik=KEbpL3o05LH00g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-8EKGTO_6aCc%2fUHlG-7gtdeI%2fAAAAAAAAXLQ%2f5pLJ0OkW820%2fs1600%2fjustin-bieber-publicist-laptop-stolen-not-a-hoax.jpg&ehk=Dgjsgp3jnslmUn763ueyvX1RXaJJuIKAG5v4YYnkc8w%3d&risl=&pid=ImgRaw&r=0.jpg",
         spotify: "https://open.spotify.com/embed/track/567e29TDzLwZwfDuEpGTwo"
     },
];
scrollleft.addEventListener("Click",() => handleClickScroll(-1));
scrollRight.addEventListener("Click",() => handleClickScroll(1));
heroDiv.addEventListener("animationed",() => {
heroDiv.classList.remove("album-transition");
document.addEventListener("keydown",handleKeyScroll);
scrollLeft.disabled = false;
scrollRight.disabled = false;
scrollLeft.classList.remove("key-press-hover-left");
scrollRight.classList.remove("key-press-hover-right");
for(const text of texts) text.classList.add("show-texts");
});
const handleClickScroll = (val) => {
if(index + val => 0 && index + val < albums.length){
updateDisplay((index +=val));
}
};
const handleKeyScroll = (e) => {
if(e.key =="ArrowLeft"){
scrollLeft.classList.add("key-press-hover-left");
handleClickScroll(-1);
}
if(e.key == "ArrowRight"){
scrollRight.classList.add("key-press-hover-right");
handleClickScroll(1)
}
};
let index = 0;
const updateDisplay = (index) => {
let DELIMITER ="";
const album = albums[index];
for(const text of texts)text.classList.remove("show-texts");
emblemDiv.innerHTML = "";
scrollLeft.disabled = true;
scrollRight.disabled = true;
document.removeEventListener("keydown",handleKeyScroll);
sectionContainer.id = 'hero.$(album.album.toLocaleLowerCase().replace("","-")}';
bodyContainer.style.background = 'linear-gradient(180deg,$(album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)';
heroDiv.style.backgroundImage = 'url(${album.url})';
albumTitleSpan.textContent = album.album;
spotifyWidget.src=album.spotify;


  
    
    

    
    

