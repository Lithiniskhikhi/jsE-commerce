let checkout = JSON.parse(localStorage.getItem('Music'));

//  Attach event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('#see');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

//  Event handler function
function addToCart(event) {
  const button = event.target;
  const item = button.parentElement;

  // Retrieve item information
  const itemName = item.querySelector('#name').textContent;
  const itemPrice = item.querySelector('#price').textContent;
  //

  // Create a new object representing the selected item
  const selectedItem = {
    name: itemName,
    price: itemPrice


  };

  // Add the selected item to the checkout array
  checkout.push(selectedItem);

  // Update localStorage with the updated checkout array
  localStorage.setItem('checkout', JSON.stringify(checkout));

  // Display the items in the checkout
  loadData(checkout);
}

// Function to display the items in the checkout
function loadData(data) {
  // Clear items
  display.innerHTML = "";

  // Display items in the checkout
  data.forEach((item) => {
    display.innerHTML += `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td><img src="${item.image}"></img></td>
        <td>${item.price}</td>

        <td><button onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#Modal1" style=" border: none; background-color: white;"><i class="fa-solid fa-pen"></i></button></td>

        <td><button style=" border: none; background-color: white;" onclick="delItem(${item.id})"><i class="fa-solid fa-trash-can"></button></i></td>
    </tr>
    `;
  });
}

// Load and display items in the checkout when the page loads
loadData(checkout);
