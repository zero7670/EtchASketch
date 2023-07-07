
function myFunction(){
    const container = document.querySelector('#container');
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    let sign = prompt("Choose your grid size (0-100)");

    if (sign > 0 && sign < 100){
        for (let i = 0; i < sign; i++){
            const smallContainer = document.createElement('div');
            smallContainer.classList.add('smallContainer')
            for (let j = 0; j < sign; j++){  
                const contentTwo = document.createElement('div');
                contentTwo.classList.add('contentTwo');
                smallContainer.appendChild(contentTwo); 
                            
            }
            container.appendChild(smallContainer);
        }
    }
    else
        alert("ERROR, OUT OF RANGE")
    container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black";
    })
    
}








