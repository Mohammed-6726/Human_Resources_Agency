const toggleClick = document.querySelector(".toggle");
toggleClick.onclick = function(){
    if(toggleClick.classList.contains("click")){
    toggleClick.classList.remove("click");
    }
    else{
    toggleClick.classList.add("click");
    }
}
//--------------------- copyright Section 
let copyright = document.querySelector('.copyright p>span');
console.log(copyright);
copyright.textContent = new Date().getFullYear();