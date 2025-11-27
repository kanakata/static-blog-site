let slider = document.querySelectorAll(".slider .item")
let pagination = document.querySelectorAll(".slider .paginations .pagination")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let menu = document.querySelector(".menu_display")
let links_ss = document.querySelector(".links_ss")

let active = 0
let len = slider.length

prev.addEventListener("click", ()=>{
    active--
    if(active < 0){
        active = len - 1
    }
    showSlider()
    clearInterval(int)
    int = setInterval(()=>{
        next.click()
    },3000)
})
next.addEventListener("click", ()=>{
    active++
    if(active >= len){
        active = 0
    }
    showSlider()
    clearInterval(int)
    int = setInterval(()=>{
        next.click()
    },5000)
})

let int = setInterval(()=>{
    next.click()
},5000)

function showSlider(){
    let activeOld = document.querySelector(".slider .item.active")
    let activeOld2 = document.querySelector(".slider .paginations .pagination.active")
    activeOld.classList.remove("active")
    activeOld2.classList.remove("active")

    slider[active].classList.add("active")
    pagination[active].classList.add("active")
}

menu.addEventListener("click", ()=>{
    links_ss.classList.toggle("show")
})

console.log("hello")

pagination.forEach((pag, index)=>{
    pag.addEventListener("click", ()=>{
        active = index      
        showSlider()
        clearInterval(int)
        int = setInterval(()=>{
            next.click()
        },5000)
    })
})