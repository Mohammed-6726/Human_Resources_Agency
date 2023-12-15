    import{
    searchHeaderBtn,
    searchBarFilter,
    NaveLinks,
    footer,
    toggleClick,
    } from "./main.js";
    const msg=document.getElementById("msg");
    const msgContainer =document.querySelector(".msg-container");

    function addEmployeeRequests(){
    let EmployeeForm = document.querySelector(".addEmployee-form form");
    EmployeeForm.addEventListener("submit", (e) => {
    // Validation for Employee Name
    let nameInput = document.getElementById('Name');
    if (nameInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please enter Employee Name";
    e.preventDefault();
    return;
    }
    let idInput = document.getElementById('id');
    if (idInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please enter Employee id";
    e.preventDefault();
    return;
    }
    let addressInput = document.getElementById('address');
    if (addressInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please enter Employee address";
    e.preventDefault();
    return;
    }
    let emailInput = document.getElementById('email');
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
    msgContainer.classList.add("error");
    msg.textContent="Please enter a valid Email address";
    e.preventDefault();
    return;
    }
          // Validation for gender (at least one radio button should be checked)
    let maleInput = document.getElementById('male');
    let femaleInput = document.getElementById('female');
    if (!maleInput.checked && !femaleInput.checked) {
    msgContainer.classList.add("error");
    msg.textContent="Please enter a valid Email address";
    e.preventDefault();
    return;
    }
    else{
        e.preventDefault();
    let addrequests = JSON.parse(localStorage.getItem("addEmployeeRequests")) || [];
    let addrequest = {
        Name: document.getElementById("Name").value,
        id: document.getElementById("id").value,
        address: document.getElementById("address").value,
        phoneNumber: document.getElementById("phone-number").value,
        dateOfBirth: document.getElementById("date-of-birth").value,
        salary: document.getElementById("salary").value,
        numberOfActualApproved: document.getElementById("number-of-actual-approved").value,
        numberOfAvailableVacationDays: document.getElementById("number-of-available-vacation-days").value,
        maritalStatus: document.getElementById("marital-status").value,
        gender: document.querySelector('input[name="gender"]:checked').value 
    };
    addrequests.push(addrequest);
    // Store the updated requests array in local storage
    localStorage.setItem("addEmployeeRequests", JSON.stringify(addrequests));
    
    // Clear form fields
    document.forms[1].reset();
        msgContainer.classList.add("active");
        msg.textContent="!! The form has been submitted successfully"
    }
    setTimeout((e)=>{
        msg.textContent=""
        msgContainer.classList.remove("active");
    },4000)
    });
    }
    addEmployeeRequests();
    toggleClick();
    NaveLinks();
    searchHeaderBtn();
    searchBarFilter();
    footer();