"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item: " + task + " added to array");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item: " + task + " has been removed from Array");
        }
        else {
            console.log("Item: " + task + " not found");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTasks = new Todo();
myTasks.addTask("Q1");
myTasks.addTask("Q2");
myTasks.listAllItems();
myTasks.deleteTask("Q2");
