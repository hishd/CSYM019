function runOnLoad() {
  const button = document.getElementById("circle");
  let offsetX = button.offsetLeft;
  let offsetY = button.offsetTop;

  let handle = null;

  function moveLeft() {
    if (offsetX <= 0) {
      clearInterval(handle);
      return;
    }
    offsetX = offsetX - 5;
    button.style.left = `${offsetX}px`;
    button.style.backgroundImage = "url(fish-left.png)";
  }

  function moveRight() {
    if (offsetX >= window.innerWidth - button.offsetWidth) {
      clearInterval(handle);
      return;
    }
    offsetX = offsetX + 5;
    button.style.left = `${offsetX}px`;
    button.style.backgroundImage = "url(fish-right.png)";
  }

  function moveUp() {
    if (offsetY <= 0) {
      clearInterval(handle);
      return;
    }
    offsetY = offsetY - 5;
    button.style.top = `${offsetY}px`;
    button.style.backgroundImage = "url(fish-up.png)";
  }

  function moveDown() {
    if (offsetY >= window.innerHeight - button.offsetHeight) {
      clearInterval(handle);
      return;
    }
    offsetY = offsetY + 5;
    button.style.top = `${offsetY}px`;
    button.style.backgroundImage = "url(fish-down.png)";
  }

  document.onkeydown = (event) => {
    console.log(event.key);
    switch (event.key) {
      case "ArrowLeft":
        clearInterval(handle);
        handle = setInterval(moveLeft, 20);
        break;
      case "ArrowRight":
        clearInterval(handle);
        handle = setInterval(moveRight, 20);
        break;
      case "ArrowUp":
        clearInterval(handle);
        handle = setInterval(moveUp, 20);
        break;
      case "ArrowDown":
        clearInterval(handle);
        handle = setInterval(moveDown, 20);
        break;
      case " ":
        clearInterval(handle);
        break;
    }
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
