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
    static news( req, res){
        const url = `http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=bccbc833e207449fbb30858e2d6e0a98`
        axios.get(url)
        .then (response => {
            let data = response.data.articles
            res.status(200).json(data)
        })
        .catch (err => {
            console.log(err);
            res.send(err)
        })
    }
}

module.exports = Api