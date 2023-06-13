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
let divChrome = document.querySelector("#product");
products.forEach((reader) => {
  divChrome.innerHTML += `
  <div class="col-sm-2 col-lg-3 m-2">
     <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black;margin:3rem; " >
     <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid" >
     <h2 class="card-title">${reader.title}</h2>
     <h5 class="card-title price">${reader.cost}</h5>
     <a href="" style =" color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;>
  <button id="see ><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"  ></ion-icon></button>
  </a>
     </div>
     </div>
     `;
});
let divVinyl = document.querySelector("#Vinyls");
vinyls.forEach((reader) => {
  divVinyl.innerHTML += `
  <div class="col-sm-2 col-lg-3 m-2" >
     <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black ; margin:3rem;">
     <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid" style="height:15rem;">
     <h2 class="card-title">${reader.title}</h2>
     <h5 class="card-title price">${reader.cost}</h5>
     <a href="" style =" color:black; width: 4rem; margin-left:6rem;margin-bottom:1rem;border-radius:30%;>
  <button id="see" ><ion-icon name="cart-outline" style="height: 3rem; width: 2rem; margin-left: 2rem;"  ></ion-icon></button>
  </a>
     </div>
     </div>
     `;
});

function darkMode() {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.Color = "white";
  }
  console.log(document.body.style.backgroundColor);
}

