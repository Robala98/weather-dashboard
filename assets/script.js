var api = 'd1e2d0763204896fd894698f5c6e27ee';
var searchedCity = document.getElementById('cityname');
var location = document.getElementById('displayedCity');







function Pull() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid='+api+'&units=imperial';
    fetch(url)
        .then()}