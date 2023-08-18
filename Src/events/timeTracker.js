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