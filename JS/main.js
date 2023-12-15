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
        <a href="EmployeeInformation.html">Employee Information</a>
        <a href="vacation.html">vacation</a>
        <a href="index.html#serves">Serves</a>
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
    //---------------------- copyright Section 
    let copyright = document.querySelector('.copyright p>span');
    copyright.textContent = new Date().getFullYear();
}
footer();
function toggleClick(){
    const toggleClick = document.querySelector(".toggle");
    toggleClick.onclick = function(){
        if(toggleClick.classList.contains("click")){
        toggleClick.classList.remove("click");
        }
        else{
        toggleClick.classList.add("click");
        }
    }
}
//--------------------- saerch bar container box container
function searchHeaderBtn (){
let saerchBtn = document.querySelector('.header-btn button.search-btn');
let saerchBarContainer =document.querySelector('.saerch-bar-container');
saerchBtn.addEventListener('click',(e)=>{
    saerchBarContainer.classList.toggle("open");
});
}
function vacationCardBtn(){
    let saerchBtn2 = document.querySelector('.vacation-card a[href="Sear"]'); 
    let saerchBarContainer =document.querySelector('.saerch-bar-container');
    saerchBtn2.addEventListener('click',(e)=>{
        e.preventDefault();
        saerchBarContainer.classList.toggle("open");
    })
}
//------------------------saerch bar Table Form 
function searchBarFilter(){
const saerchBoxForm =document.querySelector(".saerch-box form");
const addEmployeeRequests = JSON.parse(localStorage.getItem("addEmployeeRequests")) || [];
const saerchTableactive = document.querySelector(".saerch-table");
saerchBoxForm.addEventListener('keyup',(e)=>{
    const searchString =  e.target.value.toLowerCase();
    saerchTableactive.textContent = "";
    const addEmployeeRequestsfilterd = addEmployeeRequests.filter((Employee) =>{
        return Employee.Name.toLowerCase().includes(searchString);
    })
    addEmployeeRequestsfilterd.forEach((request,index) => {
        let aLink = document.createElement("a");
        aLink.setAttribute("href","VacationForm.html");
        const row = saerchTableactive.insertRow(-1); 
        const cellNumber = row.insertCell(0);
        const cellName = row.insertCell(1);
        cellNumber.textContent = index + 1; 
        aLink.textContent = request.Name; 
        cellName.append(aLink);
    });
    saerchTableactive.classList.toggle("active");
});
}
function NaveLinks(){
    let navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((e) => {
        e.addEventListener('click',()=>{
            e.classList.toggle('active');
        });
    });
}
    NaveLinks();
    toggleClick();
    footer();
export{
    searchHeaderBtn,
    searchBarFilter,
    NaveLinks,
    footer,
    vacationCardBtn,
    toggleClick,
}