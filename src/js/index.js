import "../css/style.css";
import axios from "axios";

const body = document.body;

// Creazione elemento div per lo sfondo

const background = document.createElement("div");
body.appendChild(background);
background.setAttribute("class", "background");

// Creazione elemento section della schermata iniziale

const section = document.createElement("section");
body.appendChild(section);
section.setAttribute("class", "header");

// Funzione di creazione elementi HTML

function create(nome, tag, parent, id, text, classSelector, placeholder) {
  nome = document.createElement(tag);
  parent.appendChild(nome);
  nome.setAttribute("id", `${id}`);
  nome.textContent = `${text}`;
  if (classSelector) {
    nome.setAttribute("class", `${classSelector}`);
  } else if (placeholder) {
    nome.setAttribute("placeholder", `${placeholder}`);
    nome.setAttribute("type", "text");
  }
  return nome;
}

// Creazione elementi della schermata iniziale

const title = create("title", "h1", section, "title", "LifeStyle");
const input = create(
  "input",
  "input",
  section,
  "",
  "",
  "",
  "please enter a city name"
);
const button = create("button", "button", section, "", "search");

// Funzione di Ricerca

async function performSearch() {
  let cityName = function (name) {
    name = name.trim();
    name = name.replaceAll(" ", "-");
    return name;
  };

  let city = cityName(input.value);

  if (city.length === 0) {
    alert("Please, enter a city name.");
    return;
  }

  try {
    const data = await fetchCityData(city);
    displayResults(data);
  } catch (error) {
    console.error(error);
    alert("City not found.");
  }
}

// Chiamate API

async function fetchCityData(city) {
  try {
    const response = await axios.get(
      `https://api.teleport.org/api/cities/?search=${city}`
    );
    const data = response.data;

    if (data.count === 0) {
      throw new Error("City not found.");
    }

    const cityId =
      data._embedded["city:search-results"][0]._links["city:item"].href;
    const cityResponse = await axios.get(cityId);
    const cityData = cityResponse.data;

    // Score città
    const urbanAreaId = cityData._links["city:urban_area"].href;
    const urbanAreaScoresResponse = await axios.get(`${urbanAreaId}scores/`);
    const urbanAreaScoresData = urbanAreaScoresResponse.data;

    //Immagine città
    const urbanAreaSlug = cityData._links["city:urban_area"].href
      .split("/")
      .slice(-2)[0];
    const urbanAreaImagesResponse = await axios.get(
      `https://api.teleport.org/api/urban_areas/${urbanAreaSlug}/images/`
    );
    const urbanAreaImagesData = urbanAreaImagesResponse.data;

    return {
      teleport_cityName:
        data._embedded["city:search-results"][0].matching_full_name,
      teleport_city_score: urbanAreaScoresData.teleport_city_score,
      summary: urbanAreaScoresData.summary,
      categories: urbanAreaScoresData.categories,
      imageUrl: urbanAreaImagesData.photos[0].image.web,
    };
  } catch (error) {
    throw new Error("error during api call");
  }
}

// Schermata città

async function displayResults(data) {
  // Funzione cambiamento dello sfondo
  const changeBackground = () => {
    const bg = document.querySelector(".background");
    bg.remove();
    body.style.backgroundImage =
      "url(https://img.freepik.com/premium-photo/free-plain-sky-image_906250-81.jpg?size=626&ext=jpg&ga=GA1.1.1294237815.1669366217&semt=ais)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.width = "100%";
    body.style.height = "100%";
    body.style.backgroundSize = "cover";
  };
  section.innerHTML = section.remove();
  changeBackground();

  //  Creazione nuovi elementi HTML

  const database = create("section", "section", body, "", "", "database");
  const cityHeader = create(
    "city-header",
    "div",
    database,
    "",
    "",
    "city-header"
  );
  const heading = create("heading", "div", database, "", "", "heading");

  const box = create("box", "div", heading, "", "", "box");
  const image = create("image", "div", box, "", "", "image");
  const summary = create("summary", "div", box, "", "", "summary");

  const score = create("score", "div", database, "", "", "score");
  const textScore = create("text-score", "p", score, "", "", "text-score");
  const cityScore = create("city-score", "p", score, "", "", "city-score");
  const category = create("category", "p", score, "", "", "category");

  // Dati API -> HTML

  cityHeader.innerHTML = `<h2>${data.teleport_cityName}</h2>`;
  image.innerHTML = `<img src="${data.imageUrl}" alt=${data.teleport_cityName}>`;

  summary.innerHTML = `<h2><p>${data.summary}</p></h2>`;
  textScore.innerHTML = "CITY SCORE:";
  cityScore.innerHTML = data.teleport_city_score.toFixed(2);
  data.categories.forEach((x) => {
    category.insertAdjacentHTML(
      "afterbegin",
      `<p>${x.name}: ${x.score_out_of_10.toFixed(1)}<p>`
    );

    // Pulizia paragrafi vuoti
    let ps = document.getElementsByTagName("p");
    for (let el of ps) {
      cleaner(el);
    }

    function cleaner(el) {
      if (el.innerHTML == "&nbsp;" || el.innerHTML == "") {
        el.parentNode.removeChild(el);
      }
    }
  });
}

input.addEventListener("keydown", (enterkey) => {
  if (enterkey.key === "Enter") {
    performSearch();
  }
});

button.addEventListener("click", () => performSearch());
