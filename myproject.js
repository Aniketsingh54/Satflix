let menu=document.querySelector(".menu-icon");
let sidebar=document.querySelector(".side-bar");
let container=document.querySelector(".container");
menu.onclick=function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}
let search=document.querySelector(".input")
let searchbar=document.querySelector(".search")
search.onfocus=function()
{
    searchbar.style.border="aqua solid 1px";
}
search.onblur=function()
{
    searchbar.style.border="rgb(58, 54, 54) solid 1px  ";

}