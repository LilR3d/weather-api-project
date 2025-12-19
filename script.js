function getWeather() {
    // Get values from input fields
    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;

    // Simple validation
    if (lat === "" || lon === "") {
        document.getElementById("result").innerText =
            "Please enter both latitude and longitude.";
        return;
    }

    // API URL with dynamic values
    const apiUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    // Call the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract temperature
            const temperature = data.current_weather.temperature;

            // Display result
            document.getElementById("result").innerText =
                `Current Temperature: ${temperature}°C`;
        })
        .catch(error => {
            document.getElementById("result").innerText =
                "Error fetching weather data.";
            console.error(error);
        });
}
