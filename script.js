const botaoAbrir = document.querySelector("header.mobile > button")
const botaoFechar = document.querySelector("header-mobile nav button ")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile ")

console.log(body)

botaoAbrir.addEventListener('click',abrirmenu)
botaoAbrir.addEventListener('click',FecharMenu)

function abrirmenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")


    
}
function FecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}
