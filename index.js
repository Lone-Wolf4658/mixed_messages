const data = require('./data.js');


// FUNCTION - Day Builder
const getDayPhrase = (days, timeOfDay ) => {
    const ranDayNum = Math.floor(Math.random()*7)
    const ranTimeNum = Math.floor(Math.random()*4)
    const today = new Date().getDay(); 
    // Day handeling 
    if (ranDayNum === today) {
        // Today
        return 'Today afternoon it will be '
    } else if (ranDayNum === today+1){
        // Tomorrow
        return 'Tomorrow ' + timeOfDay[ranTimeNum] + ' it will be '
    } else {
        // Other Days
        return days[ranDayNum] + ' ' + timeOfDay[ranTimeNum] + ' it will be '
    }
};

// FUNCTION - Weather Builder
const getWeather = weather => {
    let ranWeather1 = Math.floor(Math.random()*4);
    let ranWeather2 = Math.floor(Math.random()*4);
    if (ranWeather1 === ranWeather2) {
        if (ranWeather1 === 3){
            ranWeather2 = 0;
        } else {
            ranWeather2++;
        };
    };

    return weather[ranWeather1] + ' and ' + weather[ranWeather2] + '. '
};

// FUNCTION - Degrees Builder
const getDegrees = temp => {
    const ranTemp = Math.floor(Math.random()*33)

    if (ranTemp >= 0 && ranTemp <= 9){
        return temp[0].replace('[X]',ranTemp)
    } else if (ranTemp >= 10 && ranTemp <= 18){
        return temp[1].replace('[X]',ranTemp)
    } else if (ranTemp >= 19 && ranTemp <= 23){
        return temp[2].replace('[X]',ranTemp)
    } else if (ranTemp >= 24 && ranTemp <= 50){
        return temp[3].replace('[X]',ranTemp)
    } else {
        return ' '
    }
}


// FUNCTION - Main Sentence builder
const getWeatherForcast = ({days, timeOfDay, weather, temp}) => {
    const dayPhrase = getDayPhrase(days, timeOfDay);
    const weatherPhrase = getWeather(weather);
    const degree = getDegrees(temp);
  
    return dayPhrase + weatherPhrase + degree
};


console.log(getWeatherForcast(data))



