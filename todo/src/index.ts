import { TodoCollection } from "./TodoCollection";
import { TodoItem } from "./TodoItem";

let todos: TodoItem[] = [
    new TodoItem(1,"Buy Flowers"),
    new TodoItem(2,"Collect Tickets"),
    new TodoItem(3,"Get shoes")
];

let collection: TodoCollection = new TodoCollection("Michael", todos);


collection.todoItems.forEach(todo => todo.printDetails());

let id: number = collection.addTodo("checking on the collection class functionality");

let todo: TodoItem = collection.getTodoById(id);
collection.markComplete(id, true);
todo.printDetails();

