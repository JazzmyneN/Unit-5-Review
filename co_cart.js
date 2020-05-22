"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Jazzmyne Nixon
   Date: 5/21/2020
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function(){
   calcCart();
   document.getElementById('modelQty').onchange = calcCart();
   for(var i = 0; i < 3; i++){
      document.querySelectorAll('input[name="shipping"]')[i].addEventListener('click', calcCart());
   }
});

function calcCart() {
   var orderCost = document.getElementById("modelCost").value * document.getElementById("modelQty").value;
   document.getElementById("orderCost").value = formatUSCurrency(orderCost);

   var shipCost =  document.querySelector('input[name="shipping"]:checked').value * document.getElementById("modelQty").value;
   document.getElementById("shippingCost").value = formatUSCurrency(shipCost, 2);

   document.getElementById("subTotal").value = formatNumber((orderCost + shipCost), 2);

   var salesTax = 0.05 * (orderCost + shipCost);
   document.getElementById("salesTax").value = formatNumber(salesTax, 2);

   document.querySelector('input[name="shipping"]:checked').id
}


function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
