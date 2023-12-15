    import{
    searchHeaderBtn,
    searchBarFilter,
    footer,
    toggleClick,
    } from "./main.js";
    function addEmployeeRequests(){
    // Retrieve data from local storage
    const addEmployeeRequests = JSON.parse(localStorage.getItem("addEmployeeRequests")) || [];  
    console.log(addEmployeeRequests);  
    // Reference to the table
    const table = document.querySelector(".employees-info table");
    
    // Loop through the vacation requests and create a row for each employee
    addEmployeeRequests.forEach((request, index) => {
        const row = table.insertRow(-1); // Append a new row to the table
        const cellNumber = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellId = row.insertCell(2);
        const cellgender = row.insertCell(3);
        const celladdress = row.insertCell(4);
        const cellPhoneNumber = row.insertCell(5);
        const cellNOAVD = row.insertCell(6);
        const cellSalary = row.insertCell(7);
        const cellOperations = row.insertCell(8);
        cellNumber.textContent = index + 1; 
        cellName.textContent = request.Name; 
        cellId.textContent = request.id; 
        cellgender.textContent = request.gender;
        celladdress.textContent = request.address; 
        cellPhoneNumber.textContent = request.phoneNumber; 
        cellNOAVD.textContent = request.numberOfAvailableVacationDays; 
        cellSalary.textContent = "$" + request.salary; 
        // Create buttons for approval and rejection
        const spanEditButton = document.createElement("span");
        const aEditButton = document.createElement("a");
        aEditButton.setAttribute("href","Edit.html");
        spanEditButton.append(aEditButton)
        aEditButton.classList.add("edit-btn");
        aEditButton.textContent = "Edit";
        cellOperations.appendChild(aEditButton);
    });
    let ifemptyContainer =document.querySelector(".ifempty-container");
    if(addEmployeeRequests.length === 0){
        let ifempty =document.getElementById("ifempty");
        ifemptyContainer.classList.add("active");
        ifempty.textContent = " There is no employee added to the system yet , ";
        let aLinkinsideifempty =document.createElement("a");
        aLinkinsideifempty.setAttribute("href","addEmployee.html");
        aLinkinsideifempty.textContent = "add employee"; 
        ifempty.append(aLinkinsideifempty);
    }
    else{
        ifemptyContainer.classList.remove("active");
    }
    };
    addEmployeeRequests();
    toggleClick();
    searchHeaderBtn();
    searchBarFilter();
    footer();