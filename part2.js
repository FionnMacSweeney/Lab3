var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Item: " + task + " added to array");
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item: " + task + " has been removed from Array");
    }
    else {
        console.log("Item: " + task + " not found");
    }
    return tasks.length;
}
addTask("Part A");
var count = addTask("Part B");
console.log(count);
listAllTasks();
count = deleteTask("Part B");
console.log(count);
