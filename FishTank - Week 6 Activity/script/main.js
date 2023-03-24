function runOnLoad() {
  const fish = document.getElementById("circle");
  let offsetX = fish.offsetLeft;
  let offsetY = fish.offsetTop;

  let handle = null;

  function moveLeft() {
    if (offsetX <= 0) {
      clearInterval(handle);
      return;
    }
    offsetX = offsetX - 5;
    fish.style.left = `${offsetX}px`;
    fish.style.backgroundImage = "url(img/fish-left.png)";
  }

  function moveRight() {
    if (offsetX >= window.innerWidth - fish.offsetWidth) {
      clearInterval(handle);
      return;
    }
    offsetX = offsetX + 5;
    fish.style.left = `${offsetX}px`;
    fish.style.backgroundImage = "url(img/fish-right.png)";
  }

  function moveUp() {
    if (offsetY <= 0) {
      clearInterval(handle);
      return;
    }
    offsetY = offsetY - 5;
    fish.style.top = `${offsetY}px`;
    fish.style.backgroundImage = "url(img/fish-up.png)";
  }

  function moveDown() {
    if (offsetY >= window.innerHeight - fish.offsetHeight) {
      clearInterval(handle);
      return;
    }
    offsetY = offsetY + 5;
    fish.style.top = `${offsetY}px`;
    fish.style.backgroundImage = "url(img/fish-down.png)";
  }

  let currentKey = null;

  document.onkeydown = (event) => {
    console.log(event.key);
    switch (event.key) {
      case "ArrowLeft":
        if (currentKey === "ArrowLeft") return;
        clearInterval(handle);
        handle = setInterval(moveLeft, 20);
        currentKey = "ArrowLeft";
        break;
      case "ArrowRight":
        if (currentKey === "ArrowRight") return;
        clearInterval(handle);
        handle = setInterval(moveRight, 20);
        currentKey = "ArrowRight";
        break;
      case "ArrowUp":
        if (currentKey === "ArrowUp") return;
        clearInterval(handle);
        handle = setInterval(moveUp, 20);
        currentKey = "ArrowUp";
        break;
      case "ArrowDown":
        if (currentKey === "ArrowDown") return;
        clearInterval(handle);
        handle = setInterval(moveDown, 20);
        currentKey = "ArrowDown";
        break;
      case " ":
        if (currentKey === " ") return;
        clearInterval(handle);
        currentKey = " ";
        break;
    }
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
