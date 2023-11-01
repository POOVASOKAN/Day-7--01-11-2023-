// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//A) Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var asianCountries = result.filter((country) => {
        return country.region === 'Asia';
    });
    var asianCountryNames = asianCountries.map((country) => country.name.common);
    console.log(asianCountryNames);
    
};


//B) Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var countriesWithLowPopulation = result.filter((country) => {
        return country.population < 200000;
    });
    var countryNames = countriesWithLowPopulation.map((country) => country.name.common);
    console.log(countryNames);
    
};


//C) Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    result.forEach((country) => {
        var name = country.name.common;
        var capital = Array.isArray(country.capital) ? country.capital[0] : "N/A";  
        var flag = country.flags.png; 
        console.log("Name: " + name);
        console.log("Capital: " + capital);
        console.log("Flag: " + flag);
        console.log("--------"); 
    });
};


//D) Print the total population of countries using reduce function 
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = () => {
    var data = request.response;
    var result = JSON.parse(data);
    var totalPopulation = result.reduce((accumulator, country) => accumulator + (country.population || 0), 0);
    console.log("Total Population: " + totalPopulation);
};


// E) Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = () => {
    var data = request.response;
    var result = JSON.parse(data);
    var USD = result.filter((country) => {
        return country.currencies && country.currencies.USD;
    });
    var countryNames = USD.map((country) => country.name.common);
    console.log("Countries that use US dollars as currency:");
    console.log(countryNames);
};


