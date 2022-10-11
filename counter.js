const wrapper = document.querySelectorAll(".form-wrap-item-num");
const bigBox = document.getElementById("big-box");
const smallBox = document.getElementById("small-box");
const bigpackage = document.getElementById("big-package");
const smallpackage = document.getElementById("small-package");
const summ = document.getElementById("summ");

let total = 0

let bigBoxPrice = 1.5
let smallBoxPrice = 0.5
let bigpackagePrice = 2
let smallpackagePrice = 0.5


let bigBoxPriceTotal = 0
let smallBoxPriceTotal = 0
let bigpackagePriceTotal = 0
let smallpackagePriceTotal = 0
let checked = 0

wrapper.forEach(el => {
    const counterInput = el.querySelector(".counter");
    const descrBtn = el.querySelector(".decr");
    const incrBtn = el.querySelector(".incr");

    descrBtn.addEventListener("click", () => {
        counterInput.stepDown()
        calculated()
    })

    incrBtn.addEventListener("click", () => {
        counterInput.stepUp()
        calculated()
    })

    counterInput.addEventListener("input", (e) => {
        calculated()
    })
})


const calculated = () => {
    bigBoxPriceTotal = Number(bigBox.value) * bigBoxPrice
    smallBoxPriceTotal = Number(smallBox.value) * smallBoxPrice
    bigpackagePriceTotal = Number(bigpackage.value) * bigpackagePrice
    smallpackagePriceTotal = Number(smallpackage.value) * smallpackagePrice

    total = bigBoxPriceTotal + smallBoxPriceTotal + bigpackagePriceTotal + smallpackagePriceTotal + checked
    summ.innerHTML = total
}


document.querySelectorAll("input[name='delivery']").forEach((input) => {
    input.addEventListener('change', () => {
        console.log(event.target.id)
        if (event.target.id === "deliv") {
            checked = 5
        } else {
            checked = 0
        }
        calculated()
    });
});




