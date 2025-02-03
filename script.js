function createFloatingElement(type) {
    let element = document.createElement("div");
    element.classList.add(type);
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.top = Math.random() * window.innerHeight + "px";
    element.innerHTML = type === 'heart' ? '❤️' : '🌸';
    document.body.appendChild(element);
    setTimeout(() => { element.remove(); }, 6000);
}

setInterval(() => {
    createFloatingElement('heart');
    createFloatingElement('flower');
}, 500);

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector(".container").innerHTML = "<h1 class='title'>¡Sabía que dirías que sí! TE AMO MI DANIELITA 💕💘</h1>";
});
