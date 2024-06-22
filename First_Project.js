const button = document.querySelectorAll(".circle");

const body = document.querySelector("body");

button.forEach(function(circle) {
  circle.addEventListener("click", function(color) {
    if (color.target.id  ==="box1") {
      body.style.backgroundColor = "red";
    }
    if (color.target.id  ==="box2") {
        body.style.backgroundColor =  "rgb(89, 0, 255)";
      }
      if (color.target.id  ==="box3") {
        body.style.backgroundColor = "rgb(44, 116, 189)";
      }
      if (color.target.id  ==="box4") {
        body.style.backgroundColor = " rgb(0, 255, 21)";
      }
      if (color.target.id  ==="box5") {
        body.style.backgroundColor = " rgb(255, 0, 119)";
      }
      if (color.target.id  ==="box6") {
        body.style.backgroundColor = "rgb(0, 166, 255)";
      }
      if (color.target.id  ==="box7") {
        body.style.backgroundColor = " rgb(255, 0, 76)";
      }
  });
});
