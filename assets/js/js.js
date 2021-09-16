document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("burger_menu").onclick=function (e) {
     e.target.classList.toggle("active")
        document.getElementById("menu").classList.toggle("active")
        document.body.classList.toggle("lock")
    }
    document.getElementById("menu_list").onclick=function (e) {
       document.getElementById("burger_menu").classList.remove("active")
        document.getElementById("menu").classList.remove("active")
        document.body.classList.remove("lock")
    }
})
