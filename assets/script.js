var currentDate = moment();
var currentHour = moment().format("h");
$("#currentDay").text(currentDate.format("dddd MMM Do, YYYY"));

var container = $(".container")
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
var period = ["AM", "PM"]

for (var i = 0; i < 9; i++) {
    var containerRow = document.createElement('section');
    containerRow.setAttribute("class", "row");
    var hourSection = document.createElement('p');
    hourSection.setAttribute("class", "hour col-2");
    var timeBlocks = document.createElement('textarea');
    timeBlocks.setAttribute("class", "textarea col-8 description");
    timeBlocks.setAttribute("id", "textarea" + (i + 1));
    var saveBtn = document.createElement('button');
    saveBtn.setAttribute("class", "saveBtn col-2");
    saveBtn.setAttribute("id", "save" + (i + 1));
    container.append(containerRow);
    containerRow.append(hourSection);
    containerRow.append(timeBlocks);
    containerRow.append(saveBtn);
    saveBtn.textContent = "Save me please"
    if (i < 3) {
        hourSection.textContent = hours[i] + period[0];
    } else {
        hourSection.textContent = hours[i] + period[1];
    };

    if (currentHour === hours[i]) {
        timeBlocks.setAttribute("class", "textarea col-8 description present")
    } else if (hours.slice(i) == hours[i]) {
        timeBlocks.setAttribute("class", "textarea col-8 description future")
    } else {
        timeBlocks.setAttribute("class", "textarea col-8 description past")
    }
};

// variables for save buttons 
var saveBtn1 = document.querySelector("#save1");
var saveBtn2 = document.querySelector("#save2");
var saveBtn3 = document.querySelector("#save3");
var saveBtn4 = document.querySelector("#save4");
var saveBtn5 = document.querySelector("#save5");
var saveBtn6 = document.querySelector("#save6");
var saveBtn7 = document.querySelector("#save7");
var saveBtn8 = document.querySelector("#save8");
var saveBtn9 = document.querySelector("#save9");

function save() {
    // variables for textareas
    var textarea1 = document.querySelector("#textarea1");
    var textarea2 = document.querySelector("#textarea2");
    var textarea3 = document.querySelector("#textarea3");
    var textarea4 = document.querySelector("#textarea4");
    var textarea5 = document.querySelector("#textarea5");
    var textarea6 = document.querySelector("#textarea6");
    var textarea7 = document.querySelector("#textarea7");
    var textarea8 = document.querySelector("#textarea8");
    var textarea9 = document.querySelector("#textarea9");

    // saves the text to localstorage for each textarea
    localStorage.setItem("save1", textarea1.value);
    localStorage.setItem("save2", textarea2.value);
    localStorage.setItem("save3", textarea3.value);
    localStorage.setItem("save4", textarea4.value);
    localStorage.setItem("save5", textarea5.value);
    localStorage.setItem("save6", textarea6.value);
    localStorage.setItem("save7", textarea7.value);
    localStorage.setItem("save8", textarea8.value);
    localStorage.setItem("save9", textarea9.value);
};

// eventlistener for save buttons
saveBtn1.addEventListener("click", save);
saveBtn2.addEventListener("click", save);
saveBtn3.addEventListener("click", save);
saveBtn4.addEventListener("click", save);
saveBtn5.addEventListener("click", save);
saveBtn6.addEventListener("click", save);
saveBtn7.addEventListener("click", save);
saveBtn8.addEventListener("click", save);
saveBtn9.addEventListener("click", save);

// saves the text in the todo when refreshed
textarea1.textContent = localStorage.getItem("save1");
textarea2.textContent = localStorage.getItem("save2");
textarea3.textContent = localStorage.getItem("save3");
textarea4.textContent = localStorage.getItem("save4");
textarea5.textContent = localStorage.getItem("save5");
textarea6.textContent = localStorage.getItem("save6");
textarea7.textContent = localStorage.getItem("save7");
textarea8.textContent = localStorage.getItem("save8");
textarea9.textContent = localStorage.getItem("save9");

// clears the localstorage every day 
if (moment().format("hA") === "12AM") {
    localStorage.clear();
};