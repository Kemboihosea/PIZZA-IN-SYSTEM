var price , crust_price, topping_price ;
let total = 0;
function getorders( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.chrust=chrust;
  this.cheese=cheese;
}
// proceed button
$(document).ready(function
  $("button.proceed").click(function(event){
   let name = $(".name option:selected").val();
   let size = $("#size option:selected").val();
   let chrust = $("#crust option:selected").val();
   let topping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       topping.push($(this).val());
   });
   console.log(topping.join(", "));

   switch(size);
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(chrust){
      case "0":
        chrust_price = 0;
      break;
      case "Crispy":
        chrust_price = 200;
      break;
      case "Stuffed":
        chrust_price = 250;
      break;
      case "Gluten-free":
        chrust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = topping.length*50;
    console.log("toppins value" + topping_value);

    if((size == "0") && (chrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and chrust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }
    total = price + crust
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;
