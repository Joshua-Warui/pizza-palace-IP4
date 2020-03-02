var totalCosts = [];
function getPizzaOrder(pizzaType,pizzaQuantity,extraToppings,crustType,pizzaSize,delivery) {
    this.pizzaType = pizzaType;
    this.pizzaQuantity = pizzaQuantity;
    this.extraToppings = extraToppings;
    this.crustType = crustType;
    this.pizzaSize = pizzaSize;
    this.delivery = delivery;
    this.sizePrice = 0;
    this.crustPrice = 0;
    this.toppingsPrice = 0;
    this.deliveryPrice = 0;
    this.price = 0;
};

getPizzaOrder.prototype.finalCost = function() {
  if (this.pizzaSize === "small") {
    this.sizePrice += 300;
  } else if (this.pizzaSize === "medium") {
    this.sizePrice += 600;
  } else if (this.pizzaSize === "large") {
    this.sizePrice += 850;
  } ;

  if (this.crustType === "stuffed") {
    this.crustPrice += 150;
  } else if (this.crustType === "thick") {
    this.crustPrice += 100;
  } else if (this.crustType === "thin") {
    this.crustPrice += 100;
  } else if (this.crustType === "gluten-free") {
    this.crustPrice += 200;
  }; 

  if (this.extraToppings === "ham") {
    this.toppingsPrice += 200;
  } else if (this.extraToppings === "cheese") {
    this.toppingsPrice += 200;
  } else if (this.extraToppings === "olives") {
    this.toppingsPrice += 200;
  }else if (this.extraToppings === "mushrooms") {
    this.toppingsPrice += 200;
  }else if (this.extraToppings === "bacon") {
    this.toppingsPrice += 200;
  };
  if(this.delivery === "delivered"){
    this.deliveryPrice = 300;
  } else if(this.delivery === "collected"){
    this.deliveryPrice = 0;
  }
  
  this.price = (this.sizePrice + this.crustPrice + this.toppingsPrice) * this.pizzaQuantity + this.deliveryPrice;
}

$(function(){
  var modal = $(".order");
  var placeOrder = $(".place-order");
  var close = $(".close");
  placeOrder.click(function(){
    modal.show();
  });
  close.click(function(){
    modal.hide();
  });
  $(".custom-pizza").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    var pizzaType = $("#pizza-type").val();
    var crustType = $("#crust-type").val();
    var extraToppings = $("#topping-type").val();
    var pizzaQuantity = parseInt($("#pizza-quantity").val());
    var delivery = $("#delivery").val();
    console.log(delivery);
    
    var newPizzaOrder = new getPizzaOrder(pizzaType,pizzaQuantity,extraToppings,crustType,pizzaSize,pizzaQuantity,delivery);
    newPizzaOrder.finalCost();
    console.log(newPizzaOrder);
    console.log(newPizzaOrder.delivery);
    console.log(newPizzaOrder.deliveryPrice);
    
    alert("You have ordered " + pizzaQuantity + " " + pizzaType + " pizza(s) with a " + crustType + " crust and " + extraToppings + " toppings. It will be " + delivery + ".");
    alert("The total is " + newPizzaOrder.price + " Ksh");
  }); 
});
