const ADD_CANDY_TO_CART = document.querySelector("#candy_ADD_cart");
const ADD_HOUSE_TO_CART = document.querySelector("#house_ADD_cart");
const ADD_DOG_TO_CART = document.querySelector("#dog_ADD_cart");
const CART_CONTAINER = document.querySelector(".cart-container");
const CHECKOUT_BUTTON = document.querySelector("#checkout_btn");
function main() {
  //If user clicks the Add to shop (candy) button
  ADD_CANDY_TO_CART.addEventListener("click", function () {
    //this will create a new div and adding a class called "CANDY_ADDED_TO_CART". then it will add a innerHTML (or the container) and will append inside the new div "CANDY_ADDED_TO_CART".
    let CANDY_ADDED_TO_CART = document.createElement("div");
    //Adding a classname into the new div "CANDY_ADDED_TO_CART"
    CANDY_ADDED_TO_CART.className = "CANDY_ADDED_TO_CART";
    //Adding a content inside "CANDY_ADDED_TO_CART"
    CANDY_ADDED_TO_CART.innerHTML =
      "<p>Candy</p> <div class='qty'> <button id='dec_qty'>-</button> <p id='amt_qty'>1</p> <button id='inc_qty'>+</button></div> <button id='DEL_CONT'>DEL</button>";
    //Appending it inside the cart container
    CART_CONTAINER.appendChild(CANDY_ADDED_TO_CART);

    //Creates new variable for the IDs inside the new div "CANDY_ADDED_TO_CART"
    const DECREASE_QTY = CANDY_ADDED_TO_CART.querySelector("#dec_qty");
    const INCREASE_QTY = CANDY_ADDED_TO_CART.querySelector("#inc_qty");
    const AMOUNT_QTY = CANDY_ADDED_TO_CART.querySelector("#amt_qty");
    const DEL_BUTTON = CANDY_ADDED_TO_CART.querySelector("#DEL_CONT");
    const qtyFunction = CANDY_ADDED_TO_CART.querySelector(".qty");

    //Functions and designs for the new container
    QTY_FLEX_DESIGN(qtyFunction);
    CART_CONTAINER_DESIGN(CANDY_ADDED_TO_CART);
    INCREASE_QUANTITY(INCREASE_QTY, AMOUNT_QTY);
    DECREASE_QUANTITY(DECREASE_QTY, AMOUNT_QTY);
    removeEmptyTXT(); //deletes the "cart is empty text"
    ADD_CANDY_TO_CART.disabled = true; //This disables the ADD_CANDY_TO_CART button when clicked to prevent duplication
    DELETE_CART_CONTAINER(DEL_BUTTON, CANDY_ADDED_TO_CART, ADD_CANDY_TO_CART); //firat parameter: DELEETE BUTTON, second parameter: CONTAINER THAT NEEDS TO BE DELETED (Which is the CANDY_ADDED_TO_CART), third parameter: CHANGES DELETE BUTTON BG COLOR BACK TO GREEN
    ADD_CANDY_TO_CART.style.backgroundColor = "red";
  });

  //For the ADD_HOUSE_TO_CART BUTTON
  ADD_HOUSE_TO_CART.addEventListener("click", function () {
    let HOUSE_ADDED_TO_CART = document.createElement("div");
    HOUSE_ADDED_TO_CART.className = "HOUSE_ADDED_TO_CART";
    HOUSE_ADDED_TO_CART.innerHTML =
      "<p>House</p> <div class='qty'> <button id='dec_qty'>-</button> <p id='amt_qty'>1</p> <button id='inc_qty'>+</button></div> <button id='DEL_CONT'>DEL</button>";
    CART_CONTAINER.appendChild(HOUSE_ADDED_TO_CART);

    const DECREASE_QTY = HOUSE_ADDED_TO_CART.querySelector("#dec_qty");
    const INCREASE_QTY = HOUSE_ADDED_TO_CART.querySelector("#inc_qty");
    const AMOUNT_QTY = HOUSE_ADDED_TO_CART.querySelector("#amt_qty");
    const DEL_BUTTON = HOUSE_ADDED_TO_CART.querySelector("#DEL_CONT");
    const qtyFunction = HOUSE_ADDED_TO_CART.querySelector(".qty");

    QTY_FLEX_DESIGN(qtyFunction);
    CART_CONTAINER_DESIGN(HOUSE_ADDED_TO_CART);
    INCREASE_QUANTITY(INCREASE_QTY, AMOUNT_QTY);
    DECREASE_QUANTITY(DECREASE_QTY, AMOUNT_QTY);
    removeEmptyTXT();
    ADD_HOUSE_TO_CART.disabled = true;
    DELETE_CART_CONTAINER(DEL_BUTTON, HOUSE_ADDED_TO_CART, ADD_HOUSE_TO_CART);
    ADD_HOUSE_TO_CART.style.backgroundColor = "red";
  });

  //For the ADD_DOG_TO_CART BUTTON
  ADD_DOG_TO_CART.addEventListener("click", function () {
    let DOG_ADDED_TO_CART = document.createElement("div");
    DOG_ADDED_TO_CART.className = "DOG_ADDED_TO_CART";
    DOG_ADDED_TO_CART.innerHTML =
      "<p>Dog</p> <div class='qty'> <button id='dec_qty'>-</button> <p id='amt_qty'>1</p> <button id='inc_qty'>+</button></div> <button id='DEL_CONT'>DEL</button>";
    CART_CONTAINER.appendChild(DOG_ADDED_TO_CART);

    const DECREASE_QTY = DOG_ADDED_TO_CART.querySelector("#dec_qty");
    const INCREASE_QTY = DOG_ADDED_TO_CART.querySelector("#inc_qty");
    const AMOUNT_QTY = DOG_ADDED_TO_CART.querySelector("#amt_qty");
    const DEL_BUTTON = DOG_ADDED_TO_CART.querySelector("#DEL_CONT");
    const qtyFunction = DOG_ADDED_TO_CART.querySelector(".qty");

    QTY_FLEX_DESIGN(qtyFunction);
    CART_CONTAINER_DESIGN(DOG_ADDED_TO_CART);
    INCREASE_QUANTITY(INCREASE_QTY, AMOUNT_QTY);
    DECREASE_QUANTITY(DECREASE_QTY, AMOUNT_QTY);
    removeEmptyTXT();
    ADD_DOG_TO_CART.disabled = true;
    DELETE_CART_CONTAINER(DEL_BUTTON, DOG_ADDED_TO_CART, ADD_DOG_TO_CART);
    ADD_DOG_TO_CART.style.backgroundColor = "red";
  });

  CHECKOUT_BUTTON.addEventListener("click", function () {
    if (CART_CONTAINER.children.length === 0) {
      alert("there is no item in the cart");
    } else {
      alert("check out successfully");
    }
    // Remove all items from the cart
    while (CART_CONTAINER.firstChild) {
      CART_CONTAINER.removeChild(CART_CONTAINER.firstChild);
    }

    // Reset cart-related elements
    document.querySelector("#empty_text").style.display = "block";

    // Re-enable the "Add to Cart" buttons
    ADD_CANDY_TO_CART.disabled = false;
    ADD_HOUSE_TO_CART.disabled = false;
    ADD_DOG_TO_CART.disabled = false;

    // Reset the button colors
    ADD_CANDY_TO_CART.style.backgroundColor = "green";
    ADD_HOUSE_TO_CART.style.backgroundColor = "green";
    ADD_DOG_TO_CART.style.backgroundColor = "green";
  });
}
main();

