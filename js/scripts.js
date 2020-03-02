//Business Logic//
function findTotalCost(pizzaType,pizzaQuantity,extraToppings,crustType){
  var totalPizzaCost = pizzaType + pizzaQuantity + extraToppings + crustType;
  return totalPizzaCost;
};

function resetFieldValues(){
  pizzaSize = "";
  pizzaType = "";
  extraToppings = "";
  crustType = "";
  $("#pizza-quantity").val() = "";
};



//User Logic//
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
  $("order-placement").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizza-size select").val();
    var pizzaType = $("#pizza-type select").val();
    var crustType = $("#crust-type select").val();
    var extraToppings = $("#topping-type select").val();
    var pizzaQuantity = parseInt($("pizza-quantity select").val());
    console.log(pizzaSize);
    console.log(pizzaType);
    console.log(crustType);
    console.log(extraToppings);
    console.log(pizzaQuantity);
  });
});