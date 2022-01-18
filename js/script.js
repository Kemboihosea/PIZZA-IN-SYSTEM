var price , crust_price, topping_price ;
let total = 0;
function getorders( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
}
// proceed button
$(document).ready(function
  $("button.proceed").click(function(event){
   let name = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let crust = $("#crust option:selected").val();
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
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = topping.length*50;
    console.log("toppins value" + topping_value);

    if((size == "0") && (crust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
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
