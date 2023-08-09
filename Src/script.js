
document.addEventListener("DOMContentLoaded", function() {
    localStorage.setItem("om", "The boss!");

    var clockify = document.querySelector("#main-container");

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
                        SetCollection(menuImg, menuImgAttribute);
                var homeImg = document.createElement("div");
                homeImg.classList.add("header-section__home-link__home__homeImg")
                    var clockifyImg = document.createElement("img");
                    clockifyImg.classList.add("header-section__home-link__home__homeImg__clockify-img");
                        var clockifyImgAttribute = { "src" : "./assets/clockify-logo.svg", "alt" : "Clockify-logo"};
                        SetCollection(clockifyImg, clockifyImgAttribute);
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
                        SetCollection(queryImg, queryImgAttribute);
                var notification = document.createElement("div");
                notification.classList.add("header-section__account__notification");
                    var bellImg = document.createElement("img");
                    bellImg.classList.add("header-section__account__notification__bell-img");
                        var bellImgAttribute = { "src" : "./assets/View notifications.svg", "alt" : "Notification-Image"};
                        SetCollection(bellImg, bellImgAttribute);
                var profile = document.createElement("div");
                profile.classList.add("header-section__account__profile");
                    var profileImg = document.createElement("img");
                    profileImg.classList.add("header-section__account__profile__profile-img");
                        var profileImgAttribute = { "src" : "./assets/user.png", "alt" : "Profile-Pic"};
                        SetCollection(profileImg, profileImgAttribute);

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

});

function SetCollection(element, attributes) {
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
}