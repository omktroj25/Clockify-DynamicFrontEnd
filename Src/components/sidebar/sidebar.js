// Sidebar section

var sideBarSection = document.createElement("aside");
sideBarSection.classList.add("sidebar-section");
    var sideBarMainContent = document.createElement("div");
    sideBarMainContent.classList.add("sidebar-section__main-content");
        var timeSheet = createSideBarOption("./assets/icons/View Timesheet.svg", "TIMESHEET");
        var timeTracker = createSideBarOption("./assets/icons/View Time tracker.svg", "TIME TRACKER");
        var calendar = createSideBarOption("./assets/icons/View Calendar.svg", "CALENDAR");
            var analyze = createSideBarHeading("ANALYZE");
        var dashboard = createSideBarOption("./assets/icons/View Dashboard.svg", "DASHBOARD");
        var reports = createSideBarOption("./assets/icons/View Reports.svg", "REPORTS");
            var manage = createSideBarHeading("MANAGE");
        var projects = createSideBarOption("./assets/icons/View Projects.svg", "PROJECTS");
        var team = createSideBarOption("./assets/icons/View Team.svg", "TEAM");
        var clients = createSideBarOption("./assets/icons/View Clients.svg", "CLIENTS");
        var tags = createSideBarOption("./assets/icons/View Tags.svg", "TAGS");
        var settings = createSideBarOption("./assets/icons/View Settings.svg", "SETTINGS");
            var show = createSideBarOption("./assets/icons/half-down-arrow.svg", "SHOW MORE");
            show.style.color = "#999";
        var kiosks = createSideBarOption("./assets/icons/View Kiosks.svg", "KIOSKS");
        var schedule = createSideBarOption("./assets/icons/View Schedule.svg", "SCHEDULE");
        var expenses = createSideBarOption("./assets/icons/View Expenses.svg", "EXPENSES");
        var timeOff = createSideBarOption("./assets/icons/View Time off.svg", "TIME OFF");
        var activity = createSideBarOption("./assets/icons/View Activity.svg", "ACTIVITY");
        var approvals = createSideBarOption("./assets/icons/View Approvals.svg", "APPROVALS");
        var invoices = createSideBarOption("./assets/icons/View Invoices.png", "INVOICES");

commonSection.appendChild(sideBarSection);
    sideBarSection.appendChild(sideBarMainContent);
        sideBarMainContent.appendChild(timeSheet);
        sideBarMainContent.appendChild(timeTracker);
        sideBarMainContent.appendChild(calendar);
            sideBarMainContent.appendChild(analyze);
        sideBarMainContent.appendChild(dashboard);
        sideBarMainContent.appendChild(reports);
            sideBarMainContent.appendChild(manage);
        sideBarMainContent.appendChild(projects);
        sideBarMainContent.appendChild(team);
        sideBarMainContent.appendChild(clients);
        sideBarMainContent.appendChild(tags);
        sideBarMainContent.appendChild(settings);
            sideBarMainContent.appendChild(show);
        sideBarMainContent.appendChild(kiosks);
        sideBarMainContent.appendChild(schedule);
        sideBarMainContent.appendChild(expenses);
        sideBarMainContent.appendChild(timeOff);
        sideBarMainContent.appendChild(activity);
        sideBarMainContent.appendChild(approvals);
        sideBarMainContent.appendChild(invoices);

        
            var additionalOptions = [kiosks, schedule, expenses, timeOff, activity, approvals, invoices];
            additionalOptions.forEach(option => option.classList.toggle("show-hidden"));
            show.classList.toggle("hidden");

            function createSideBarOption(imgSrc, option) {
                var element =document.createElement("div");
                element.classList.add("sidebar-section__main-content__option");
                    var elementIcon = document.createElement("div");
                    elementIcon.classList.add("sidebar-section__main-content__option__icon");
                        var elementImg = document.createElement("img");
                        elementImg.classList.add("sidebar-section__main-content__option__icon__img");
                        elementImg.src = imgSrc;
                    var elementContext = document.createElement("div");
                    elementContext.classList.add("sidebar-section__main-content__option__context");
                        var elementTxt = document.createElement("div");
                        elementTxt.classList.add("sidebar-section__main-content__option__context__txt");
                        elementTxt.textContent = option;
            
                element.appendChild(elementIcon);
                    elementIcon.appendChild(elementImg);
                element.appendChild(elementContext);
                    elementContext.appendChild(elementTxt);
                
                return element;
            }
            
            function createSideBarHeading(option) {
                var element =document.createElement("div");
                element.classList.add("sidebar-section__main-content__title");
                    var elementTxt = document.createElement("div");
                    elementTxt.classList.add("sidebar-section__main-content__title__txt");
                    elementTxt.textContent = option;
            
                element.appendChild(elementTxt);
                
                return element;
            }