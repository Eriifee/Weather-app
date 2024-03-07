let weather = {
    apiKey: "51fb71072c217249941330138281a315",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data
        const {temp} = data.main
        const {description, icon} = data.weather[0]
        if (typeof document !== 'undefined') {
            document.getElementById("city").textContent = `Weather in ${name}`
            document.getElementById("temp").textContent = `${temp}`
            document.getElementById("description").textContent = `${description}`
            
            // Manipulating the DOM here
         }

    }

}

weather.fetchWeather("Benin")