//FUNCTIONS

//Function that removes the "Your cart is empty"
function removeEmptyTXT() {
  document.querySelector("#empty_text").style.display = "none";
}
//Cart Container Design
function CART_CONTAINER_DESIGN(CART_OBJECT) {
  Object.assign(CART_OBJECT.style, {
    border: "2px solid gray",
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  });
}
//quantity flex design (- 0 +)
function QTY_FLEX_DESIGN(QTY_OBJECT) {
  Object.assign(QTY_OBJECT.style, {
    display: "flex",
    width: "50px",
    justifyContent: "space-between",
  });
}
//Delete Cart Function
function DELETE_CART_CONTAINER(DELETE, CONTAINER, CHANGE_BG_TO_GREEN) {
  DELETE.addEventListener("click", function () {
    CONTAINER.remove();
    CHANGE_BG_TO_GREEN.style.backgroundColor = "green";
    //This re-enables the "Add to Cart" button
    ADD_CANDY_TO_CART.disabled = false;
    ADD_HOUSE_TO_CART.disabled = false;
    ADD_DOG_TO_CART.disabled = false;
    //Checks if the cart is empty
    if (CART_CONTAINER.children.length === 0) {
      document.querySelector("#empty_text").style.display = "block";
    }
  });
}

//Turns the number into a int datatype and increases when clicked
function INCREASE_QUANTITY(increase_qty_func, increase_qty_id) {
  increase_qty_func.addEventListener("click", function () {
    increase_qty_id.textContent = Number(increase_qty_id.textContent) + 1;
  });
}
//Turns the number into a int datatype and decreases when clicked
function DECREASE_QUANTITY(decrease_qty_func, decrease_qty_id) {
  decrease_qty_func.addEventListener("click", function () {
    decrease_qty_id.textContent = Number(decrease_qty_id.textContent) - 1;
    if (decrease_qty_id.textContent <= 1) {
      decrease_qty_id.textContent = 1;
    }
  });
}
