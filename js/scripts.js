//Business Logic//
function totalCost(pizzaType,pizzaQuantity,extraToppings,crustType){
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
  
});