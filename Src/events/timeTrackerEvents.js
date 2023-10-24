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

// To change the project name dynamically in the dropdown
var inPName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__name');
var outPName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__press__click');
inPName.addEventListener('input', function() {
    var pName = this.value;
    outPName.textContent = `create '${pName}' project.`;
});

// To fix the project name in the bar
var createPName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__press__click');
createPName.addEventListener('click',function(){
    if(inPName.value !== ""){
        timeTrackerProjectMenu.style.display = "none";
        timeTrackerProjectAddTxt.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__txt__add-txt");
        timeTrackerProjectAddTxt.classList.toggle("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt");
        timeTrackerProjectAddTxt.textContent = inPName.value;
        timeTrackerProjectAddImg.style.display = "none";
        timeTrackerProjectImg.classList.toggle("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__dot");
    }
});

// To change the tag name dynamically in the dropdown
var inTName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name__input');
var outTName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__click');
inTName.addEventListener('input', function() {
    var tName = this.value;
    outTName.textContent = `create '${tName}' project.`;
});

// To fix the project tag in the bar
var createTName = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__click");
createTName.addEventListener('click',function(){
    timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn");
    timeTrackerTag.innerHTML = `<div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected__txt"></div>`;
    var fixTName = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected__txt");
    timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected");
    fixTName.textContent = inTName.value;
});

// To show project name drop down menu
timeTrackerProjectImg.addEventListener("click", function() {
    if (timeTrackerProjectAddTxt.textContent == "Project" && timeTrackerProjectAddTxt.textContent !== ""){
        timeTrackerProjectMenu.style.display = timeTrackerProjectMenu.style.display === "flex" ? "none" : "flex";
    }
});
timeTrackerProjectTxt.addEventListener("click", function() {
    if (timeTrackerProjectAddTxt.textContent == "Project" && timeTrackerProjectAddTxt.textContent !== ""){
        timeTrackerProjectMenu.style.display = timeTrackerProjectMenu.style.display === "flex" ? "none" : "flex";
    }
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
        if (timeTrackerProjectAddTxt.textContent !== "Project" && timeTrackerProjectAddTxt.textContent !== ""){
            endTime = new Date();
            var duration = endTime - startTime;
            var billing = timeTrackerBillSymbol.classList.contains("billable") ? true : false;
            // Store the data in local storage
            const projectInputData = {
            "project-id": generateGUID(),
            "project-name": projectNameInput.value,
            "description": timeTrackerDescriptionBar.value,
            "tag": tagNameInput.value,
            "billable": billing,
            "duration": formatDuration(duration),
            "start-time": formatTime(startTime),
            "end-time": formatTime(endTime),
            "date": Date(),
            };
            // Retrieve existing data from local storage
            const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
            existingProjects.push(projectInputData);
        
            // Store the updated data in local storage
            localStorage.setItem("projects", JSON.stringify(existingProjects));

            // Stop the timer
            running = false;
            timeTrackerTriggerButton.textContent = "START";
            timeTrackerTriggerButton.style.backgroundColor = '#03a9f4';
            timeTrackerTriggerButton.style.borderColor = '#03a9f4';
                
            // Display the entry
                if(displayEntry()){
                    // Clear the input and timer display
                    projectNameInput.value = "";
                    timeTrackerDescriptionBar.value = "";
                    tagNameInput.value = "";
                    
                    // Clear project name changes
                    timeTrackerProjectAddTxt.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__txt__add-txt");
                    timeTrackerProjectAddTxt.classList.toggle("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt");
                    timeTrackerProjectAddTxt.textContent = "Project";
                    timeTrackerProjectAddImg.style.display = "flex";
                    timeTrackerProjectImg.classList.toggle("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__dot");

                    // Clear tag name
                    if(timeTrackerTag.classList.contains("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected")){
                        timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected");
                        timeTrackerTag.innerHTML = ``;
                        timeTrackerTag.innerHTML = `<div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown">
                                                    <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name">
                                                        <input type="text" placeholder="Add/Find tags... " class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name__input">
                                                        <img src="./assets/icons/close.svg" class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__close-img"/></input> 
                                                    </div>
                                                    <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view">
                                                        <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__no-match">No matching tag</div>
                                                        <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press">
                                                            <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__shortcut">Press Ctrl+Enter to quickly</div>
                                                            <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__click">create tag.</div>
                                                        </div>
                                                    </div>
                                                </div>`
                        timeTrackerTag.appendChild(timeTrackerTagImg);
                        timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn");
                        // To change the tag name dynamically in the dropdown
                        var inTName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name__input');
                        var outTName = document.querySelector('.time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__click');
                        inTName.addEventListener('input', function() {
                            var tName = this.value;
                            outTName.textContent = `create '${tName}' project.`;
                        });
                        // To fix the project tag in the bar
                        var createTName = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__quick-view__press__click");
                        createTName.addEventListener('click',function(){
                            timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn");
                            timeTrackerTag.innerHTML = `<div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected__txt"></div>`;
                            var fixTName = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected__txt");
                            timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected");
                            fixTName.textContent = inTName.value;
                        });
                    }

                    clearInterval(timerInterval);
                    timeTrackerClock.textContent = "00:00:00";
                }
                else{
                    alert("Internal server error");
                }
        }
        else{
            alert("Can't save, field missing: Project name");
        }
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

// Function to display the data in the entry section
function displayEntry(){
    timeTrackerEntrySection.innerHTML = "";
    timeTrackerEntrySection.appendChild(timeTrackerEntry);
    var entrySection = document.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content");
    entrySection.innerHTML = "";
    // Retrieve existing data from local storage
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

    existingProjects.forEach(project => {
        var map = mapEntry(project["project-id"], project["project-name"], project["description"], project["tag"], 
                            project["billable"], project["start-time"], project["end-time"], project["duration"], project["date"]);
        entrySection.appendChild(map);
    });

    // Get all the menu button elements & To show the dropdown for duplicate and delete
    var menuButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu');
    menuButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
        if (entries) {
            var entryId = entries.getAttribute('id');
            var selectEntry = document.getElementById(entryId);
            var duplicateDelete = selectEntry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown");
            duplicateDelete.style.display = duplicateDelete.style.display === "flex" ? "none" : "flex";
        }
    });
    });

    // Event listeners to delete the entry
    var deleteButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown__delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if (entries) {
                var entryId = entries.getAttribute('id');
                var projectIndexToRemove = existingProjects.findIndex(project => project["project-id"] === entryId);
                if (projectIndexToRemove !== -1) {
                    existingProjects.splice(projectIndexToRemove, 1);
                }
                localStorage.setItem("projects", JSON.stringify(existingProjects));
            }
            alert(`${entryId} project deleted successfully`);
            displayEntry();
        });
    });

    // Event listeners to duplicate the entry
    var duplicateButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown__duplicate')
    duplicateButtons.forEach(button => {
        button.addEventListener('click', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if (entries) {
                var entryId = entries.getAttribute('id');
                var projectToDuplicate = existingProjects.find(project => project["project-id"] === entryId);
                if (projectToDuplicate) {
                    var duplicatedProject = { ...projectToDuplicate };
                    var newId = generateGUID(); 
                    duplicatedProject["project-id"] = newId;
                    existingProjects.push(duplicatedProject);
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                }
            }
            alert(`${newId} project duplicated successfully`);
            displayEntry();
        });
    });

    return true;
}

