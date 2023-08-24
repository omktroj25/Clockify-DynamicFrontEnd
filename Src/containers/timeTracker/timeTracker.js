// Time tracker section

var timeTrackerSection = document.createElement("div");
timeTrackerSection.classList.add("time-tracker-section");
    var timeTrackerBar = document.createElement("div");
    timeTrackerBar.classList.add("time-tracker-section__time-tracker-bar");
        var timeTrackerBarField = document.createElement("div");
        timeTrackerBarField.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field");
            var timeTrackerDescription = document.createElement("div");
            timeTrackerDescription.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__description-field");
                var timeTrackerDescriptionBar = document.createElement("input");
                timeTrackerDescriptionBar.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__description-field__input");
                var timeTrackerDescriptionBarAttribute = {"type":"text","placeholder":"What are you working on?"};
                setCollection(timeTrackerDescriptionBar, timeTrackerDescriptionBarAttribute);
            var timeTrackerProject = document.createElement("div");
            timeTrackerProject.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project");
                var timeTrackerProjectImg = document.createElement("div");
                timeTrackerProjectImg.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__img");
                    var timeTrackerProjectAddImg = document.createElement("img");
                    timeTrackerProjectAddImg.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__img__add-img");
                        var timeTrackerProjectAddImgAttribute = { "src":"./assets/icons/Add newitem required field.svg", "alt":"Add-Image" };
                        setCollection(timeTrackerProjectAddImg, timeTrackerProjectAddImgAttribute);
                var timeTrackerProjectTxt = document.createElement("div");
                timeTrackerProjectTxt.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__txt");
                    var timeTrackerProjectAddTxt = document.createElement("div");
                    timeTrackerProjectAddTxt.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__txt__add-txt");
                        timeTrackerProjectAddTxt.innerHTML="Project";
                var timeTrackerProjectMenu = document.createElement("div");
                timeTrackerProjectMenu.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu");
                timeTrackerProjectMenu.innerHTML = `<div class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__input">
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
                                                    <img src="./assets/icons/drag-corner.404f1a5f1bd7b848.svg" class="time-tracker-section__time-tracker-bar__time-tracker-bar-field__project__menu__drager"/>`;
        var timeTrackerBarButton = document.createElement("div");
        timeTrackerBarButton.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button");
            var timeTrackerTag = document.createElement("div");
            timeTrackerTag.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn");
                var timeTrackerTagImg = document.createElement("img");
                timeTrackerTagImg.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__tag-btn__img");
                    var timeTrackerTagImgAttribute = { "src":"./assets/icons/Tag empty.svg", "alt":"Tag-Image" };
                    setCollection(timeTrackerTagImg, timeTrackerTagImgAttribute);
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
            var timeTrackerBill = document.createElement("div");
            timeTrackerBill.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__bill-btn");
                var timeTrackerBillSymbol = document.createElement("div");
                timeTrackerBillSymbol.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__bill-btn__symbol");
                timeTrackerBillSymbol.innerHTML = `$`;
            var timeTrackerAutoClock = document.createElement("div");
            timeTrackerAutoClock.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__duration");
                var timeTrackerClock = document.createElement("div");
                timeTrackerClock.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__duration__clock");
                timeTrackerClock.textContent = "00:00:00";
            var timeTrackerTrigger = document.createElement("div");
            timeTrackerTrigger.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__trigger-btn");
                var timeTrackerTriggerButton = document.createElement("button");
                timeTrackerTriggerButton.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__trigger-btn__btn");
                timeTrackerTriggerButton.innerHTML = `START`;
            var timeTrackerMode = document.createElement("div");
            timeTrackerMode.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__mode");
                var timeTrackerAuto = document.createElement("div");
                timeTrackerAuto.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__mode__auto-btn");
                    var timeTrackerAutoImg = document.createElement("img");
                    timeTrackerAutoImg.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__mode__auto-btn__img");
                        var timeTrackerAutoImgAttribute = { "src":"./assets/icons/Track time using timer selected.svg", "alt":"AutoClock-Image" };
                        setCollection(timeTrackerAutoImg, timeTrackerAutoImgAttribute);
                var timeTrackerManual = document.createElement("div");
                timeTrackerManual.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__mode__manual-btn");
                    var timeTrackerManualImg = document.createElement("img");
                    timeTrackerManualImg.classList.add("time-tracker-section__time-tracker-bar__time-tracker-bar-button__mode__manual-btn__img");
                        var timeTrackerManualImgAttribute = { "src":"./assets/icons/Add time manually selected.svg", "alt":"AutoClock-Image" };
                        setCollection(timeTrackerManualImg, timeTrackerManualImgAttribute);
    var timeTrackerEntrySection = document.createElement("div");
    timeTrackerEntrySection.classList.add("time-tracker-section__time-tracker-entry-section");
        var timeTrackerEntryDefault = document.createElement("div");
        timeTrackerEntryDefault.classList.add("time-tracker-section__time-tracker-entry-section__default-entry");
        timeTrackerEntryDefault.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content">
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__timer-img">
                                                    <img src="./assets/icons/empty-tracker-icon.png" alt="timer-clock-img" width="80px"/>
                                                </div>
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__track-txt">
                                                    Let’s start tracking!
                                                </div>
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__install-txt">
                                                    Install Clockify and track time anywhere.
                                                </div>
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform">
                                                    <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__img">
                                                        <img src="./assets/icons/android.svg" alt="android-icon" width: "1.5rem" height: "1.5rem;" class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__img__android"/>
                                                    </div>
                                                    <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__img">
                                                        <img src="./assets/icons/apple.svg" alt="mac-icon" width: "1.5rem" height: "1.5rem;" class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__mac"/>
                                                    </div>
                                                    <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__img">
                                                        <img src="./assets/icons/chrome.svg" alt="chrome-icon" width: "1.5rem" height: "1.5rem;" class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__chrome"/>
                                                    </div>
                                                    <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__img">
                                                        <img src="./assets/icons/window.svg" alt="window-icon" width: "1.5rem" height: "1.5rem;" class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__cross-platform__windows"/>
                                                    </div>
                                                </div>
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__integrations">
                                                    50+ integrations
                                                </div>
                                                <div class="time-tracker-section__time-tracker-entry-section__default-entry__main-content__time-sheet-mode">
                                                Enable timesheet mode
                                                </div>
                                            </div>`;
        var timeTrackerEntry = document.createElement("div");
        timeTrackerEntry.classList.add("time-tracker-section__time-tracker-entry-section__entry-container");
        timeTrackerEntry.innerHTML = `<div class="time-tracker-section__time-tracker-entry-section__entry-container__main-content"></div>`;

mainSection.appendChild(timeTrackerSection);
    timeTrackerSection.appendChild(timeTrackerBar);
        timeTrackerBar.appendChild(timeTrackerBarField);
            timeTrackerBarField.appendChild(timeTrackerDescription);
                timeTrackerDescription.appendChild(timeTrackerDescriptionBar);
            timeTrackerBarField.appendChild(timeTrackerProject);
                timeTrackerProject.appendChild(timeTrackerProjectImg);
                    timeTrackerProjectImg.appendChild(timeTrackerProjectAddImg);
                timeTrackerProject.appendChild(timeTrackerProjectTxt);
                    timeTrackerProjectTxt.appendChild(timeTrackerProjectAddTxt);
                timeTrackerProject.appendChild(timeTrackerProjectMenu);
        timeTrackerBar.appendChild(timeTrackerBarButton);
            timeTrackerBarButton.appendChild(timeTrackerTag);
                timeTrackerTag.appendChild(timeTrackerTagImg);
            timeTrackerBarButton.appendChild(timeTrackerBill);
                timeTrackerBill.appendChild(timeTrackerBillSymbol);
            timeTrackerBarButton.appendChild(timeTrackerAutoClock);
                timeTrackerAutoClock.appendChild(timeTrackerClock);
            timeTrackerBarButton.appendChild(timeTrackerTrigger);
                timeTrackerTrigger.appendChild(timeTrackerTriggerButton)
            timeTrackerBarButton.appendChild(timeTrackerMode);
                timeTrackerMode.appendChild(timeTrackerAuto);
                    timeTrackerAuto.appendChild(timeTrackerAutoImg);
                timeTrackerMode.appendChild(timeTrackerManual);
                    timeTrackerManual.appendChild(timeTrackerManualImg);
    timeTrackerSection.appendChild(timeTrackerEntrySection);
        timeTrackerEntrySection.appendChild(timeTrackerEntryDefault);



