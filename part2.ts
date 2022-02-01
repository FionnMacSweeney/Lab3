let tasks:Array<string>=[];
function addTask(task:string):number{
    tasks.push(task);
    console.log("Item: "+task+" added to array");
    return tasks.length;


}

function listAllTasks():void{
    tasks.forEach(function(item){
        console.log(item);
    })

}

function deleteTask(task:string):number{
    let index = tasks.indexOf(task);
    if (index > -1){
        tasks.splice(index, 1);
        console.log("Item: "+task+ " has been removed from Array")
    }else{
        console.log("Item: "+task+ " not found")
    }
    return tasks.length;

}

addTask("Part A");
let count:number = addTask("Part B");
console.log(count);

listAllTasks();

count = deleteTask("Part B");
console.log(count);