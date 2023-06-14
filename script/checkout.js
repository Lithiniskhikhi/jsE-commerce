// let checkout = JSON.parse(localStorage.getItem('Music'));

// //  Attach event listeners to "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('#see');
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', addToCart);
// });

// //  Event handler function
// function addToCart(event) {
//   const button = event.target;
//   const item = button.parentElement;

//   // Retrieve item information
//   const itemName = item.querySelector('#name').textContent;
//   const itemPrice = item.querySelector('#price').textContent;
//   //

//   // Create a new object representing the selected item
//   const selectedItem = {
//     name: itemName,
//     price: itemPrice


//   };

//   // Add the selected item to the checkout array
//   checkout.push(selectedItem);

//   // Update localStorage with the updated checkout array
//   localStorage.setItem('checkout', JSON.stringify(checkout));

//   // Display the items in the checkout
//   loadData(checkout);
// }

// // Function to display the items in the checkout
// function loadData(data) {
//   // Clear items
//   display.innerHTML = "";

//   // Display items in the checkout
//   data.forEach((item) => {
//     display.innerHTML += `
//     <tr>
//         <th scope="row">${item.id}</th>
//         <td>${item.name}</td>
//         <td>${item.type}</td>
//         <td><img src="${item.image}"></img></td>
//         <td>${item.price}</td>

//         <td><button onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#Modal1" style=" border: none; background-color: white;"><i class="fa-solid fa-pen"></i></button></td>

//         <td><button style=" border: none; background-color: white;" onclick="delItem(${item.id})"><i class="fa-solid fa-trash-can"></button></i></td>
//     </tr>
//     `;
//   });
// }

// // Load and display items in the checkout when the page loads
// loadData(checkout);
// function darkMode() {
//   if (document.body.style.backgroundColor == "black") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "black";
//     document.body.style.Color = "white";
//   }
//   console.log(document.body.style.backgroundColor);
// }
// Music.forEach((item) => {
//   display.innerHTML += `
//       <tr>
//           <th scope="row">${item.id}</th>
//           <td>${item.name}</td>
//           <td>${item.genre}</td>
//           <td><img src="${item.picture}" style="width:5rem;"></img></td>
//           <td>${item.price}</td>
        
//           <td><button onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#Modal1" style=" border: none; background-color: white;"><i class="fa-solid fa-pen"></i></button></td>

//           <td><button style=" border: none; background-color: white;" onclick="delItem(${item.id})"><i class="fa-solid fa-trash-can"></button></i></td>
//       </tr>
//       `;
// })};

// document.onload = loadData();

// function addItem() {
//   let id = document.querySelector("#itemID").value;
//   let name = document.querySelector("#name").value;
//   let genre = document.querySelector("#genre").value;
//   let price = document.querySelector("#price").value;
//   let picture = document.querySelector("#picture").value;

//   console.log("reached");

//   let Music;
//   if (localStorage.getItem("Music") == null) {
//     Music = [];
//   } else {
//     Music = JSON.parse(localStorage.getItem("Music"));
//   }

//   Music.push({
//     id: id,
//     name: name,
//     genre: genre,
//     type: type,
//     picture: picture,
//     price: price,
//   });}

//   onclick="addItem()

// let newProduct = JSON.parse(localStorage.getItem('Music'));

// let addToCheckout = document.querySelector('#addToCheckout');
// console.log(newProduct)
// Object.keys(newProduct).forEach((item) => {   
//     if (newProduct[item]){

//         addToCheckout.innerHTML +=
//         `
//         <div class="col-sm-5 card" id="addItem">
//         <h6>ID. ${newProduct[item].id}</h6>
//                     <img src=${newProduct[item].image} class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">${newProduct[item].bookTitle}</h5>
//                             <h6 class="card-text">R${newProduct[item].price}</h6>
//                         </div>
//                 </div>

//         `
//     };
// })  

// let itemData = JSON.parse(localStorage.getItem('Music'));

// console.log(itemData)

// let nameOfItems = document.querySelector('#nameOfItems');

// Object.keys(itemData).forEach((item) => {
//     if(itemData[item]){
//         nameOfItems.innerHTML +=
//         `
//         <h6>${itemData[item].bookTitle}</h6>
//         `
//     }
// })

// let priceOfItems = document.querySelector('#priceOfItem');

// Object.keys(itemData).forEach((item) => {
//     if(itemData[item]){
//         priceOfItems.innerHTML +=
//         `
//         <h6>R${itemData[item].price}</h6>
//         `
//     }
// })

// let totalOfItems = document.querySelector('#totalOfItem');

// function addAmounts(){
//     let itemsTotal = newProduct.reduce((item1, item2) => {
//         return (item1 + item2.price)
// }, 0);


// totalOfItems.innerHTML +=
// `
// <h6>R${itemsTotal}</h6>
// `
// }
// addAmounts();

function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((data) => {
      let productElement = document.createElement("div");
      productElement.innerHTML = `
      <img src="${data.image}" alt="${data.name}" id="product-img">
      <h3>${data.name}</h3>
      <p>R${data.price}</p>
      <button onclick="addToCart(${data.id})" class=" btn add-btn">Add To Cart</button>`;
      ourProducts.appendChild(productElement);
  });
};
let cart = JSON.parse(localStorage.getItem("products")) || [];
function addToCart(productId) {
  let product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("cart-body");
  localStorage.setItem("products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
      let cartProduct = document.createElement("div");
      cartProduct.innerHTML = `
      <span>${product.name}</span>
      <span>${product.price}</span>
      <input type="number" placeholder="1" min="1" width="50px" height="40px">
      <p>Total ${product.price}</p>
      <button onclick="deleteFromCart(${index})" class="delbtn">Delete</button>`;
      cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0
  cart.forEach(item => {
    total +=  eval(item.price)
  })
  totalElement.textContent = `${total}`;
}
displayProducts();
updateCart();

<div class="container pt-4 pb-4" id="productsAndCart">
      <div class="row" id="dataCalculation">
          <div class="col">
              <div class="container">
                  <div class="row" id="cart">
                      <div class="col m-1">
                          <h4>Items:</h4>
                          <div class="col" id="nameOfItems"></div>
                      </div>
                      <div class="col m-1">
                          <h4>Amount:</h4>
                          <div class="col" id="priceOfItem"></div>
                      </div>
                      <div class="col-12">
                          <h4>Total:</h4>
                          <div class="col" id="totalOfItem"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col" id="productDisplay">
              <div class="container">
                  <div class="row justify-content-center" id="addToCheckout">
                  </div>
              </div>
          </div>
      </div>
  </div>












