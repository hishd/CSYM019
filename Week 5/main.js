function runOnLoad() {
    const button = document.getElementById("circle");
    let offsetX = button.offsetLeft;
    let offsetY = button.offsetTop;
    
    // button.addEventListener("click", () => {
    //     setInterval(() => {
    //         if(offset <= 0) return;
    //         offset = offset - 10;
    //         button.style.left = `${offset}px`;
    //     }, 200);
    // });

    document.onkeydown = function(e) {  
        switch (e.key) {  
            case 'ArrowLeft':  
                if(offsetX <= 0) return;
                offsetX = offsetX - 50;
                button.style.left = `${offsetX}px`;
                break;  
            case 'ArrowRight':  
                if(offsetX >= window.innerWidth - 200) return;
                offsetX = offsetX + 50;
                button.style.left = `${offsetX}px`;
                break;  
            case 'ArrowUp':
                if(offsetY <= 0) return;
                offsetY = offsetY - 50;
                button.style.top = `${offsetY}px`;
                break;
            case 'ArrowDown':
                if(offsetY >= window.innerHeight - 200) return;
                offsetY = offsetY + 50;
                button.style.top = `${offsetY}px`;
                break;
        }
    }
}

document.addEventListener("DOMContentLoaded", runOnLoad);