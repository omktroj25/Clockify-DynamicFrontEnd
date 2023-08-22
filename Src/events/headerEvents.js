
// To change the size of the menu to icon and full context alternatively
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

// To show workspace drop down
selectedWorkspace.addEventListener("click", function() {
    workspaceMenu.style.display = workspaceMenu.style.display === "flex" ? "none" : "flex";
});
workspaceDropdown.addEventListener("click", function() {
    workspaceMenu.style.display = workspaceMenu.style.display === "flex" ? "none" : "flex";
});