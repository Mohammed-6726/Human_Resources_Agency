    import{
    searchHeaderBtn,
    searchBarFilter,
    NaveLinks,
    footer,
    toggleClick,
    } from "./main.js";
    //---------------------------------------------Review Submitted function
    function vacationRequests(){
    // Retrieve data from local storage
    const vacationRequests = JSON.parse(localStorage.getItem("vacationRequests")) || [];
    console.log(vacationRequests);
    // Reference to the table
    const table = document.querySelector(".review-table table");
    // Loop through the vacation requests and create a row for each employee
    vacationRequests.forEach((request, index) => {
    const row = table.insertRow(-1); // Append a new row to the table
    const cellNumber = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellId = row.insertCell(2);
    const cellFromDate = row.insertCell(3);
    const cellToDate = row.insertCell(4);
    const cellOperations = row.insertCell(5);
    cellNumber.textContent = index + 1; // Add the employee number
    cellName.textContent = request.fullName; // Add the employee name
    cellId.textContent = request.id; // Add the employee ID
    cellFromDate.textContent = request.fromDate; // Add the "From Date"
    cellToDate.textContent = request.toDate; // Add the "To Date"
    // Create buttons for approval and rejection
    const approvalButton = document.createElement("button");
    approvalButton.classList.add("app-btn");
    approvalButton.textContent = "Approval";
    const rejectionButton = document.createElement("button");
    rejectionButton.classList.add("rej-btn");
    rejectionButton.textContent = "Rejection";
    cellOperations.appendChild(approvalButton);
    cellOperations.appendChild(rejectionButton);
    const approveButtons = document.querySelectorAll('.app-btn');
    const rejectButtons = document.querySelectorAll('.rej-btn');

    approveButtons.forEach(button => {
    button.addEventListener('click', function() {
    const id = request.id;
    console.log(`Vacation ${id} approve`);
    })});

    rejectButtons.forEach(button => {
    button.addEventListener('click', function() {
    const id = request.id;
    console.log(`Vacation ${id} reject`);
    })});

    });
    let ifemptyContainer =document.querySelector(".ifempty-container");
    if(vacationRequests.length === 0){
        let ifempty =document.getElementById("ifempty");
        ifemptyContainer.classList.add("active");
        ifempty.textContent = " There is no employee has a Vacation Form Submitted to the system yet , ";
        let aLinkinsideifempty =document.createElement("a");
        aLinkinsideifempty.setAttribute("href","Vacation.html");
        aLinkinsideifempty.textContent = "Submit a Vacation Form"; 
        ifempty.append(aLinkinsideifempty);
    }
    else{
        ifemptyContainer.classList.remove("active");
    }
    };
    vacationRequests();
    searchHeaderBtn();
    searchBarFilter();
    NaveLinks();
    toggleClick();
    footer();