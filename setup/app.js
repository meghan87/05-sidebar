const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");


sidebarToggle.addEventListener("click",function(){
    console.log(sidebar);
    sidebar.classList.add("show-sidebar");
})



closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
    console.log(sidebar);
})