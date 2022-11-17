document.addEventListener("DOMContentLoaded", ()=>{
    let body = document.body
    console.log("body -> ",body)
    const cars = ["Saab", "Volvo", "BMW"];
    let element = document.createElement('div')
    let heading = document.createElement('h3')
    heading.style.textAlign = 'center'
    element.style.display = 'flex'
    element.style.justifyContent = 'center'
    element.style.alignContent = 'center'
    element.style.flexDirection = 'column'
    element.style.textAlign = 'center'
    element.style.marginTop = '1rem'
    element.style.lineHeight = '1.5'
    for(let i=0;i<cars.length;i++){
        const para = document.createElement("p");
        para.innerText = cars[i];
        element.appendChild(para)
    }

    heading.innerHTML = 'Car Brand'

    body.appendChild(heading)
    body.appendChild(element)
});

console.log('hi there')