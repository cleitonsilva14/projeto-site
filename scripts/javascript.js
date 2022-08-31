const red = document.querySelector('input#r')
const green = document.querySelector('input#g')
const blue = document.querySelector('input#b')


let valueRed = red.value
let valueGreen = green.value
let valueBlue = blue.value

const divColor = document.querySelector('div.container')


function updateColor(){
    divColor.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`
}


red.addEventListener('mousemove', ()=>{
    valueRed = red.value
    document.querySelector("span#spanRed").innerHTML = document.querySelector('input#r').value
    updateColor()

})

green.addEventListener('mousemove', ()=>{
    valueGreen = green.value
    document.querySelector("span#spanGreen").innerHTML = document.querySelector('input#g').value
    updateColor()
})

blue.addEventListener('mousemove', ()=>{
    valueBlue = blue.value
    document.querySelector("span#spanBlue").innerHTML = document.querySelector('input#b').value
    updateColor()
})

console.log(valueRed, valueGreen, valueBlue)
