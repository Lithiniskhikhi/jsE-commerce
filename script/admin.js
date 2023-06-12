    let Music = JSON.parse(localStorage.getItem('Music')) ?
    JSON.parse(localStorage.getItem('Music')) : [{
      
                    id: 0,
                    name: "Igor",
                    genre:"Hip hop Album",
                    picture:"https://i.postimg.cc/nrRK13fJ/Screenshot-2023-06-12-101528.png",
                    price: 4500,
                },
                {
                    id: 1,
                    name: "The Life Of Pablo",
                    genre:"Hip hop Album",
                    picture:"https://i.postimg.cc/Y0j05WS6/Screenshot-2023-06-12-104357.png",
                    price: 2000,
                },
                {
                    id: 2,
                    name: "Currents",
                    genre:"Indie Albums",
                    picture: "https://i.postimg.cc/tgVLMCys/Screenshot-2023-06-12-104523.png",
                    price: 500,
                },
                {
                  id: 3,
                  name: "Mary Magdeline",
                  genre:"Indie Albums",
                  picture: "https://i.postimg.cc/sf85VjRj/Screenshot-2023-06-12-104628.png",
                  price: 2000,
              },
              {
                id: 4,
                name: "In Rainbows",
                genre:"Alternative rock",
                picture: "https://i.postimg.cc/8CSz43gg/Screenshot-2023-06-12-104854.png",
            },
            {
              id: 5,
              name: "Portamento",
              genre:"Indie Albums",
              picture: "https://i.postimg.cc/4xqJyx15/Screenshot-2023-06-12-105042.png",
              price: 70000,
          },
          {
            id: 6,
            name: "What the story",
            genre:"Alternative rock",
            picture: "https://i.postimg.cc/zfC9Nz23/Screenshot-2023-06-12-105057.png",
            price: 5000,
        },
        {
          id: 7,
          name: "Blonde",
          genre:"RNB",
          picture: "https://i.postimg.cc/jd8f8ysS/Screenshot-2023-06-12-105112.png",
          price: 1500,
        },
        {
          id: 8,
          name: "To Pimp A Butterfly",
          genre:"Hip hop Album",
          picture: "https://i.postimg.cc/VNNV4w1p/Screenshot-2023-06-12-123912.png",
          price: 68000,
        },
        {
          id: 9,
          name: " the Goarillas",
          genre:"",
          picture: "https://i.postimg.cc/05CT6yfs/Screenshot-2023-06-12-105127.png",
          price: 90000,
        },
        {
          id: 10,
          name: "You Me",
          genre:"Vinyl players",
          picture: "https://i.postimg.cc/0N0NbqXH/Screenshot-2023-06-12-105140.png",
          price: 800,
        },
        {
          id: 11,
          name: "black pink",
          genre:"Vinyl players",
          picture: "https://i.postimg.cc/9QSkZ4KD/Screenshot-2023-06-12-105213.png",
          price: 5000,
        },
        {
          id: 12,
          name: "white",
          genre:"Vinyl players",
          picture: "https://i.postimg.cc/3JLmxVbB/Screenshot-2023-06-12-105232.png",
          price: 5000,
        },
        {
          id: 13,
           name: "princess",
           genre:"Vinyl players",
           picture: "https://i.postimg.cc/02tX1tGg/Screenshot-2023-06-12-105245.png",
          price: 3000,
        },
        {
          id: 14,
          name: "dark pink",
          genre:"Vinyl players",
          picture: "https://i.postimg.cc/K802Vrj4/Screenshot-2023-06-12-105259.png",
          price: 2000,
        },
        {
          id: 15,
          name: "k-12",
          genre:"Vinyl players",
          picture: "https://i.postimg.cc/fTkkBLBc/Screenshot-2023-06-12-105312.png",
          price: 2500,
        },
        {
          id: 16,
          name: "Kisses",
          genre:"Vinyl players",
          picture: "https://i.pinimg.com/236x/a3/57/55/a35755baa1c69576981ae971fdb7bfec.jpg",
          price: 1500,
        },  
        {
          id: 17,
          name: "StarBoy",
          genre:"Vinyl players",
          picture: "https://i.pinimg.com/236x/05/21/31/05213183e48682e29707f13d11ea3f64.jpg",
          price: 85000,
         
        },   
    ];
    localStorage.setItem('Music', JSON.stringify(Music))

    function loadData() {
      let plants
      if(localStorage.getItem('Music') == null) {
        Music = [];
      }else {
        Music = JSON.parse(localStorage.getItem('Music'))
      }

      let display = document.getElementById('tableContent')
    
    // clear items
    display.innerHTML = ""

    // displaying on html
    Music.forEach((item) => {
        display.innerHTML += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.genre}</td>
            <td><img src="${item.picture}" style="width:5rem;"></img></td>
            <td>${item.price}</td>
          
            <td><button onclick="editItem(${item.id})" data-bs-toggle="modal" data-bs-target="#Modal1" style=" border: none; background-color: white;"><i class="fa-solid fa-pen"></i></button></td>

            <td><button style=" border: none; background-color: white;" onclick="delItem(${item.id})"><i class="fa-solid fa-trash-can"></button></i></td>
        </tr>
        `
    })
}

document.onload = loadData();

function addItem() {
  let id = document.querySelector('#itemID').value;
  let name = document.querySelector('#name').value;
  let genre = document.querySelector('#genre').value;
  let price = document.querySelector('#price').value;
  let picture = document.querySelector('#picture').value;
  

  console.log('reached');

  let music
  if(localStorage.getItem('Music') == null) {
    music = [];
  }else {
    music = JSON.parse(localStorage.getItem('Music'))
  }

  Music.push({
   id: id,
   name: name,
   genre: genre,
   type: type,
   picture: picture,
   price: price
  })

  localStorage.setItem('Music', JSON.stringify(Music));
  loadData();

  id = document.querySelector('#itemID').value = '';
  name = document.querySelector('#name').value = '';
  type = document.querySelector('#type').value = '';
  genre = document.querySelector('#genre').value = '';
  price = document.querySelector('#price').value = '';
} 
// delete function
function delItem(id) {
    Music = Music.filter(item => {
        return item.id !== id
    })

    // update localStorage
    localStorage.setItem('Music', JSON.stringify(Music))

    // Show items 
    loadData(Music)
}

// edit function 
function editItem(id) {
    document.getElementById("name").value = Music[id].name;
    document.getElementById("type").value = Music[id].type;
    document.getElementById("Genre").value = Music[id].genre
    document.getElementById("price").value = Music[id].price


}
function editItem(){
editButtons = [...document.querySelectorAll('.edit-btn')];
editButtons.forEach((item)=>{
    item.addEventListener('click', Music)
})
}
function editMusicItem(){
    let newName = prompt('Enter new name:');
    let index = editButtons.indexOf(event.target);
    Music[index].name = newName;
    localStorage.setItem('Music', JSON.stringify(Music));
    renderList();
}

    editItem();
// textSearch
const textSearch = (e) => {
    const text = e.target.value;
    const filteredItems = Music.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    );
    
    loadData(filteredItems);
};

// sort price dropdown
function priceSort(e) {
    const type = e.target.value;
    if (type === "all") {
        return loadData(Music)
    }
    console.log(typeof type);
    const filtered = Music.filter((item) => item.price == type);

    return loadData(filtered);
}

function genreSort(e) {
  const type = e.target.value;
  if (type === type.innerHTML) {
      return loadData(Music)
  }
  console.log(type);
  const filtered = Music.filter((item) => item.genre == type);

  return loadData(filtered);
}

function updateBtn(id) {
    

    let name = document.getElementById("name").value;

    let type = document.getElementById("type").value;

    let abilities = document.getElementById("Genre").value;

    let price = document.getElementById("price").value;

    // update localStorage
    localStorage.setItem('Music', JSON.stringify(Music))

    // Show items 
    loadData(Music)
}

loadData(Music)