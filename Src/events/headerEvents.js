
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

// Add an event listener to the document to capture clicks to hide workspace drop down
document.addEventListener("click", function(event) {
    var clickedElement = event.target;
    // Check if the clicked element is not the button or workspace menu
    if (clickedElement !== selectedWorkspace && clickedElement !== workspaceMenu) {
        workspaceMenu.style.display = "none";
    }
});