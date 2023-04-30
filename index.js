const kits = ["crash", "kick", "snare", "tom"];

const btnEl = document.querySelector(".btn-container");

kits.forEach((kit) => {
  const button = document.createElement("button");
  btnEl.appendChild(button);
  button.classList.add("btn");
  button.innerText = kit;
  button.style.backgroundImage = "url(images/" + kit + ".png)";

  const audioEl = document.createElement("audio");
  audioEl.src = "audio/" + kit + ".mp3";
  btnEl.appendChild(audioEl);

  button.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      button.style.backgroundSize = 105 + "%";
      setTimeout(() => {
        button.style.backgroundSize = 100 + "%";
      }, 100);
    }
  });
});
