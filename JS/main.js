//-------------------footer Content function
function footer(){
    const footerContent = `
    <div class="footer container">
    <div class="footer-box">
        <div class="logo"><img src="imgs/logo.png"></div>
        <div class="social">
        <a href="#"><i class="bx bxl-facebook"></i></a>
        <a href="#"><i class="bx bxl-instagram"></i></a>
        <a href="#"><i class="bx bxl-twitter"></i></a>
        <a href="#"><i class="bx bxl-youtube"></i></a>
    </div>
    </div>
    <div class="footer-box">
        <h3>pages</h3>
        <a href="index.html">Home</a>
        <a href="addEmployee.html">Add Employee</a>
    </div>
    <div class="footer-box">
        <h3>Legal</h3>
        <a href="#">Privce Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">Terms Of use</a>
        <a href="#">Disclamer</a>
    </div>
    <div class="footer-box">
        <h3>Branches</h3>
        <p>United States</p>
        <p>Saudi Arabia</p>
        <p>Japan</p>
        <p>Germany</p>
    </div>
</div>
<div class="copyright">
    <p>© <span></span> .Web technology Project 1 Human Resources Website </p>
</div>
`
    const fullFooterContent = document.querySelector('.full-footer-content');
    fullFooterContent.innerHTML = footerContent
}
footer();
const toggleClick = document.querySelector(".toggle");
toggleClick.onclick = function(){
    if(toggleClick.classList.contains("click")){
    toggleClick.classList.remove("click");
    }
    else{
    toggleClick.classList.add("click");
    }
}
//EmployeeInformation page section  employees-info 

//--------------------- saerch bar container box container
const saerchBtn = document.querySelector('.header-btn button.search-btn');
const saerchBtn2 = document.querySelector('.vacation-card span>a[href=Sear]');
// console.log(saerchBtn2);
const saerchBarContainer =document.querySelector('.saerch-bar-container');
console.log(saerchBtn);
saerchBtn.addEventListener('click',(e)=>{
    saerchBarContainer.classList.toggle("open");
})
saerchBtn2.addEventListener('click',(e)=>{
    e.preventDefault();
    saerchBarContainer.classList.toggle("open");
})
//------------------------saerch bar Table Form 
const saerchTable =document.querySelector(".saerch-table");
const saerchBoxForm =document.querySelector(".saerch-box form");
saerchBoxForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    saerchTable.classList.toggle("active");
})

//---------------------- copyright Section 
let copyright = document.querySelector('.copyright p>span');
console.log(copyright);
copyright.textContent = new Date().getFullYear();
