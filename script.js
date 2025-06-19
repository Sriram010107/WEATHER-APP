const apiKey = '681a496d9a3429e9308fa85387fe742a';
document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('cityName').innerText = `Weather in ${cityName}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature} °C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${windSpeed} m/s`;
}