let products = [
    {
      id: 1,
      picture: "https://i.pinimg.com/564x/b2/0a/a8/b20aa88d7ebae840541f6e152653dba3.jpg",
      name: "skincare",
      title: "",
      cost: " ",
    },
    {
      id: 2,
      picture: "https://i.pinimg.com/564x/da/b0/dd/dab0dd496263668294325ab4489068f9.jpg",
      name: "skincare",
      title: "",
      cost: " ",
    },
    {
      id: 2,
      picture: "https://i.pinimg.com/564x/b7/cd/c9/b7cdc92e1642c34c03db66214da05260.jpg",
      name: "skincare",
      title: "",
      cost: "",
    },
    {
      id: 2,
      picture: "https://i.pinimg.com/564x/65/c0/c1/65c0c15ca350a5e7ef387d34e92ecdca.jpg",
      name: "skincare",
      title: "",
      cost: "",
    },
    {
      id: 2,
      picture: "https://i.pinimg.com/564x/77/89/49/77894941196ae0b09362241bf2a12b01.jpg",
      name: "skincare",
      title: "",
      cost: "",
    },

    {
        id: 2,
        picture: "https://i.pinimg.com/564x/79/c5/a3/79c5a3dea4f99aa29ad30273e15ef60f.jpg",
        name: "skincare",
        title: "",
        cost: "",
      },
      {
        id: 2,
        picture: "https://i.pinimg.com/564x/6f/bb/c6/6fbbc6cda30ac9a70f8d91cc60c2797e.jpg",
        name: "skincare",
        title: "",
        cost: "",
      },
    

      {
        id: 2,
        picture: "https://i.pinimg.com/564x/f4/11/92/f41192b1056f1c445f65062ece18dcc9.jpg",
        name: "skincare",
        title: "",
        cost: "",
      },
  ];
  
  let divChrome = document.querySelector("#product");
  products.forEach((reader) => {
    divChrome.innerHTML += `
    <div class="col-sm-2 col-lg-3 m-2">
       <div class="card cards-wrapper" style="width: 18rem;border: 3px solid black">
       <img class="card-img-top cardImg" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid">
       <h2 class="card-title">${reader.title}</h2>
       <p class="card-title price">${reader.cost}</p>
      
       <a href="https://www.glamourmagazine.co.uk/topic/skincare">
    <button id="see"></button>
  </a>
       </div>
       </div>
       `;
  });
   
  
  