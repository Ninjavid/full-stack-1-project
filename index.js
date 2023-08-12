function pokemonType() {
  let types = [
    {
      type: "Dark",
      Absol: "./Assets/dark-type/Absol.png",
      Darkrai: "./Assets/dark-type/darkrai.png",
      Weavile: "./Assets/dark-type/weavile.png",
    },
    {
      type: "Dragon",
      Dratini: "./Assets/dragon-type/dratini.png",
      Rayquaza: "./Assets/dragon-type/rayquaza.png",
      Salamence: "./Assets/dragon-type/salamence.png",
    },
    {
      type: "Electric",
      Electivire: "./Assets/electric-type/electivire.jpg",
      Pikachu: "./Assets/electric-type/Pikachu.webp",
      Zapdos: "./Assets/electric-type/zapdos.png",
    },
    {
      type: "Fairy",
      Gardevior: "./Assets/fairy-type/gardevior.jpg",
      Jigglypuff: "./Assets/fairy-type/jigglypuff.png",
      Togekiss: "./Assets/fairy-type/togekiss.png",
    },
    {
      type: "Fire",
      Arcanine: "./Assets/fire-type/arcanine.png",
      Charizard: "./Assets/fire-type/charizard.png",
      Fuecoco: "./Assets/fire-type/fuecoco.png",
    },
    {
      type: "Ground",
      Diglett: "./Assets/ground-type/diglett.jpg",
      Garchomp: "./Assets/ground-type/garchomp.png",
      Swampert: "./Assets/ground-type/swampert.jpg",
    },
    {
      type: "Ice",
      Cubchoo: "./Assets/ice-type/cubchoo.png",
      Frosslass: "./Assets/ice-type/frosslass.png",
      Glalie: "./Assets/ice-type/galie.jpg",
    },
    {
      type: "Normal",
      Audino: "./Assets/normal-type/audino.jpg",
      Munchlax: "./Assets/normal-type/munchlax.png",
      P0rygonZ: "./Assets/normal-type/porygon.jpg",
    },
    {
      type: "Poison",
      Bulbasaur: "./Assets/poison-type/bulbasaur.jpg",
      Crowbat: "./Assets/poison-type/crowbat.png",
      Gengar: "./Assets/poison-type/gengar.jpg",
    },
    {
      type: "Psychic",
      Alakazam: "./Assets/psychic-type/alakazam.png",
      Espeon: "./Assets/psychic-type/espeon.png",
      Mew: "./Assets/psychic-type/mew.png",
    },
    {
      type: "Steel",
      Jirachi: "./Assets/steel-type/jirachi.jpg",
      Metagross: "./Assets/steel-type/metagross.png",
      Steelix: "./Assets/steel-type/steelix.jpg",
    },
    {
      type: "Water",
      Gyarados: "./Assets/water-type/gyarados.png",
      Magikarp: "./Assets/water-type/magikarp.png",
      Vaporeon: "./Assets/water-type/vaporeon.png",
    },
  ];

  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let randomType = Math.floor(Math.random() * 12);
    let randomImg = Math.floor(Math.random() * 3) + 1;

    let title = document.createElement("h1");
    let img = document.createElement("img");
    let imgTitle = document.createElement("h2");
    let input = document.getElementById("name").value;
    let container = document.getElementById("content-container");
    let btn = document.getElementById("btn");

    let pokemonName = Object.keys(types[randomType]);
    let imgURL = Object.values(types[randomType]);

    if (title.innerHTML === "First enter a name") {
      // title.innerHTML = "";
      // container.appendChild(title);
      // console.log(title);
      let child = container.firstChild;

      container.removeChild(child);
      child = container.firstChild;
    } else {
      title.classList.add("title");
      title.innerHTML = `${input}, your Pokemon type is ${types[randomType].type}`;

      console.log(imgURL[randomImg]);

      imgTitle.classList.add("img-title");
      imgTitle.innerHTML = `Your chosen Pokemon is ${pokemonName[randomImg]}`;

      img.classList.add("img");
      img.src = imgURL[randomImg];

      container.appendChild(title);
      container.appendChild(imgTitle);
      container.appendChild(img);
    }
    btn.setAttribute("disabled", "disabled");

    if (input == "") {
      title.innerHTML = "You must enter a name first, clear and resubmit";
      imgTitle.innerHTML = "";
      img.src = "";
      container.appendChild(title);
      container.appendChild(imgTitle);
      container.appendChild(img);

      btn.setAttribute("disabled", "disabled");
    }
  });
}

pokemonType();

function clear() {
  let clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    let container = document.getElementById("content-container");
    let child = container.firstChild;
    let input = document.getElementById("name");
    input.value = "";

    while (child) {
      container.removeChild(child);
      child = container.firstChild;
    }

    btn.disabled = false;

    console.log("....");

    // let title = document.createElement("h1");
    // let img = document.createElement("img");
    // let imgTitle = document.createElement("h2");

    // title.innerHTML = "";
    // img.src = "";
    // imgTitle.innerHTML = "";

    // container.appendChild(title);
    // container.appendChild(imgTitle);
    // container.appendChild(img);

    // console.log(title);
  });
}

clear();
