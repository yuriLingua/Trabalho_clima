
const key = "7a20d622eba163f883023cbe4b02900c"

function colocarDadostela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    var ifaalgo = dados.weather[0].icon
    var coisa = Math.floor(dados.main.temp)
    var frase = ('Não é necessario o uso de Protetor solar a Noite..')
    var frase2 = ("Raios UV baixo , Não é necessario o uso de protetor solar")

    if(ifaalgo == "01d","01n","02n","02d" ){
      document.querySelector(".topo_at2").innerHTML = frase
    }
    if (coisa < [24.00,] ) {
      document.querySelector(".topo_at").innerHTML = frase2
    }
    else{
     return("erro");
  }
  
  }
async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadostela(dados)
} 


function cliqueiNobotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}



function indicaCOR1() {
  var indica = "Proteja-se com protetor solar com FPS altos de 70 para cima. e hidrate-se"
  
  document.querySelector('.topo_1').innerHTML = indica
};

function indicaCOR2() {
  var indica2 = "Proteja-se com protetor solar com FPS altos de 60 a 80 . e hidrate-se"
  
  document.querySelector('.topo_2').innerHTML = indica2
};

function indicaCOR3() {
  var indica3 = "Proteja-se com protetor solar com FPS  meio médios de 50 a 70 . e hidrate-se"
  
  document.querySelector('.topo_3').innerHTML = indica3
};

function indicaCOR4() {
  var indica4 = "Proteja-se com protetor solar com FPS médios de 40 a 70 . e hidrate-se"
  
  document.querySelector('.topo_4').innerHTML = indica4
};

function indicaCOR5() {
  var indica5 = "Proteja-se com protetor solar com FPS médios baixos de 40 a 60 . e hidrate-se"
  
  document.querySelector('.topo_5').innerHTML = indica5
};

function indicaCOR6() {
  var indica6 = "Proteja-se com protetor solar com FPS baixos de 30 a 50 . e hidrate-se"
  
  document.querySelector('.topo_6').innerHTML = indica6
}
