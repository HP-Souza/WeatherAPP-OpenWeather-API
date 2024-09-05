//criar constante com a chave da API
const key = "e0283766cee7e7e70be7e75409ae8042";

//Função capturar o valor do input
function pesquisar() {
  let cidade = document.querySelector(".input-cidade").value;
  dados(cidade)
}

//Consumindo a API OpenWeather
async function dados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    if(dados.cod == 404){
        alert("Cidade inválida")
        return
    }
    console.log(dados)
    exibirDados(dados)
}

//Função trocar dados na tela
function exibirDados(dados){
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temperatura').innerHTML = (dados.main.temp).toFixed(0) + " °C"
    document.querySelector('.tipo-tempo').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade relativa do ar: " + dados.main.humidity + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.velocidade-vento').innerHTML = "Velocidade do Vento " + dados.wind.speed + " km/h"
}
