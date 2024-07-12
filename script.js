/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterEl = document.getElementById("meter-el-1")
const feetEl = document.getElementById("feet-el-1")
const literEl = document.getElementById("liter-el-1")
const gallonEl = document.getElementById("gallon-el-1")
const kiloEl = document.getElementById("kilo-el-1")
const poundEl = document.getElementById("pound-el-1")

const meterEl2 = document.getElementById("meter-el-2")
const feetEl2 = document.getElementById("feet-el-2")
const literEl2 = document.getElementById("liter-el-2")
const gallonEl2 = document.getElementById("gallon-el-2")
const kiloEl2 = document.getElementById("kilo-el-2")
const poundEl2 = document.getElementById("pound-el-2")

convertBtn.addEventListener("click", function(){
    firstRender()
    secondRender()

})


function conversion(number){
    if (number){
        let meterToFeet = (number * 3.281).toFixed(3)
        let feetToMeter = (number * (1/3.281)).toFixed(3)
        let literToGallon = (number * 0.264).toFixed(3)
        let gallonToLitre = (number * (1/0.264) ).toFixed(3) 
        let kilogramToPound = (number * 2.204).toFixed(3)
        let poundToKilogram = (number * (1/2.204)).toFixed(3)

        return meterEl2.textContent = meterToFeet, feetEl2.textContent = feetToMeter, literEl2.textContent = literToGallon, gallonEl2.textContent = gallonToLitre, kiloEl2.textContent = kilogramToPound, poundEl2.textContent = poundToKilogram
    }    
    else{
       alert("Enter a value!")
       return meterEl.textContent = 0 ,feetEl.textContent =  0, gallonEl.textContent = 0,literEl.textContent = 0,  kiloEl.textContent = 0, poundEl.textContent = 0 , meterEl2.textContent = 0, feetEl2.textContent = 0, literEl2.textContent = 0, gallonEl2.textContent = 0, kiloEl2.textContent = 0, poundEl2.textContent = 0
    }}       
    




    function firstRender(){
        let value = inputEl.value
        // console.log(value1)
        // meterEl.textContent = value1
        // console.log(meterEl.textContent)
        return (meterEl.textContent = value ,feetEl.textContent = value, gallonEl.textContent = value,literEl.textContent = value,  kiloEl.textContent = value, poundEl.textContent = value )
    
    }

    function secondRender(){
        let myValue = parseInt(inputEl.value)
        conversion(myValue)
    }

