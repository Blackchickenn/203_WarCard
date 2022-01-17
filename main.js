let deckId 
const cardContainer = document.getElementById('first-card')
const newDeck = document.getElementById('new-deck-btn')
const drawCards = document.getElementById('draw-card-btn')

function drawNewDeck(){
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
            .then(response => response.json())                      //method on promise
            .then(data =>{ 
                deckId = data.deck_id
            })                        //method on promise
}

newDeck.addEventListener('click', drawNewDeck) //CallBack Function

drawCards.addEventListener('click', () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(data =>{ 
        cardContainer.children[0].innerHTML = `
        <img src=${data.cards[0].image} />
        `
        cardContainer.children[1].innerHTML = `
        <img src=${data.cards[1].image} />
        `
    })

})


// function callBack(){
//     console.log("another card")
// }
// setTimeout(callBack, 2000)

// document.getElementById('new-deck-btn').addEventListener('click', function(){
//     console.log('new card baby')
// })


// ========================= Filter Array, Callback function ============================== //
// const voters = [                                          //Filter and Map method - chaining 
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// const realVoter = voters.filter(voter => voter.voted).map(voter => voter.email)

// console.log(realVoter)


// const people = [
    //     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gotPet(person){        //Filter Array
//     return person.hasPet
// }

// const peopleWithPet = people.filter (gotPet)        //Filter Array
// console.log(peopleWithPet)

// const people = [                                     //Filter Array
//     { name: "Jack", hasPet: true, age: 12 },
//     { name: "Jill", hasPet: false, age: 18 },
//     { name: "Alice", hasPet: true, age: 22 },
//     { name: "Bob", hasPet: false, age: 32 },
// ]

// const adultPeople = people.filter(adult => adult.age >= 18)

// console.log(adultPeople)

// const people = [                                        //Filter Array callback function
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function filterArray(array, callback) {
//     const resultingArray = []
//     for(let item of array){
//         const isItTrue = callback(item)
//         if (isItTrue){
//             resultingArray.push(item) 
//         }
//     } 
//     return resultingArray
// }

// const peopleWithPets = filterArray(people, function(person){
//     return person.hasPet
// })

// console.log(peopleWithPets)