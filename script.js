function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let texto = document.querySelector("p#nome");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas na cidade em que você está. `;
  if (hora >= 4 && hora < 12) {
    //Bom dia
    img.src = "imagens/manha.png";
    document.body.style.background = "#fadeb9";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = "imagens/tarde.png";
    document.body.style.background = "#cda253";
  } else if (hora >= 18 || hora < 4) {
    img.src = "imagens/noite.png";
    document.body.style.background = "#122546";
    texto.style.color = "white";
    //Boa noite
  }
}

//PREVISÃO -------------------------------------------------------------

//sem dotenv
// Variáveis e seleção de elementos.
const apiKey = "15133bb2990d7b7cdf9aea19ab4a5d78";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  if (data.name == undefined) {
    alert(
      "Cidade não encontrada! Por favor digite o nome corretamente ou escolha outra cidade."
    );
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/shiny/64.png`
  );
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
};

//Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});
