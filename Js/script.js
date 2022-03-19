// javascript contact form
function send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name.length == ""){
        alert("please enter name");
    }else if(email == ""){
        alert("invalid email!!");
    }else if(message == ""){
        alert("Please enter message");
    }else if(name && email == true){
    }else{
        alert(name + " " + "We have received your message. Thank you for reaching out to us.");
    };
}

// Jquery form validate
$(document).ready(function(){
    $("#myPizza").checkout(function() {
        // get user input
        function pizza () {
            var pizzaName = document.getElementById("pizza").value;
            return parseInt(pizzaName);
          }
          function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
          }
          function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
          }
          function toppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
          }
          function number() {
            var pizzaNumber = document.getElementById("pizzas").value;
            return parseInt(pizzaNumber);
          }

        //   constructors
        function Order(flavor, size, crust, topping, quantity) {
            this.newPizza = pizza;
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newPizzas = pizzas;
          }


          var inputs = new Order(pizza(), size(), crust(), toppings(), pizzas());

          var totalAmount =
      (inputs.newPizza +
        inputs.newSize +
        inputs.newCrust +
        inputs.newToppings) *
      inputs.newPizzas

      alert("Your Charges are " + totalAmount);
    prompt("Your Email Address");
    prompt("enter your phone number");
    prompt("Your Location");
    alert("Your pizza will be delivered. Thanks for Reaching Out to Us");

    $("#myPizza").reset();
    });
});