var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {
	if(input === "list") {
      todos.forEach(function(todo, i){
         
      	alert(i + ": " + todo);
      });
	  
    } else if(input === "new") {
	  var newTodo = prompt("Enter new Todo");
	  todos.push(newTodo);
    } else if(input === "delete") {
    	var index = prompt("Enter the index of Todo to delete");
    	todos.splice(index,1);
    }
    input = prompt("What would you like to do?");
}
alert("OK, YOU QUIT THE APP");