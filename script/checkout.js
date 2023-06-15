
//           </div>
//       </div>
//   </div>

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Rabia.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
4:43
============CODE JS =============
4:44
let products = [
  {
    id: 1,
    picture: "https://i.pinimg.com/564x/b2/0a/a8/b20aa88d7ebae840541f6e152653dba3.jpg",
    name: "",
    title: "IGOR",
    cost: " R 800",
  },
  {
    id: 2,
    picture: "https://i.pinimg.com/564x/da/b0/dd/dab0dd496263668294325ab4489068f9.jpg",
    name: "",
    title: "Life Of Pablo",
    cost: "R 79 000 ",
  },
  {
    id: 3,
    picture: "https://i.pinimg.com/564x/b7/cd/c9/b7cdc92e1642c34c03db66214da05260.jpg",
    name: "",
    title: "Currents",
    cost: "R 55 000",
  },
  {
    id: 4,
    picture: "https://i.pinimg.com/564x/65/c0/c1/65c0c15ca350a5e7ef387d34e92ecdca.jpg",
    name: "",
    title: "Mary Magdeline",
    cost: "R 150 000",
  },
  {
    id: 5,
    picture: "https://i.pinimg.com/564x/77/89/49/77894941196ae0b09362241bf2a12b01.jpg",
    name: "",
    title: "In Rainbow",
    cost: "R 500 000",
  },
  {
      id: 6,
      picture: "https://i.pinimg.com/564x/79/c5/a3/79c5a3dea4f99aa29ad30273e15ef60f.jpg",
      name: "",
      title: "Portamento",
      cost: "R 40 000",
    },
    {
      id: 7,
      picture: "https://i.pinimg.com/564x/6f/bb/c6/6fbbc6cda30ac9a70f8d91cc60c2797e.jpg",
      name: "",
      title: "Whats The Sound",
      cost: "R 20 000",
    },
    {
      id: 8,
      picture: "https://i.pinimg.com/564x/4a/a3/e7/4aa3e79e1e7765ecde37b8ed293a2a62.jpg",
      name: "",
      title: "Blonde",
      cost: "R 5999",
    },
    {
      id: 9,
      picture: "https://i.postimg.cc/VNNV4w1p/Screenshot-2023-06-12-123912.png",
      name: "",
      title: "To Pimp A Butterfly",
      cost: "R500 0000 0000 ",
    },
];
let vinyls = [
  {
    id: 10,
    picture: "https://i.pinimg.com/236x/9d/00/52/9d0052841da4581048600d44b460eafa.jpg",
    name: "",
    title: "The Guerillas",
    cost: " R 5400",
  },
  {
    id: 11,
    picture: "https://i.pinimg.com/236x/20/86/56/208656d0e776ca1a550a1264b8e5d1a8.jpg",
    name: "",
    title: "You Me",
    cost: " R 30000",
  },
  {
    id: 12,
    picture: "https://i.pinimg.com/736x/f4/a0/63/f4a063039205833c6ced148f891f4a63.jpg",
    name: "",
    title: "Black ",
    cost: "R 6400",
  },
  {
    id: 13,
    picture: "https://i.pinimg.com/564x/74/b6/1a/74b61a422ddc9669d095085d659ab0a6.jpg",
    name: "",
    title: "White",
    cost: "R 57000",
  },
  {
    id: 14 ,
    picture: "https://i.pinimg.com/236x/d6/91/60/d6916017ab24997378b388eecdd31e18.jpg",
    name: "",
    title: "Princess ",
    cost: "R 75000",
  },
  {
      id: 15,
      picture: "https://i.pinimg.com/236x/8c/f8/9c/8cf89c61b4e6ecc47bfc9210e574269f.jpg",
      name: "",
      title: "Bubblegum",
      cost: "R 78000",
    },
    {
      id: 16,
      picture: "https://i.pinimg.com/236x/a3/57/55/a35755baa1c69576981ae971fdb7bfec.jpg",
      name: "",
      title: "Kisses",
      cost: "R1500",
    },
    {
      id: 17,
      picture: "https://i.pinimg.com/564x/f4/53/67/f453679288c3b61f8c301d9c092673aa.jpg",
      name: "",
      title: "K-12",
      cost: "R 3900",
    },
    {
      id: 2,
      picture: "https://i.pinimg.com/236x/05/21/31/05213183e48682e29707f13d11ea3f64.jpg",
      name: "",
      title: "StarBoy",
      cost: "R 85000",
    },
];
// let divChrome = document.querySelector("#product");
// products.forEach((reader) => {
//   divChrome.innerHTML += `
//   <div class="col-sm-2 col-lg-3 m-2">
//      <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black;margin:3rem; " >
//      <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid" >
//      <h2 class="card-title">${reader.title}</h2>
//      <h5 class="card-title price">${reader.cost}</h5>
//      <a href="" style =" color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;>
//   <button id="see ><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"  ></ion-icon></button>
//   </a>
//      </div>
//      </div>
//      `;
// });
// let divChrome = document.querySelector("#product");
// products.forEach((product) => {
//   divChrome.innerHTML += `
//   <div class="col-sm-4 col-md-4 col-lg-4">
//     <div class="card" style="width: 18rem;">
//       <img class="card-img-top" src="${product.picture}" alt="${product.name}">
//       <div class="card-body">
//         <h5 class="card-title">${product.title}</h5>
//         <p class="card-text">${product.cost}</p>
//         <button class="add-to-cart" data-name="${product.title}" data-price="${product.cost}">Add to Cart</button>
//       </div>
//     </div>
//   </div>
//   `;
// });
// let divVinyl = document.querySelector("#Vinyls");
// vinyls.forEach((reader) => {
//   divVinyl.innerHTML += `
//   <div class="col-sm-2 col-lg-3 m-2" >
//      <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black ; margin:3rem;">
//      <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid" style="height:15rem;">
//      <h2 class="card-title">${reader.title}</h2>
//      <h5 class="card-title price">${reader.cost}</h5>
//      <a href="" style =" color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;>
//   <button id="see" ><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"  ></ion-icon></button>
//   </a>
//      </div>
//      </div>
//      `;
// });
// function darkMode() {
//   if (document.body.style.backgroundColor == "black") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "black";
//     document.body.style.Color = "white";
//   }
//   console.log(document.body.style.backgroundColor);
// }
// // Function to display the cart items and total price in the checkout
// function displayCartItems() {
//   const cartItemsContainer = document.querySelector('.cart-items');
//   const totalPriceContainer = document.querySelector('.total-price');
//   let cart = localStorage.getItem('cart');
//   if (!cart) {
//     cart = [];
//   } else {
//     cart = JSON.parse(cart);
//   }
//   // Clear previous items
//   cartItemsContainer.innerHTML = '';
//   totalPriceContainer.textContent = '';
//   let totalPrice = 0;
//   cart.forEach(item => {
//     const cartItem = document.createElement('div');
//     cartItem.className = 'cart-item';
//     const itemName = document.createElement('span');
//     itemName.textContent = item.name;
//     const itemPrice = document.createElement('span');
//     itemPrice.textContent = '$' + item.price.toFixed(2);
//     cartItem.appendChild(itemName);
//     cartItem.appendChild(itemPrice);
//     cartItemsContainer.appendChild(cartItem);
//     totalPrice += item.price;
//   });
//   totalPriceContainer.textContent = 'Total Price: $' + totalPrice.toFixed(2);
// }

