function getWeather() {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;

  if (lat === "" || lon === "") {
    document.getElementById("result").innerText =
      "Please enter both latitude and longitude.";
    return;
  }

  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.current_weather.temperature;

      document.getElementById(
        "result"
      ).innerText = `Current Temperature: ${temperature}°C`;
    })
    .catch((error) => {
      document.getElementById("result").innerText =
        "Error fetching weather data.";
      console.error(error);
    });
}
