
const key = '75638a49caeb7b10f0955c84339262f0'



async function search(){
    const city = document.getElementById("city").value
    await callAPI(city)
}


async function callAPI(cidade){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(res=>res.json())
    .catch(err=>{
        console.log(err)
    })
    console.log(data)
    show(data)
}

function show(data){
    document.getElementById('city-name').innerHTML = `<h2>Tempo em ${data.name}</h2>`
    document.getElementById('deg').innerHTML = `<p>${Math.round(data.main.temp)}°C</p>`
    document.getElementById('weather').innerHTML = `<p>${data.weather[0].description}</p>`
    document.getElementById('humidity').innerHTML = `<p>Umidade: ${data.main.humidity}%</p>`
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

 