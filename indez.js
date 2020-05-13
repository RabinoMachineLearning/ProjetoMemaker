const axios =require('axios');
async function getTemp(cidade){
    tempJSON = await axios.get('http://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid=5ee0f05a06d72aa8b89071985d6bd2f2')
    tempKelvin = tempJSON.data.main.temp
    tempCelcius = tempKelvin - 273
    console.log(tempCelcius)
}
getTemp('berlim')
