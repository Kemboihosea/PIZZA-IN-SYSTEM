let orderButton = document.getElementById("order");
let itemList = document.getElementById("toppings");
let outputBox = document.getElementById("output");
let outputTotalPrice = document.getElementById("total-price");
let quantity = document.getElementById("quantity").value;

orderButton.addEventListener("click", function(event) {
  event.preventDefault();
  let collection = itemList.selectedOptions;
  let output = "";

  let quantityItem = document.getElementById("quantity")
  let quantityValue = Number(quantityItem.value)
  console.log({ quantityValue })

  for (let i=0; i<collection.length; i++) {
    if (output === "") {
      output = "Your order for the following Pizza has been placed: ";
    }
    output += collection[i].label;

    if (i === (collection.length - 2) && (collection.length < 3)) {
      output +=  " and ";
    } else if (i < (collection.length - 2)) {
      output += ", ";
    } else if (i === (collection.length - 2)) {
      output += ", and ";
    }
  }

  if (output === "") {
    output = "You didn't order anything!";
  }

  let total
  const selectedValue = itemList.options[itemList.selectedIndex].value;
  // determine total price
  if(selectedValue === 'cheese') {
    console.log(`This shit`, quantityValue)
    total = quantityValue * 2000
  } 
  else if(selectedValue === 'veggie') {
    total = quantityValue * 1000
  }
  else if(selectedValue === 'meat') {
    total = quantityValue * 900
  }else if(selectedValue === 'pepperoni') {
    total = quantityValue * 900;
    console.log('')
  }
  else if(selectedValue === 'margherita') {
    total = quantityValue * 900
  }
  outputBox.innerHTML = output;
  outputTotalPrice.innerHTML = 'Ksh. ' + total

});
