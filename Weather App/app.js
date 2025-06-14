  const cityInput = document.querySelector("#cityInput");
  const button = document.querySelector("button");
  const weatherData = document.querySelector('#weatherData');
  const weatherIcon = document.querySelector('#weatherIcon');
  const temperature = document.querySelector('#temperature');
  const description = document.querySelector('#description');
  const locationText = document.querySelector('#location');
  const humidity = document.querySelector('#humidity');
  const wind = document.querySelector('#wind');


  button.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = cityInput.value;
    fetchWeatherData(cityName);
  });

  const fetchWeatherData = async (cityName) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=6e0af1a44ddb4625ba5152803250906&q=${cityName}&aqi=no`
      );
      const data = await res.json();
      console.log(data);
      weatherIcon.src = `https:${data?.current?.condition?.icon}`;
      temperature.innerHTML = data?.current?.temp_c;
      description.innerHTML = data?.current?.condition?.text;
      locationText.innerHTML = data?.location?.name;
      humidity.innerHTML = data?.current?.humidity;
      wind.innerHTML = data?.current?.wind_kph;
      weatherData.classList.remove('hidden');    
      
    } catch {
      console.log('Error');
    }
  };
