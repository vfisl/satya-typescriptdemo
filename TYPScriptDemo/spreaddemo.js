var cities = ['banagalore', 'belgium', 'Nellur', 'baglur', 'husumanahalli'];
let newcities = [];
cities.forEach((city) => {
    if (city.startsWith('b'))
        newcities.push(city);
});
newcities.forEach((city) => console.log(city));
