// Set the event listener to refresh the display
var sidebarButtons = document.querySelectorAll('.sidebar-section__main-content__option__context__txt');
sidebarButtons.forEach(button => {
    if (button.textContent === 'TIME TRACKER') {
        var parentElement = button.closest('.sidebar-section__main-content__option');
        parentElement.addEventListener('click', () => {
            displayEntry();
        });
    }
});