// function weekEntry(){
//     const weekEntry = document.createElement("div");
//     weekEntry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry");
//     weekEntry.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__week">This week</div>
//                             <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total">
//                                 <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__title">Week total:</div>
//                                 <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative">
//                                     <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative__duration">00:00:00</div>
//                                 </div>
//                             </div>`;
    
//     return weekEntry;
// }

// function dayEntry(){
//     const dayEntry = document.createElement("div");
//     dayEntry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry");
//     dayEntry.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__day">Today</div>
//                                 <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total">
//                                     <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__title">Total:</div>
//                                 <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative">
//                                     <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__duration">00:00:00</div>
//                                 </div>
//                                 <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__bulk-edit">
//                                     <img src="./assets/icons/bulk-edit.svg" alt="bulk-edit" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__bulk-edit__icon"/>
//                                 </div>
//                             </div>`;

//     return dayEntry;
// }

function mapEntry(storedProjectId, storedProjectName, storedDescription, storedTag, storedBill, storedStart, storedEnd, storedTime, storedDate){

    var entry = document.createElement("div");
    entry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry");
    entry.setAttribute("id", storedProjectId);
    entry.innerHTML = `<input type="text" placeholder="Add description" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__description"/>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project">
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__dot"></div>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt">Project</div>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag">
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__txt"></div>
                            <img src="./assets/icons/Tag empty.svg" alt="tag-icon" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__img"/>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__bill">$</div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time">
                            <input type="text" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__start"/>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__gap">-</div>
                            <input type="text" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__end"/>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__calendar">
                            <input type="date" style="max-width:1.3rem; outline:none;"/>
                        </div>
                        <input type="text" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__duration"/>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__play">
                            <img src="./assets/icons/play.svg" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__play__icon"/>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu">
                            <img src="./assets/icons/menu-dots-vertical.svg" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__icon"/>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown">
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown__duplicate">Duplicate</div>
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__menu__dropdown__delete">Delete</div>
                            </div>
                        </div>`;

    var projectName = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt");
    var description = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__description");
    var tagText = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__txt");
    var tagImage =entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__img");
    var bill = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__bill");
    var start = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__start");
    var end = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__end");
    var time = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__duration");
    var date = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__calendar");

    var tagDiv = entry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag");
    projectName.textContent = storedProjectName;
    description.value = storedDescription;
    storedTag === "" ? (tagImage.style.display = "flex", tagDiv.style.borderLeft = ".07rem dotted rgb(197,210,217)") : (tagImage.style.display = "none", tagText.style.display = "flex", tagText.textContent = storedTag);
    storedBill === true ? bill.style.color ='#03a9f4' : bill.style.color = 'rgb(197,210,217)';
    start.value = storedStart;
    end.value = storedEnd;
    time.value = storedTime;
    date.value = storedDate;

    return entry;
}
