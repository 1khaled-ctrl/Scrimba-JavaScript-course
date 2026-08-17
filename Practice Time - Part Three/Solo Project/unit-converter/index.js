/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthResultEl = document.getElementById("length-result")
const volumeResultEl = document.getElementById("volume-result")
const massResultEl = document.getElementById("mass-result")

convertBtn.addEventListener("click", function () {
    const value = Number(inputEl.value)

    const feet = (value * 3.281).toFixed(3)
    const meters = (value / 3.281).toFixed(3)
    lengthResultEl.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`

    const gallons = (value * 0.264).toFixed(3)
    const liters = (value / 0.264).toFixed(3)
    volumeResultEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`

    const pounds = (value * 2.204).toFixed(3)
    const kilos = (value / 2.204).toFixed(3)
    massResultEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
})

convertBtn.click()
