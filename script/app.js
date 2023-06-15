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
        name: 'Igor',
        image: 'Rabia.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Currents',
        image: 'Rabia.jpg',
        price: 700
    },
    {
        id: 3,
        name: 'Life Of Pablo',
        image: 'Rabia.jpg',
        price: 80000
    },
    {
        id: 4,
        name: 'Mary Magdeline',
        image: 'Rabia.jpg',
        price: 19800
    },
    {
        id: 5,
        name: 'The Gorrillaz',
        image: 'Rabia.jpg',
        price: 320
    },
    {
        id: 6,
        name: 'Portamento',
        image: 'Rabia.jpg',
        price: 1560
    },
    {
        id: 8,
        name: 'In The Rainbow',
        image: 'Rabia.jpg',
        price: 1200
    },
    {
        id: 9,
        name: 'Blonde',
        image: 'Rabia.jpg',
        price: 170000
    },
    {
        id: 10,
        name: 'To Pimp A Butterfly',
        image: 'Rabia.jpg',
        price: 890000
    },
    {
        id: 12,
        name: 'You',
        image: 'Rabia.jpg',
        price: 69
    },
    {
        id: 13,
        name: 'Black Pink',
        image: 'Rabia.jpg',
        price: 65000
    },
    {
        id: 14,
        name: 'White Vinyl',
        image: 'Rabia.jpg',
        price: 45000
    },
    {
        id: 15,
        name: 'K-12',
        image: 'Rabia.jpg',
        price: 5780000
    },
    {
        id: 16,
        name: 'Starboy',
        image: 'Rabia.jpg',
        price: 54000
    },
   {
        id: 16,
        name: 'Dark-pink',
        image: 'Rabia.jpg',
        price: 700
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
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
                <div><img src="${value.image}"/></div>
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