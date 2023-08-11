
document.addEventListener("DOMContentLoaded", function() {

    var clockifyBody = document.querySelector("body");
    var clockify = document.createElement("div");
    clockify.classList.add("overall-layer");
    clockifyBody.appendChild(clockify);

    // header section

    var headerSection = document.createElement("header");
    headerSection.classList.add("header-section");
        var homeLink = document.createElement("div");
        homeLink.classList.add("header-section__home-link");
            var home = document.createElement("div");
            home.classList.add("header-section__home-link__home");
                var menuSizeImg = document.createElement("div");
                menuSizeImg.classList.add("header-section__home-link__home__menu-size-img");
                    var menuImg = document.createElement("img");
                    menuImg.classList.add("header-section__home-link__home__menu-size-img__menu-img");
                        var menuImgAttribute = { "src" : "./assets/hamburger-menu.png", "alt" : "Menu-Image"};
                        setCollection(menuImg, menuImgAttribute);
                var homeImg = document.createElement("div");
                homeImg.classList.add("header-section__home-link__home__homeImg")
                    var clockifyImg = document.createElement("img");
                    clockifyImg.classList.add("header-section__home-link__home__homeImg__clockify-img");
                        var clockifyImgAttribute = { "src" : "./assets/clockify-logo.svg", "alt" : "Clockify-logo"};
                        setCollection(clockifyImg, clockifyImgAttribute);
            var account = document.createElement("div");
            account.classList.add("header-section__account");
                var workspace = document.createElement("div");
                workspace.classList.add("header-section__account__workspace");
                    var workspaceDropdown = document.createElement("select");
                    workspaceDropdown.classList.add("header-section__account__workspace__drop-down");
                var plan = document.createElement("div");
                plan.classList.add("header-section__account__plan");
                    var planBtn = document.createElement("button");
                    planBtn.classList.add("header-section__account__plan__upgrade-btn");
                    planBtn.innerHTML = "UPGRADE";
                var help = document.createElement("div");
                help.classList.add("header-section__account__help");
                    var queryImg = document.createElement("img");
                    queryImg.classList.add("header-section__account__help__query-img");
                        var queryImgAttribute = { "src" : "./assets/Help options.svg", "alt" : "Help-Image"};
                        setCollection(queryImg, queryImgAttribute);
                var notification = document.createElement("div");
                notification.classList.add("header-section__account__notification");
                    var bellImg = document.createElement("img");
                    bellImg.classList.add("header-section__account__notification__bell-img");
                        var bellImgAttribute = { "src" : "./assets/View notifications.svg", "alt" : "Notification-Image"};
                        setCollection(bellImg, bellImgAttribute);
                var profile = document.createElement("div");
                profile.classList.add("header-section__account__profile");
                    var profileImg = document.createElement("img");
                    profileImg.classList.add("header-section__account__profile__profile-img");
                        var profileImgAttribute = { "src" : "./assets/user.png", "alt" : "Profile-Pic"};
                        setCollection(profileImg, profileImgAttribute);

    clockify.appendChild(headerSection);
        headerSection.appendChild(homeLink);
            homeLink.appendChild(home);
                home.appendChild(menuSizeImg);
                    menuSizeImg.appendChild(menuImg);
                home.appendChild(homeImg);
                    homeImg.appendChild(clockifyImg)
        headerSection.appendChild(account);
            account.appendChild(workspace);
                workspace.appendChild(workspaceDropdown);
            account.appendChild(plan);
                plan.appendChild(planBtn);
            account.appendChild(help);
                help.appendChild(queryImg);
            account.appendChild(notification);
                notification.appendChild(bellImg);
            account.appendChild(profile);
                profile.appendChild(profileImg);

    // Common section
    
    var commonSection = document.createElement("div");
    commonSection.classList.add("common-section");

    clockify.appendChild(commonSection);

        // Sidebar section

        var sideBarSection = document.createElement("aside");
        sideBarSection.classList.add("sidebar-section");
            var sideBarMainContent = document.createElement("div");
            sideBarMainContent.classList.add("sidebar-section__main-content");
                var timeSheet = createSideBarOption("./assets/View Timesheet.svg", "TIMESHEET");
                var timeTracker = createSideBarOption("./assets/View Time tracker.svg", "TIME TRACKER");
                var calendar = createSideBarOption("./assets/View Calendar.svg", "CALENDAR");
                    var analyze = createSideBarHeading("ANALYZE");
                var dashboard = createSideBarOption("./assets/View Dashboard.svg", "DASHBOARD");
                var reports = createSideBarOption("./assets/View Reports.svg", "REPORTS");
                    var manage = createSideBarHeading("MANAGE");
                var projects = createSideBarOption("./assets/View Projects.svg", "PROJECTS");
                var team = createSideBarOption("./assets/View Team.svg", "TEAM");
                var clients = createSideBarOption("./assets/View Clients.svg", "CLIENTS");
                var tags = createSideBarOption("./assets/View Tags.svg", "TAGS");
                var settings = createSideBarOption("./assets/View Settings.svg", "SETTINGS");
                    var show = createSideBarOption("./assets/half-down-arrow.svg", "SHOW MORE");
                    show.style.color = "#999";
                var kiosks = createSideBarOption("./assets/View Kiosks.svg", "KIOSKS");
                var schedule = createSideBarOption("./assets/View Schedule.svg", "SCHEDULE");
                var expenses = createSideBarOption("./assets/View Expenses.svg", "EXPENSES");
                var timeOff = createSideBarOption("./assets/View Time off.svg", "TIME OFF");
                var activity = createSideBarOption("./assets/View Activity.svg", "ACTIVITY");
                var approvals = createSideBarOption("./assets/View Approvals.svg", "APPROVALS");
                var invoices = createSideBarOption("./assets/View Invoices.png", "INVOICES");

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
                    
        // Main section

        var mainSection = document.createElement("div");
        mainSection.classList.add("main-section");

        commonSection.appendChild(mainSection);

// Event listener

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


menuSizeImg.addEventListener("click", function() {
    
    var sidebarContext = document.querySelectorAll(".sidebar-section__main-content__option__context");
    var sidebarTitle = document.querySelectorAll(".sidebar-section__main-content__title");
    var sidebarIcon = document.querySelectorAll(".sidebar-section__main-content__option__icon");

    sidebarContext.forEach(function(item){
        item.classList.toggle("sidebar-context-hidden");
    });

    sidebarTitle.forEach(function(item){
        item.classList.toggle("sidebar-title-hidden");
    });

    sidebarIcon.forEach(function(item){
        item.classList.toggle("sidebar-icon-expand");
    })
    
});


});

function setCollection(element, attributes) {
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
}

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
            var elementTxt = document.createElement("p");
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
        var elementTxt = document.createElement("p");
        elementTxt.classList.add("sidebar-section__main-content__title__txt");
        elementTxt.textContent = option;

    element.appendChild(elementTxt);
    
    return element;
}
