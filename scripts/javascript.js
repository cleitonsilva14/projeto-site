window.onload = function(){
    const inputRed = document.querySelector('input#red')
    const inputGreen = document.querySelector('input#green')
    const inputBlue = document.querySelector('input#blue')

    const spanRed = document.querySelector('span#spanRed')
    const spanGreen = document.querySelector('span#spanGreen')
    const spanBlue = document.querySelector('span#spanBlue')

    const hex = document.querySelector('p#colorHex')
    const container = document.querySelector('div#container')



    inputRed.addEventListener('input', function(){
        //liveUpdate(this.value, this.name)
        liveUpdate()
    })

    inputGreen.addEventListener('input', function(){
        liveUpdate()
    })

    inputBlue.addEventListener('input', function(){
        liveUpdate()
    })

    function hexColor(red, green, blue){
        let h = "#";
        
    }

    function liveUpdate(){
        let r = inputRed.value
        let g = inputGreen.value
        let b = inputBlue.value
        
        spanRed.innerText = r
        spanGreen.innerText = g
        spanBlue.innerText = b
         
        container.style.backgroundColor = `rgb(${r},${g},${b})`

    }



    //alert(`${inputRed.value}, ${inputGreen.value}, ${inputBlue.value}`)
    
}
