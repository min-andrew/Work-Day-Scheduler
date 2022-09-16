var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd MMM Do, YYYY"))

var container = $(".container")
var hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]
var period = ["AM", "PM"]

for (var i = 0; i < 9; i++) {
    var containerRow = document.createElement('section');
    containerRow.setAttribute("class", "row");
    var hourSection = document.createElement('p');
    hourSection.setAttribute("class", "hour col-2");
    var timeBlocks = document.createElement('textarea');
    timeBlocks.setAttribute("class", "textarea col-8");
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

    // function save() {
    //     var data = timeBlocks.value;
    //     console.log(data);
    // }

    // var saveBtnEvent_i = $("#save" + (i + 1));
    // saveBtnEvent_i.addEventListener("click", save);
};

// function save() {
//     localStorage.setItem('todo', JSON.stingify(timeBlocks.value));
//     var todo = JSON.parse(localStorage.getItem('todo'));
//     timeBlocks.textContent = todo;
// };

