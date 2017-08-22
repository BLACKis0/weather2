var http = new XMLHttpRequest();
var images = new XMLHttpRequest();

var apiKey = "&APPID=0548847b525f9044cd2ad6a86159c563";

var black = document.getElementById('black');
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var img = document.getElementById('img');
var wtype = document.getElementById('wtype');
var dis = document.getElementById('dis');
var temp = document.getElementById('temp');
var cit = document.getElementById('cit');

btn.addEventListener('click', function() {
	var city = input.value;
	var link = "http://api.openweathermap.org/data/2.5/weather?q="+city+apiKey;

	http.open('GET', link);

	http.onload = function () {
		var data = JSON.parse(http.responseText);
		datamanag(data);
	};
	http.send();
});

function datamanag(x) {
	var imglink = "http://openweathermap.org/img/w/"+x.weather[0].icon+".png";
	img.src = imglink;
	cit.innerHTML = x.name;
	wtype.innerHTML = x.weather[0].main;
	dis.innerHTML = x.weather[0].description;
	temp.innerHTML = x.main.temp;
};