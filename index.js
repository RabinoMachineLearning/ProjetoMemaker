const functions = require('firebase-functions');
const axios =require ('axios');


 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 });

 exports.tempRecife = functions.https.onRequest(async (request, response)=> {
    tempJSON = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=recife&appid=5ee0f05a06d72aa8b89071985d6bd2f2')
    tempKelvin = tempJSON.data.main.temp
    tempCelcius = tempKelvin - 273
    response.send(tempCelcius)

 });