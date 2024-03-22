var search="Haskovo";

let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=17efe78b6240bd52b9785019f91091fd`
    
    fetch(queryURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let latitude = data[0].lat
        let longitude = data[0].lon
        let forecastURl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=17efe78b6240bd52b9785019f91091fd`
    
        const h3El = $('#card-title').text(data[0].name);

        fetch(forecastURl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        
            const currentWeather = data.list[0]
            console.log(currentWeather); 
            
            const temp = $('#temp').text(`Temperature: ${currentWeather.main.temp}`); 
            const wind = $('#wind').text('wind: currentWeather.main.wind}');
            const humidity = $('#humidity').text('humidity: currentWeather.main.humidity}');
        })
    })