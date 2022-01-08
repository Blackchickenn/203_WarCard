function drawNewDeck(){
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
            .then(response => response.json())
            .then(data => console.log(data))
}
document.getElementById('new-deck-btn').addEventListener('click', drawNewDeck) //CallBack Function

function callBack(){
    console.log("another card")
}
setTimeout(callBack, 2000)

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function gotPet(person){        //Filter Array
    return person.hasPet
}

const peopleWithPet = people.filter (gotPet)        //Filter Array
console.log(peopleWithPet)

const people = [                                     //Filter Array
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

const adultPeople = people.filter(adult => adult.age >= 18)

console.log(adultPeople)


