//Business logic
function Task (name, dueDate, dateCreated, assignedPerson, completed) {
  this.name = name;
  this.dueDate = dueDate;
  this.dateCreated = dateCreated;
  this.assignedPerson = assignedPerson;
  this.completed = completed;
}

function todaysDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  return mm+"/"+dd+"/"+yyyy;
}


$(document).ready(function(){
  $("#formToDo").submit(function(event){
    event.preventDefault();

    //Get info from the form
    var inputtedName = $("#inputName").val();
    var inputtedDueDate = $("#inputDueDate").val();
    var inputtedAssignedTo = $("#inputAssignedTo").val();

    //Create task object called newTask using the data from the form
    var newTask = new Task(inputtedName, inputtedDueDate,todaysDate(), inputtedAssignedTo,false);

//    <input type="checkbox" id="subscribeNews">


    //Add the task to the list of tasks.
    $("#taskList").append("<span class='taskListItem'>" + newTask.name + " </span>");

    //Event listener for clicking the task list name
    $(".taskListItem").last().click(function() {
      $("#infoName").text(newTask.name);
      $("#infoDueDate").text("Due: " + newTask.dueDate);
      $("#infoCreatedDate").text("Created: " + newTask.dateCreated);
      $("#infoAssignedTo").text("Assigned to: " + newTask.assignedPerson);
    });

    $("#taskList").append("<input class='taskCheckbox' type='checkbox'><br>");

    //Event listener for each checkbox
    $(".taskCheckbox").last().change(function() {
      if(this.checked) {
        $(this).prev().addClass("completed");
    } else {
        $(this).prev().removeClass("completed");
    }

    });

    //Clear the form
    $("#inputName").val("");
    $("#inputDueDate").val("");
    $("#inputAssignedTo").val("");

    console.log(newTask);

  });
});
