


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
  window.click(function(event){
    if(event.target == modal){
      modal.hide();
    };
  });
});