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

// Retrieve existing data from local storage
const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

// Timer trigger button to start and stop timer
var startTime, endTime, timerInterval, running = false;
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
            var projectNameInput = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__name");
            var tagNameInput = document.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__selected__txt");
            var dateString = (new Date()).toISOString().substr(0, 10);
            
            // Store the data in local storage
            const projectInputData = {
            "project-id": generateGUID(),
            "project-name": projectNameInput.value,
            "description": timeTrackerDescriptionBar.value,
            "tag": (tagNameInput !== null) ? tagNameInput.textContent : "",
            "billable": billing,
            "duration": formatDuration(duration),
            "start-time": formatTime(startTime),
            "end-time": formatTime(endTime),
            "date": dateString,
            };

            existingProjects.push(projectInputData);
            existingProjects.sort((a, b) => new Date(b["date"]) - new Date(a["date"]));
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
                    if(tagNameInput) tagNameInput.value = ""
                    
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
                        timeTrackerTag.classList.toggle("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn");
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

// Function to format milliseconds to duration as "HH:MM:SS"
function formatDuration(duration) {
    var hours = Math.floor(duration / 3600000);
    var minutes = Math.floor((duration % 3600000) / 60000);
    var seconds = Math.floor((duration % 60000) / 1000);
    return `${formatUnit(hours)}:${formatUnit(minutes)}:${formatUnit(seconds)}`;
}

// Function to convert seconds to duration
function secondsToDuration(duration) {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration % 3600) / 60);
    var seconds = duration % 60;
    return `${formatUnit(hours)}:${formatUnit(minutes)}:${formatUnit(seconds)}`;
}

