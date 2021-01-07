// API
const axios = require('axios')

class Api {
    static getWeatherbyCoords(req,res,next){
        let {lat,lon} = req.query
        const url = 'https://api.openweathermap.org/data/2.5/weather'
        axios.get(url,{
            params:{
                lat,
                lon,
                appid:'bea7899e82e2e085b14050d260ac7a49'
            }
        })
        .then(response=>{
            res.status(200).json(response.data)
        })
        .catch(next)
    }
}

module.exports = Api