
let newTask; 
let i=0;

function add () {
    newTask = document.createElement("li");
    newTask.innerHTML = task.value;
    
    taskListOnGoing.appendChild(newTask);
    tasktitle.removeAttribute("hidden");
    task.value="";
    task.focus();

    $(newTask).on("swipeleft", swipeLeftHandler);
    $(newTask).on("swiperight", swipeRightHandler);
    $(taskListOnGoing).listview('refresh');
    //console.log(newTask.innerHTML); 
}

addButton.addEventListener('click', add);


function swipeRightHandler(event) {
    $(event.target).first().fadeToggle( "slow", "linear", function () {
        event.target.remove();
    });
    $(taskListDone).listview('refresh');
}

function swipeLeftHandler(event) {
   $(event.target).addClass("done");
    taskListDone.appendChild(event.target);
    ++i;
    //console.log(i);

    if (i%2 ==0) {
        taskListOnGoing.appendChild(event.target);
        $(event.target).removeClass("done");
        i=0;
    } 
    $(taskListDone).listview('refresh');

}

resetButton.addEventListener('click', (event) => {
   taskListOnGoing.innerHTML = "";
   taskListDone.innerHTML = "";
   event.stopPropagation();
   //console.log("reset done");
});