// Function to parse duration string in "HH:MM:SS" format and return total seconds
function durationToSeconds(duration) {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

// Function to convert HH:MM:SS to HH:SS
function durationToTime(timeStr) {
    var parts = timeStr.split(':');
    if (parts.length >= 2) {
        var hours = parseInt(parts[0]);
        var minutes = parseInt(parts[1]);
        if (minutes >= 60) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
        if (hours >= 24) {
            hours = hours % 24;
        }
        return `${formatUnit(hours)}:${formatUnit(minutes)}`;
    }
    return timeStr;
}

// Function to parse time in "HH:MM" or "HH:MM:SS" format to give date time format
function parseTime(timeStr) {
    var parts = timeStr.split(':');
    if (parts.length >= 2) {
        var hours = parseInt(parts[0]);
        var minutes = parseInt(parts[1]);
        var seconds = parts.length === 3 ? parseInt(parts[2]) : 0;
        return new Date(0, 0, 0, hours, minutes, seconds);
    }
    alert(`Invalid time format`);
}

// Function to format time units with leading zeros
function formatUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function weekEntry(weekName, duration){
    const weekEntry = document.createElement("div");
    weekEntry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry");
    weekEntry.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__week">This week</div>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total">
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__title">Week total:</div>
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative">
                                    <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative__duration">00:00:00</div>
                                </div>
                            </div>`;
    
    var week = weekEntry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__week");
    var weekTotal = weekEntry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative__duration");

    week.textContent = weekName;
    weekTotal.textContent = duration;

    return weekEntry;
}

function dayEntry(dayName, duration){
    const dayEntry = document.createElement("div");
    dayEntry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry");
    dayEntry.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__day">Today</div>
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total">
                                    <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__title">Total:</div>
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative">
                                    <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__duration">00:00:00</div>
                                </div>
                                <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__bulk-edit">
                                    <img src="./assets/icons/bulk-edit.svg" alt="bulk-edit" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__bulk-edit__icon"/>
                                </div>
                            </div>`;

    var day = dayEntry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__day");
    var dayTotal = dayEntry.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content__day-entry__total__cumulative__duration");

    day.textContent = dayName;
    dayTotal.textContent = duration;

    return dayEntry;
}

// map the data from the local storage to the entry field
function mapEntry(storedProjectId, storedProjectName, storedDescription, storedTag, storedBill, storedStart, storedEnd, storedTime, storedDate){

    var entry = document.createElement("div");
    entry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry");
    entry.setAttribute("id", storedProjectId);
    entry.innerHTML = `<input type="text" placeholder="Add description" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__description"/>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project">
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__dot"></div>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt"></div>
                            <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu">
                                <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input">
                                    <input type="text" placeholder="Find project or client... " class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__name">
                                    <img src="./assets/icons/close.svg" class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__close"/></input>
                                </div>
                                <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view">
                                    <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__no-match">No matching projects</div>
                                    <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__press">
                                        <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__press__shortcut">Press Ctrl+Enter to quickly</div>
                                        <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__press__click">create project.</div>
                                    </div>
                                </div>
                                <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__create">
                                    <img src="./assets/icons/plus-blue.svg" class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__create__img"/>
                                    <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__quick-view__create__txt">Create new project</div>
                                </div>
                                <img src="./assets/icons/drag-corner.404f1a5f1bd7b848.svg" class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__drager"/>
                            </div>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag">
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__txt"></div>
                            <img src="./assets/icons/Tag empty.svg" alt="tag-icon" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__img"/>
                            <div class="time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown">
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
                            </div>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__bill">$</div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time">
                            <input type="text" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__start"/>
                            <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__gap">-</div>
                            <input type="text" class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__end"/>
                        </div>
                        <div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__calendar">
                            <input class="calendar" type="date" style="max-width:8rem; outline:none;"/>
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
    var dateObject = (new Date(storedDate)).toISOString().split("T")[0];
    projectName.textContent = storedProjectName;
    description.value = storedDescription;
    storedTag === "" ? (tagImage.style.display = "flex", tagDiv.style.borderLeft = ".07rem dotted rgb(197,210,217)") : (tagImage.style.display = "none", tagText.style.display = "flex", tagText.textContent = storedTag);
    storedBill === true ? bill.classList.toggle("billable") : bill.style.color = 'rgb(197,210,217)';
    start.value = storedStart;
    end.value = storedEnd;
    time.value = storedTime;
    date.value = dateObject;

    return entry;
}

// To show the drop down for project name
function dropDownForProjectName(){
    var projectButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__project__txt');
    projectButtons.forEach(button => {
        button.addEventListener('click', function(event){
        var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
        if (entries) {
            var entryId = entries.getAttribute('id');
            var selectEntry = document.getElementById(entryId);
            var projectDropDown = selectEntry.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu");
            projectDropDown.style.display = projectDropDown.style.display === "flex" ? "none" : "flex";
        }
        });
    });
}

// To show the drop down for tag name
function dropDownForTagName(){
    // var tagButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag');
    var tagButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__txt, .time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__tag__img');
    tagButtons.forEach(button => {
        button.addEventListener('click', function(event){
        var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
        if (entries) {
            var entryId = entries.getAttribute('id');
            var selectEntry = document.getElementById(entryId);
            var tagDropDown = selectEntry.querySelector(".time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown");
            tagDropDown.style.display = tagDropDown.style.display === "flex" ? "none" : "flex";
        }
        });
    });
}

// To update the project name of the entry
function updateProjectName(){
    var projectNameInputs = document.querySelectorAll('.time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input__name');
    projectNameInputs.forEach(input => {
        input.addEventListener('change', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    projectToUpdate["project-name"] = event.target.value;
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                    displayEntry();
                }
            }
        });
    });
}

// To update the tag name of the entry
function updateTagName(){
    var tagNameInputs = document.querySelectorAll('.time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__dropdown__tag-name__input');
    tagNameInputs.forEach(input => {
        input.addEventListener('change', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    projectToUpdate["tag"] = event.target.value;
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                    displayEntry();
                }
            }
        });
    });
}

// To show the dropdown for duplicate and delete
function dropDownForDuplicateDelete(){
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
}

// To delete the selected entry
function deleteEntry(){
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
}

// To duplicate the selected entry
function duplicateEntry(){
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
}

// To update the selected bill of the entry
function updateEntryBill(){
    var billButtons = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__bill');
    billButtons.forEach(button => {
        button.addEventListener('click', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    if(button.classList.contains('billable')){
                        button.classList.toggle('billable');
                        projectToUpdate.billable = false;
                    }
                    else{
                        button.classList.toggle('billable');
                        projectToUpdate.billable = true;
                    }
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                    displayEntry();
                }
            }
        });
    });
}

// To update the description of the selected entry
function updateEntryDescription(){
    var descriptionInputs = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__description');
    descriptionInputs.forEach(input => {
        input.addEventListener('change', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    projectToUpdate.description = event.target.value;
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                    displayEntry();
                }
            }
        });
    });
}

// To update the date of the selected entry
function updateEntryDate(){
    var dateInputs = document.querySelectorAll('.calendar');
    dateInputs.forEach(input => {
        input.addEventListener('change', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    projectToUpdate.date = event.target.value;
                    localStorage.setItem("projects", JSON.stringify(existingProjects));
                    displayEntry();
                }
            }
        });
    });
}

// To update the duration of the selected entry
function updateDuration(){
    var durationInputs = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__duration');
    durationInputs.forEach(input => {
        input.addEventListener('change', function(event){
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                if(projectToUpdate){
                    var newDurationParts = event.target.value.split(':').map(Number);
                    if(newDurationParts.length == 1 && /^\d+$/.test(event.target.value)){
                        var newDurationParts = formatDuration(event.target.value).split(':').map(Number);
                    }
                    if(/^\d+(:\d+)*$/.test(event.target.value)){
                        var newDurationInSeconds = newDurationParts[0] * 3600 + newDurationParts[1] * 60 + newDurationParts[2];
                        projectToUpdate.duration = secondsToDuration(newDurationInSeconds);
                        var startTimeParts = projectToUpdate['start-time'].split(':').map(Number);
                        var startTime = new Date();
                        startTime.setHours(startTimeParts[0], startTimeParts[1]);
                        projectToUpdate['end-time'] = new Date(startTime);
                        projectToUpdate['end-time'].setSeconds(startTime.getSeconds() + newDurationInSeconds);
                        projectToUpdate['end-time'] = formatTime(projectToUpdate['end-time']);
                        localStorage.setItem("projects", JSON.stringify(existingProjects));
                        displayEntry();
                    }
                    else{
                        alert(`Invalid duration input. HH:MM:SS or Seconds format is only supported`);
                        displayEntry();
                    }
                }
            }
        });
    });
}

// To update the start time of the selected entry
function updateStartTime(){
    var startTimeInput = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__start');
    startTimeInput.forEach(input => {
        input.addEventListener('change', function(event) {
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                var startTime = event.target.value;
                if(projectToUpdate){
                    if(/^\d+$/.test(event.target.value)){
                        var startTime = durationToTime(formatDuration(event.target.value));
                    }
                    if(/^\d+(:\d+)*$/.test(event.target.value)){
                        var newStartTime = parseTime(startTime);
                        var storedEndTime = parseTime(projectToUpdate['end-time']);
                        if (newStartTime && storedEndTime) {
                            if(/^\d+(:\d+)*$/.test(storedEndTime - newStartTime)){
                                var timeDifference = storedEndTime - newStartTime;
                            }
                            else{
                                var timeDifference = newStartTime - storedEndTime;
                            }
                            projectToUpdate['start-time'] = startTime;
                            projectToUpdate['duration'] = formatDuration(timeDifference);
                            localStorage.setItem("projects", JSON.stringify(existingProjects));
                            displayEntry();
                        } else {
                            alert(`Invalid start time input. HH:MM or Seconds format is only supported`);
                            displayEntry();
                        }
                    }
                    else{
                        alert(`Invalid start time input. HH:MM or Seconds format is only supported`);
                        displayEntry();
                    }
                }
            }
        });
    });
}

// To update the end time of the selected entry
function updateEndTime(){
    var endTimeInput = document.querySelectorAll('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry__time__end');
    endTimeInput.forEach(input => {
        input.addEventListener('change', function(event) {
            var entries = event.target.closest('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__entry');
            if(entries){
                var entryId = entries.getAttribute('id');
                var projectToUpdate = existingProjects.find(project => project["project-id"] === entryId);
                var endTime = event.target.value;
                if(projectToUpdate){
                    if(/^\d+$/.test(event.target.value)){
                        var endTime = durationToTime(formatDuration(event.target.value));
                    }
                    if(/^\d+(:\d+)*$/.test(event.target.value)){
                        var newEndTime = parseTime(endTime);
                        var storedStartTime = parseTime(projectToUpdate['start-time']);
                        if (newEndTime && storedStartTime) {
                            if(/^\d+(:\d+)*$/.test(storedStartTime - newEndTime)){
                                var timeDifference = storedStartTime - newEndTime;
                            }
                            else{
                                var timeDifference = newEndTime - storedStartTime;
                            }
                            projectToUpdate['end-time'] = endTime;
                            projectToUpdate['duration'] = formatDuration(timeDifference);
                            localStorage.setItem("projects", JSON.stringify(existingProjects));
                            displayEntry();
                        } else {
                            alert(`Invalid start time input. HH:MM or Seconds format is only supported`);
                            displayEntry();
                        }
                    }
                    else{
                        alert(`Invalid start time input. HH:MM or Seconds format is only supported`);
                        displayEntry();
                    }
                }
            }
        });
    });
}

// Function to get week range in "MMM D - MMM D" format
function getWeekRange(date) {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay()); // Adjust for Sunday as the first day
    const endDate = new Date(date);
    endDate.setDate(startDate.getDate() + 6);
    const options = { month: 'short', day: 'numeric' };
    const startFormatted = startDate.toLocaleDateString('en-US', options);
    const endFormatted = endDate.toLocaleDateString('en-US', options);
    return `${startFormatted} - ${endFormatted}`;
}

// Function to get day in "ddd, MMM D" format
function getFormattedDay(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function that adds all event listeners
function addAllEventListeners(){
    // Event listeners to show the project menu for the entry
    dropDownForProjectName();
    // Event listeners to show the tag menu for the entry
    dropDownForTagName();
    // Event listeners to show drop down for duplicate and delete option of the entry
    dropDownForDuplicateDelete();
    // Event listeners to delete the entry
    deleteEntry();
    // Event listeners to duplicate the entry
    duplicateEntry();
    // Event listeners to update the bill
    updateEntryBill();
    // Event listeners to update the description
    updateEntryDescription();
    // Event listeners to update the project name
    updateProjectName();
    // Event listeners to update the tag name
    updateTagName();
    // Event listeners to update the date
    updateEntryDate();
    // Event listeners to update the duration
    updateDuration();
    // Event listeners to update the start time
    updateStartTime();
    // Event listeners to update the end time
    updateEndTime();
}

// Core of the time tracker section
// Function to display the data in the entry section
function displayEntry(){

    // Clear the previous entries
    timeTrackerEntrySection.innerHTML = "";
    timeTrackerEntrySection.appendChild(timeTrackerEntry);
    var entrySection = document.querySelector(".time-tracker-section__time-tracker-entry-section__entry-container__main-content");
    entrySection.innerHTML = "";

    existingProjects.sort((a, b) => new Date(b["date"]) - new Date(a["date"]));
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    // Group the projects to display
    const groupedProjects = {};
    existingProjects.forEach(project => {
    const date = new Date(project.date);
    const weekRange = getWeekRange(date);
    const formattedDay = getFormattedDay(date);
    
    const projectDurationInSeconds = durationToSeconds(project.duration);
    
    if (!groupedProjects[weekRange]) {
        groupedProjects[weekRange] = {};
    }
    
    if (!groupedProjects[weekRange][formattedDay]) {
        groupedProjects[weekRange][formattedDay] = {
        projects: [],
        totalDuration: 0,
        };
    }
    
    groupedProjects[weekRange][formattedDay].projects.push(project);
    groupedProjects[weekRange][formattedDay].totalDuration += projectDurationInSeconds;
    });

    // Iterate through groupedProjects and display projects, total day and week duration
    for (const weekRange in groupedProjects) {
        let totalWeekDuration = 0;

        const mapWeekEntry = weekEntry(weekRange, '');
        entrySection.appendChild(mapWeekEntry);

        for (const day in groupedProjects[weekRange]) {
        const { projects, totalDuration } = groupedProjects[weekRange][day];
        const formattedTotalDuration = secondsToDuration(totalDuration);
        const mapDayEntry = dayEntry(day, formattedTotalDuration);
        entrySection.appendChild(mapDayEntry);

        // Track the last project entry for the day
        let lastProjectEntry = null;

        projects.forEach((project,index) => {
            const map = mapEntry(project["project-id"], project["project-name"], project["description"], project["tag"], 
                            project["billable"], project["start-time"], project["end-time"], project["duration"], project["date"]);

            entrySection.appendChild(map);

            // Add special style to the last project entry of the day
            if (index === projects.length - 1) {
                map.classList.add('last-entry__bottom-style');
            }

        });
    
    totalWeekDuration += totalDuration;
    }

    mapWeekEntry.querySelector('.time-tracker-section__time-tracker-entry-section__entry-container__main-content__week-entry__total__cumulative__duration').textContent = secondsToDuration(totalWeekDuration);
    
    }

    // Add all event listeners
    addAllEventListeners();

    return true;
}