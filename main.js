const btnRouge = document.querySelectorAll(".rouge");
const btnRose = document.querySelectorAll(".rose");
const btnAqua = document.querySelectorAll(".aqua");
const btnBeige = document.querySelectorAll(".beige");

const div = document.createElement("div");
div.setAttribute("id", "divGif");

const imgRed = document.createElement("img");
imgRed.setAttribute("src", "./img/soloLeveling.gif");
imgRed.setAttribute("alt", "gif soloLeveling");
imgRed.setAttribute("class", "gif");

const imgPink = document.createElement("img");
imgPink.setAttribute("src", "./img/soloLeveling2.gif");
imgPink.setAttribute("alt", "gif soloLeveling");
imgPink.setAttribute("class", "gif");

const imgBeige = document.createElement("img");
imgBeige.setAttribute("src", "./img/soloLeveling3.gif");
imgBeige.setAttribute("alt", "gif soloLeveling");
imgBeige.setAttribute("class", "gif");

const imgAqua = document.createElement("img");
imgAqua.setAttribute("src", "./img/soloLeveling4.gif");
imgAqua.setAttribute("alt", "gif soloLeveling");
imgAqua.setAttribute("class", "gifAqua");

let beat = new Audio('/path/to/my/beat.mp3');

for (const btn of btnRouge) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div);
        div.appendChild(imgRed);
        div.style.display = "block";
        beat.play()
	});
    btn.addEventListener("pointerout", () => {
        document.body.removeChild(div);
        div.removeChild(imgRed);
        div.style.display = "none";
    }) 
}


for (const btn of btnRose) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div);
        div.appendChild(imgPink);
        div.style.display = "block";
	});
    btn.addEventListener("pointerout", () => {
        document.body.removeChild(div);
        div.removeChild(imgPink);
        div.style.display = "none";
    }) 
}

for (const btn of btnBeige) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div);
        div.appendChild(imgBeige);
        div.style.display = "block";
	});
    btn.addEventListener("pointerout", () => {
        document.body.removeChild(div);
        div.removeChild(imgBeige);
        div.style.display = "none";
    }) 
}

for (const btn of btnAqua) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div);
        div.appendChild(imgAqua);
        div.style.display = "block";
	});
    btn.addEventListener("pointerout", () => {
        document.body.removeChild(div);
        div.removeChild(imgAqua);
        div.style.display = "none";
    }) 
}