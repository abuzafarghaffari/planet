
const Planet = document.getElementById("image-placeholder");
let PlanetImage = document.createElement("img");
const src = document.createAttribute("src");

async function Data(){

   const Value = await fetch("./data.json");
   
    const data = await Value.json();
    
    src.value= data.destinations[0].images.png;
   //console.log(data.destinations[0].images.png);
   }
   
   Data();
   
   


PlanetImage.setAttributeNode(src);

Planet.appendChild(PlanetImage);



/*
fetch("./destinations.json")
.then(response => {
   return console.log(response);
});

*/

