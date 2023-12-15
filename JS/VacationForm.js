    import{
    searchHeaderBtn,
    searchBarFilter,
    NaveLinks,
    footer,
    toggleClick,
    } from "./main.js";
    const msg=document.getElementById("msg");
    const msgContainer =document.querySelector(".msg-container");
    function vacationRequests(){
    let EmployeeForm = document.querySelector(".EmployeeForm-form form");
    EmployeeForm.addEventListener("submit", (e) => {
      // Validation for Employee Name
    let nameInput = document.getElementById('Name');
    if (nameInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent = "!Please enter Employee Name";
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
    let fromDateInput = document.getElementById('fromdate');
    if (fromDateInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please select From Date";
    e.preventDefault();
    return;
    }
    let toDateInput = document.getElementById('todate');
    if (toDateInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please select To Date";
    e.preventDefault();
    return;
    }
    if (toDateInput.value < fromDateInput.value) {
    msgContainer.classList.add("error");
    msg.textContent="!To Date should not be earlier than From Date";
    e.preventDefault();
    return;
    }
    let reasonInput = document.getElementById('reason');
    if (reasonInput.value === '') {
    msgContainer.classList.add("error");
    msg.textContent="!Please enter your Reason";
    e.preventDefault();
    return;
    }
    else{
    e.preventDefault();
    // Retrieve existing vacation requests from local storage
    let requests = JSON.parse(localStorage.getItem("vacationRequests")) || [];
    let request = {
        fullName: document.getElementById("Name").value,
        id: document.getElementById("id").value,
        fromDate: document.getElementById("fromdate").value,
        toDate: document.getElementById("todate").value,
        reason: document.getElementById("reason").value
    };
    requests.push(request);
    // Store the updated requests array in local storag
    localStorage.setItem("vacationRequests", JSON.stringify(requests));
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
    vacationRequests();
    searchHeaderBtn();
    searchBarFilter();
    NaveLinks();
    toggleClick();
    footer();