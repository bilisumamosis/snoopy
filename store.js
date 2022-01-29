let tshirts = document.querySelector(".t-shirts");
let tshirtsNav = document.querySelector(".t-shirts-nav");

let jackets = document.querySelector(".jackets")
let jacketsNav = document.querySelector(".jackets-nav")

let socks = document.querySelector(".socks")
let socksNav = document.querySelector(".socks-nav")

tshirts.classList.remove("invisible")
tshirts.classList.add("visible")

jackets.classList.remove("visible")
jackets.classList.add("invisible")

socks.classList.remove("visible")
socks.classList.add("invisible")


tshirtsNav.classList.remove("not-selected")
tshirtsNav.classList.add("selected")

tshirtsNav.addEventListener("click", () => {
    tshirtsNav.classList.remove("not-selected")
    tshirtsNav.classList.add("selected")

    jacketsNav.classList.remove("selected")
    jacketsNav.classList.add("not-selected")

    socksNav.classList.remove("selected")
    socksNav.classList.add("not-selected")


    jackets.classList.remove("visible")
    jackets.classList.add("invisible")

    socks.classList.remove("visible")
    socks.classList.add("invisible")

    tshirts.classList.remove("invisible")
    tshirts.classList.add("visible")
    
})


jacketsNav.addEventListener("click", () => {
    jacketsNav.classList.remove("not-selected")
    jacketsNav.classList.add("selected")

    tshirtsNav.classList.remove("selected")
    tshirtsNav.classList.add("not-selected")

    socksNav.classList.remove("selected")
    socksNav.classList.add("not-selected")

    tshirts.classList.remove("visible")
    tshirts.classList.add("invisible")

    socks.classList.remove("visible")
    socks.classList.add("invisible")

    jackets.classList.remove("invisible")
    jackets.classList.add("visible")
})

socksNav.addEventListener("click", () => {
    socksNav.classList.remove("not-selected")
    socksNav.classList.add("selected")

    tshirtsNav.classList.remove("selected")
    tshirtsNav.classList.add("not-selected")

    jacketsNav.classList.remove("selected")
    jacketsNav.classList.add("not-selected")

    


    tshirts.classList.remove("visible")
    tshirts.classList.add("invisible")

    jackets.classList.remove("visible")
    jackets.classList.add("invisible")

    socks.classList.remove("invisible")
    socks.classList.add("visible")
})

