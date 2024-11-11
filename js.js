class Person {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this._location = _location;
  }
  moreOld(x,y){
    if(x.age>y.age){
        return `${x.firstName} è piu grande di ${y.firstName}`
    }else{ return`${y.firstName} è piu grande di ${x.firstName}`

    }
}
}

const valentina = new Person("valentina", "gargiulo", 24, "roma");
const giulia = new Person("giulia", "Bene", 32, "roma");

console.log(valentina.moreOld (valentina,giulia))





const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

//form

const form = document.getElementById("form");
//contenitore
const contenitore=document.getElementById("contenitore")



class Animals {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.specie = _species;
    this.breed = _breed;
  }
  sameOwner(otherpet) {
    if (this.ownerName === otherpet.ownerName) {
      return true;
    }else{
        return false
    }
  }
  
}

const arrayOfAnimals=[]
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const animal = new Animals(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );

  const card=document.createElement("div")
  card.innerText=`Nome:${animal.petName}
  Proprietario:${animal.ownerName}
  Specie:${animal.specie}
  Razza:${animal.breed}`
  contenitore.appendChild(card)
  let match = false
  arrayOfAnimals.push(animal)
  for(let i=0; i<arrayOfAnimals.length -1; i++){
    if(animal.sameOwner(arrayOfAnimals[i])){
        console.log(`l'animale ${animal.petName} ha lo stesso proprietario di ${arrayOfAnimals[i].petName}`)
        match=true
    } 
  }
  if(!match){
    console.log("nessun match trovato")
  }
});




