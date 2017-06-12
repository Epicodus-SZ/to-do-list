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
    $(".taskListItem").last().click(function() {
      alert("you clicked" + newTask.name);
    });
    $("#taskList").append("<input class='taskCheckbox' type='checkbox'><br>");
    $(".taskCheckbox").last().change(function() {
      alert("you clicked the textbox for " + newTask.name);
    });

    console.log(newTask);

  });
});
