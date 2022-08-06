let simpleArrayOfColors = ["Green", "#F15025", "Rgba(133,122,200)", "Red"];

// simple dom manipulation
document.body.querySelector(".click_me")
  .addEventListener("click", function text_changer() {
    i = Math.floor(Math.random() * simpleArrayOfColors.length);

    let color_text = document.body.querySelector(".BG_color");
    color_text.innerHTML = `<div class="BG_color">Background Color : <div class="color_name">${simpleArrayOfColors[i]}</div> </div>`;

    let background_color = document.body;
    background_color.style.backgroundColor = simpleArrayOfColors[i];
  });
