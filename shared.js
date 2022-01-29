let hamberger = document.querySelector(".hamberger");
let mobileSideMenu = document.querySelector(".moblie-side-menu")

let isMobileSideMenuAppearing = true;


mobileSideMenu.addEventListener("click", () => {
    mobileSideMenu.classList.remove("mobile-side-menu-appear")
    mobileSideMenu.classList.add("mobile-side-menu-disappear");
    isMobileSideMenuAppearing = false;
})

hamberger.addEventListener("click", () => {
    
    if (isMobileSideMenuAppearing === false) {
        console.log(true)
        mobileSideMenu.classList.remove("mobile-side-menu-disappear")
        mobileSideMenu.classList.add("mobile-side-menu-appear");
        isMobileSideMenuAppearing = true;
        
    } else {
        console.log(false)
        mobileSideMenu.classList.remove("mobile-side-menu-appear")
        mobileSideMenu.classList.add("mobile-side-menu-disappear");
        isMobileSideMenuAppearing = false;
    }
    
    
        
        
    
    
})

