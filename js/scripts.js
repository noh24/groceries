function shoeCart() {
  const shoes = document.querySelectorAll("input[name=shoes]:checked"); 
  const shoesArray = Array.from(shoes);

  const shoeUl = document.createElement("ul");
  const newArray = [];
  shoesArray.forEach(function(shoe) {
    const upperShoe = shoe.value.toUpperCase();
    newArray.push(upperShoe);
    newArray.sort();
  });
  
  newArray.forEach(function(shoe) {
    const shoeLi = document.createElement("li");
    shoeLi.append(shoe);
    shoeUl.append(shoeLi);
    document.body.append(shoeUl);
  });
}
function bodyPartCart() {
  const bodyPart = document.querySelectorAll("input[name=body]:checked");
  const bodyPartArray = Array.from(bodyPart);

  const ul = document.createElement("ul");
  const newArray = [];
    bodyPartArray.forEach(function(bodyPart) {
    const capBodyParts = bodyPart.value.toUpperCase();
    newArray.push(capBodyParts);
    newArray.sort();
  });  
  
  newArray.forEach(function(bodyPart) {
    const li = document.createElement("li");
    li.append(bodyPart);
    ul.append(li);
    document.body.append(ul);
  });
}
function hideForm() {
  const form = document.querySelector("form#groceries");
  form.remove();
}
function cart(e) {
  e.preventDefault();
  shoeCart();
  bodyPartCart();
  hideForm();
  
  
}

document.querySelector("form#groceries").addEventListener("submit", cart); 