// // Rest of your code...
// Sort products by price
function sortByGenre() {
    vinyls.sort((a, b) => {
      const genreA = a.genre.toLowerCase();
      const genreB = b.genre.toLowerCase();
      return genreA.localeCompare(genreB);
    });
    // Clear previous vinyls
    divVinyl.innerHTML = '';
    // Display sorted vinyls
    vinyls.forEach((vinyl) => {
      divVinyl.innerHTML += `
        <div class="col-sm-2 col-lg-3 m-2">
          <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black ; margin:3rem;">
            <img class="card-img-top cardImg" src="${vinyl.picture}" alt="${vinyl.name}" loading="lazy" class="img-fluid" style="height:15rem;">
            <h2 class="card-title">${vinyl.title}</h2>
            <h5 class="card-title price">${vinyl.cost}</h5>
            <a href="" style="color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;">
              <button id="see"><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"></ion-icon></button>
            </a>
          </div>
        </div>
      `;
    });
  }
  const sortByGenreButton = document.getElementById('sort-by-genre');
  sortByGenreButton.addEventListener('click', sortByGenre);
  function sortByPrice() {
    products.sort((a, b) => {
      const priceA = parseFloat(a.cost.replace(/[^\d.-]/g, ''));
      const priceB = parseFloat(b.cost.replace(/[^\d.-]/g, ''));
      return priceA - priceB;
    });
    // Clear previous products
    divChrome.innerHTML = '';
    // Display sorted products
    products.forEach((product) => {
      divChrome.innerHTML += `
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.picture}" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.cost}</p>
              <button class="add-to-cart" data-name="${product.title}" data-price="${product.cost}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  // Sort products by genre
  function sortByGenre() {
    products.sort((a, b) => {
      const genreA = a.genre.toLowerCase();
      const genreB = b.genre.toLowerCase();
      return genreA.localeCompare(genreB);
    });
    // Clear previous products
    divChrome.innerHTML = '';
    // Display sorted products
    products.forEach((product) => {
      divChrome.innerHTML += `
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.picture}" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.cost}</p>
              <button class="add-to-cart" data-name="${product.title}" data-price="${product.cost}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  // Add event listeners to the sort buttons
  const sortByPriceButton = document.getElementById('sort-by-price');
  // const sortByGenreButton = document.getElementById('sort-by-genre');
  sortByPriceButton.addEventListener('click', sortByPrice);
  sortByGenreButton.addEventListener('click', sortByGenre);
  function addToCart(productName, productPrice) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    const product = {
      name: productName,
      price: parseFloat(productPrice)
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Product added to cart:', product);
  }
  let divChrome = document.querySelector("#product");
  products.forEach((product) => {
    divChrome.innerHTML += `
      <div class="col-sm-4 col-md-4 col-lg-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${product.picture}" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.cost}</p>
            <button class="add-to-cart" data-name="${product.title}" data-price="${product.cost}">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });
  let divVinyl = document.querySelector("#Vinyls");
  vinyls.forEach((reader) => {
    divVinyl.innerHTML += `
      <div class="col-sm-2 col-lg-3 m-2">
        <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black ; margin:3rem;">
          <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid" style="height:15rem;">
          <h2 class="card-title">${reader.title}</h2>
          <h5 class="card-title price">${reader.cost}</h5>
          <a href="" style="color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;">
            <button id="see"><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"></ion-icon></button>
          </a>
        </div>
      </div>
    `;
  });
  // Function to display the cart items and total price in the checkout
   function displayCartItems() {
     const cartItemsContainer = document.querySelector('.cart-items');
     const totalPriceContainer = document.querySelector('.total-price')
     let cart = localStorage.getItem('cart');
     if (!cart) {
       cart = [];
     } else {
       cart = JSON.parse(cart);
     }
    // Clear previous items
    cartItemsContainer.innerHTML = '';
    totalPriceContainer.textContent = '';
    let totalPrice = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      const itemPrice = document.createElement('span');
      itemPrice.textContent = '$' + item.price.toFixed(2);
      cartItem.appendChild(itemName);
      cartItem.appendChild(itemPrice);
      cartItemsContainer.appendChild(cartItem);
      totalPrice += item.price;
    });
    totalPriceContainer.textContent = 'Total Price: $' + totalPrice.toFixed(2);
  }
  displayCartItems();
  