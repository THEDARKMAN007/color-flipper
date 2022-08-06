let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

 // hex dom mainpulation
document.body.querySelector(".click_me_two").addEventListener("click", function text_changer_two() {

  let color="#"
  for (let i = 0; i < 6; i++){
  a = Math.floor(Math.random() * hex.length);
    color+=hex[a]
  }

  let color_text = document.body.querySelector(".BG_color_two");
  color_text.innerHTML = `<div class="BG_color">Background Color : <div class="color_name_two">${color}</div> </div>`;

  let background_color = document.body;
  background_color.style.backgroundColor = color;
  });