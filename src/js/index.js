import '../css/style.css'

const body = document.body;

// Creazione elemento div per lo sfondo

const background =document.createElement('div');
body.appendChild(background);
background.setAttribute('class', 'background')

// Creazione elemento section della schermata iniziale

const section = document.createElement('section');
body.appendChild(section);
section.setAttribute('class', 'header')

// Funzione di creazione elementi HTML

function create(nome, tag, parent, id, text, classSelector, placeholder) {
    nome = document.createElement(tag);
    parent.appendChild(nome);
    nome.setAttribute('id', `${id}`);
    nome.textContent = `${text}`;
    if (classSelector) {
        nome.setAttribute('class', `${classSelector}`)
    }
    else if (placeholder) {
        nome.setAttribute('placeholder', `${placeholder}`);
        nome.setAttribute('type', 'text')
    } return nome;
}

// Creazione elementi della schermata iniziale

const title = create('title', 'h1', section, 'title', 'LifeStyle');
const input = create('input', 'input', section, '','','','please enter a city name');
const button = create('button', 'button', section, '', 'search');

let city;

let cityName = function (name) {
    name = name.toLowerCase();
    name = name.trim();
    name = name.replaceAll(" ", "-");
    return name;
};

const getData = async function () {
    const getScore = await fetch(
        `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
    );

    const dataScore = await getScore.json();

    const getImage = await fetch(
        `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
    );

    const dataImage = await getImage.json()

    // Funzione cambiamento dello sfondo
    const changeBackground = () => {
        const bg = document.querySelector(".background");
        bg.remove();
        body.style.backgroundImage = "url(https://img.freepik.com/premium-photo/free-plain-sky-image_906250-81.jpg?size=626&ext=jpg&ga=GA1.1.1294237815.1669366217&semt=ais)";
        body.style.backgroundRepeat = "no-repeat";
        body.style.width = "100%";
        body.style.height = "100%";
        body.style.backgroundSize = "cover";
    };

    if (getScore.status != 404) {

        // Rimozione schermata iniziale e cambio di sfondo

        section.innerHTML = section.remove();
        changeBackground();

        //  Creazione nuovi elementi HTML

        const database = create('section', 'section', body, '', '', 'database');
        const cityHeader = create('city-header', 'div', database, '', '', 'city-header');
        const heading = create('heading', 'div', database, '', '', 'heading');
        
        const box = create('box', 'div', heading, '', '', 'box');
        const image = create('image', 'div', box, '', '', 'image');
        const summary = create('summary', 'div', box, '', '', 'summary');

        const score = create('score', 'div', database, '', '', 'score');
        const textScore = create('text-score', 'p', score, '', '', 'text-score');
        const cityScore = create('city-score', 'p', score, '', '', 'city-score');
        const category = create('category', 'p', score, '', '', 'category');

        cityHeader.innerHTML = `<h2>${city}</h2>`;
        image.innerHTML = `<img src="${dataImage.photos[0].image.web}" alt=${city}>`;

        summary.innerHTML = `<h2><p>${dataScore.summary}</p></h2>`;
        textScore.innerHTML = "CITY SCORE:";
        cityScore.innerHTML = dataScore.teleport_city_score.toFixed(2);
        dataScore.categories.forEach((x) => {
            category.insertAdjacentHTML(
                "afterbegin",
                `<p>${x.name}: ${x.score_out_of_10.toFixed(1)}<p>`
                );

                let ps = document.getElementsByTagName('p');
                for (let el of ps) {
                cleaner(el);
            };

            function cleaner(el) {
                if (el.innerHTML == '&nbsp;' || el.innerHTML == '') {
                    el.parentNode.removeChild(el);
                }
            };
        });
    };  
};

const errorEmpty = () => {
    if (!input.value) {
      alert('Enter a city, please!');
    }
};
  
input.addEventListener("keydown", function (enterkey) {
    if (enterkey.key === "Enter") {
      city = cityName(input.value);
      getData();
      errorEmpty();
    }
});
  
button.addEventListener("click", function () {
    city = cityName(input.value);
    getData();
    errorEmpty();
});