const movieSelector1 = document.getElementById("select-movie");
const charactersButton = document.getElementById("show-characters-info");
const resultAreaForCharacters = document.getElementById("for-charachters");
const planetsButton = document.getElementById("show-planets");
const resultAreaForPlanets = document.getElementById("for-planets");
const swithcButtonsForPlanets = document.getElementById("swithc-buttons-for-planets");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const inputArea = document.getElementById("input");

const mainURL = "http://swapi.dev/api/";
const toHTTPS = (url) =>
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);
const sendRequest = (url) => {
  const newURL = toHTTPS(url);
  return fetch(newURL)
    .then((res) => res.json())
    .catch("oops problem on the 3rd str");
};

/*first task for characters*/
function urlForMovie(num) {
  return `${mainURL}films/${num}/`;
}
charactersButton.addEventListener("click", () => {
  let movie = urlForMovie(inputArea.value);
  console.log(movie)
  let character = "";
  sendRequest(movie)
    .then((res) => res.characters.map(sendRequest))
    .then((res) => Promise.all(res))
    .then((res) => {
      res.map((el) => {
        character += `<div class="character-inf-box">
                          <h3>Name</h3><h4>: ${el.name}, </h4>
                          <h3> Birth date</h3><h4>: ${el.birth_year}, </h4>
                          <h3> Gender</h3><h4>: ${el.gender}.</h4>
                    </div>`;
        resultAreaForCharacters.innerHTML = `${character}`;
      });
    });
});
/*first task for characters*/

/*second task for planets*/
let page = 1;
function urlForPlanets(page) {
  return `${mainURL}planets/?page=${page}`;
}
const getPlanetInfoCard = (planet) => {
  return`<div class="planet-inf-box"> 
          <h3>Name</h3>
          <h4>: ${planet.name},</h4> 
        </div>`
}
planetsButton.addEventListener("click", () => {
  sendRequest(urlForPlanets(page)).then((data) => {
    let planet = "";
    data.results.forEach((el) => {
      planet += getPlanetInfoCard(el);
      resultAreaForPlanets.innerHTML = `${planet}`;
    });
  });
  swithcButtonsForPlanets.style = "visibility: inherit;";
});
let currentPage = 1;
nextButton.addEventListener("click", () => {
  if (currentPage >= 21) {
    return;
  } else {
    sendRequest(urlForPlanets((page += 1))).then((data) => {
      let planet = "";
      data.results.forEach((el) => {
        planet += getPlanetInfoCard(el);
        resultAreaForPlanets.innerHTML = `${planet}`;
      });
      currentPage += page;
      console.log(currentPage)
    });
  }
});
prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  } else {
    sendRequest(urlForPlanets((page -= 1))).then((data) => {
      let planet = "";
      data.results.forEach((el) => {
        planet += getPlanetInfoCard(el);
        resultAreaForPlanets.innerHTML = `${planet}`;
      });
      currentPage -= page;
      console.log(currentPage)
    });
  }
});
/*second task for planets*/
