const request = require('request')

const forecast = (latitude,longitude,callback) => {
    
    const url = 'https://api.darksky.net/forecast/f4b69631a0bbb893b170b280f964f556/'+latitude+','+longitude+'?units=si&lang=ko'

    request({url,json:true},(error,{body}) => {
        if(error){
             callback('Unable to connect to weather service!',undefined)
        } else if(body.error){
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain.')
        }
    })
}

module.exports = forecast