var cities=['banagalore','belgium','Nellur','baglur','husumanahalli']
let newcities:string[]=[];
cities.forEach((city:string)=>{
    
   
    if(city.startsWith('b'))
    newcities.push(city);
})
newcities.forEach((city:string)=>console.log(city))