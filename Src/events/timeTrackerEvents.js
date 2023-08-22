// To change the visibility of the additional options in the sidebar alternatively
show.addEventListener("click", function() {
    var additionalOptions = [kiosks, schedule, expenses, timeOff, activity, approvals, invoices];
    additionalOptions.forEach(option => option.classList.toggle("show-hidden"));

    if (show.classList.contains("hidden")) {
        show.querySelector(".sidebar-section__main-content__option__icon__img").style.rotate = "180deg";
        show.querySelector(".sidebar-section__main-content__option__context__txt").textContent = "SHOW LESS";
    }
    else {
        show.querySelector(".sidebar-section__main-content__option__icon__img").style.rotate = "360deg";
        show.querySelector(".sidebar-section__main-content__option__context__txt").textContent = "SHOW MORE";
    }

    show.classList.toggle("hidden");
});


// Mark the timesheet billable or not
timeTrackerBillSymbol.addEventListener("click", function() {
    var billSymbol = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__bill-btn__symbol");
    if(billSymbol.classList.contains("billable")){
        billSymbol.classList.toggle("billable");
    }
    else{
        billSymbol.classList.toggle("billable");
    }
});

// To show the dropdown for duplicate and delete
var entryMenu = document.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu");
entryMenu.addEventListener('click', function(){
    var duplicateDelete = document.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown");
    duplicateDelete.style.display = duplicateDelete.style.display === "flex" ? "none" : "flex";
});

// // To display the calendar when the user click the icon
// document.getElementById('calendar').addEventListener('click', function(){
//     document.getElementById('datepicker').click();
// });

// To show project name drop down menu
timeTrackerProjectImg.addEventListener("click", function() {
    timeTrackerProjectMenu.style.display = timeTrackerProjectMenu.style.display === "flex" ? "none" : "flex";
});
timeTrackerProjectTxt.addEventListener("click", function() {
    timeTrackerProjectMenu.style.display = timeTrackerProjectMenu.style.display === "flex" ? "none" : "flex";
});

// To show tag name finder drop down menu
var tagImg = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__img");
tagImg.addEventListener("click", function() {
    var tagMenu = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown");
    tagMenu.style.display = tagMenu.style.display === "flex" ? "none" : "flex";
});

// Timer trigger button to start and stop timer
var startTime, endTime, timerInterval, running = false;
var projectNameInput = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__name");
var tagNameInput = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name__input");
timeTrackerTriggerButton.addEventListener("click",function(){
    if (!running) {
        // Start the timer
        startTime = new Date();
        running = true;
        timeTrackerTriggerButton.textContent = "STOP";
        timeTrackerTriggerButton.style.backgroundColor = 'red';
        timeTrackerTriggerButton.style.borderColor = 'red';
        // Clear any existing interval and start a new one
        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
    } 
    else {
        endTime = new Date();
        var duration = endTime - startTime;
        var bill = timeTrackerBillSymbol.classList.contains("billable") ? 'yes' : 'no';
        // Store the data in local storage
        var projectInputData = [{
        "project-id": generateGUID(),
        "project-name": projectNameInput.value,
        "description": timeTrackerDescriptionBar.value,
        "tag": tagNameInput.value,
        "billable": bill,
        "duration": formatDuration(duration),
        "start-time": formatTime(startTime),
        "end-time": formatTime(endTime),
        "date": Date(),
        }];
    
        // Retrieve existing data from local storage
        var existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
        existingProjects.push(projectInputData);
    
        // Store the updated data in local storage
        localStorage.setItem("projects", JSON.stringify(existingProjects));

        // Stop the timer
        running = false;
        timeTrackerTriggerButton.textContent = "START";
        timeTrackerTriggerButton.style.backgroundColor = '#03a9f4';
        timeTrackerTriggerButton.style.borderColor = '#03a9f4';
    
        // Clear the input and timer display
        projectNameInput.value = "";
        timeTrackerDescription.value = "";
        tagNameInput.value = "";
        
        clearInterval(timerInterval);
        timeTrackerClock.textContent = "00:00:00";
    }
});

// Function to update the timer display
function updateTimer() {
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    timeTrackerClock.textContent = formatDuration(elapsedTime);
}

  // Function to format time as "HH:MM"
function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return `${formatUnit(hours)}:${formatUnit(minutes)}`;
}

  // Function to format duration as "HH:MM:SS"
function formatDuration(duration) {
    var hours = Math.floor(duration / 3600000);
    var minutes = Math.floor((duration % 3600000) / 60000);
    var seconds = Math.floor((duration % 60000) / 1000);
    return `${formatUnit(hours)}:${formatUnit(minutes)}:${formatUnit(seconds)}`;
}

  // Function to format time units with leading zeros
function formatUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}