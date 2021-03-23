const request=require('request');

const forecast = (latitude,longitude, callback) => {  
    
    
   const url = 'http://api.weatherstack.com/current?access_key=2c07ad89d88f2f9b9e08587eabc7b690&query='+latitude+','+longitude+''
    
    request({ url:url, json: true }, (error, {body}) => {  
     // console.log(body);  
             if (error) {        
                      callback('Unable to connect to location services!', undefined)    
                         }
                         else if (body.error) {  
                                        callback('Unable to find location. Try another search.', undefined)  
                                           }  else {        
                                           callback(undefined, ' It is currently ' + body.current.temperature + ' degrees out'+','+body.current.weather_descriptions+'. There is a ' + body.current.precip + '% chance of rain.' )      
                                                        
                                                        }   
                                                      }) } 
 
 module.exports = forecast 
