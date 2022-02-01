import {TododInterface} from './Todointerface'

class Todo implements TododInterface {
    tasks:Array<string> = [];

    addTask(task:string):number{
        this.tasks.push(task);
        console.log("Item: "+task+" added to array");
        return this.tasks.length
    
    }

    listAllItems():void{
        this.tasks.forEach(function(item){
            console.log(item);
        })
    
    }

    deleteTask(task:string):number{
        let index = this.tasks.indexOf(task);
        if (index > -1){
            this.tasks.splice(index, 1);
            console.log("Item: "+task+ " has been removed from Array")
        }else{
            console.log("Item: "+task+ " not found")
        }
        return this.tasks.length;
    
    }
}

let myTasks = new Todo();
myTasks.addTask("Q1");
myTasks.addTask("Q2");
myTasks.listAllItems();
myTasks.deleteTask("Q2");