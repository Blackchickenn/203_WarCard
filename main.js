let deckId
let computerScore = 0;
let playerScore = 0;
const cardContainer = document.getElementById('first-card')
const newDeck = document.getElementById('new-deck-btn')
const drawCards = document.getElementById('draw-card-btn')
const showWinner = document.getElementById("determine-winner")
const remainingCards = document.getElementById("remaining-cards")
const computerScoreText = document.getElementById("computer")
const playerScoreText = document.getElementById("player")

function drawNewDeck(){
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
            .then(response => response.json())                      //method on promise
            .then(data =>{ 
                deckId = data.deck_id
                remainingCards.textContent =`
                Remaining Cards: ${data.remaining}
                `
            })                        //method on promise
}

newDeck.addEventListener('click', drawNewDeck) //CallBack Function

drawCards.addEventListener('click', () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(data =>{ 
        
        remainingCards.textContent =`
        Remaining Cards: ${data.remaining}
        `
        cardContainer.children[0].innerHTML = `
        <img src=${data.cards[0].image} />
        `
        cardContainer.children[1].innerHTML = `
        <img src=${data.cards[1].image} />
        `
        const winnerText = determineWinner(data.cards[0], data.cards[1])
        showWinner.textContent = winnerText
        if(data.remaining === 0){
            drawCards.disabled = true
            drawCards.classList.remove("draw-card-btn")
            drawCards.classList.add("draw-card-btn-no")
            drawCards.textContent = `No more cards in a Deck! Draw a new one!`
            if(computerScore > playerScore){
                return showWinner.textContent = `Ivanka is a Loooooseeeeer`
            } else if (playerScore > computerScore){
                return showWinner.textContent = `Ivanka is the BEST`
            } else {
                return showWinner.textContent = `Tie`
            }
        }
    })

})


function determineWinner(card1, card2){
    cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    card1Value = cardValue.indexOf(card1.value)
    card2Value = cardValue.indexOf(card2.value)
    if (card1Value > card2Value) {
        computerScore++
        computerScoreText.textContent = `Computer Score: ${computerScore}`
        return "Computer win"
    } else if (card1Value < card2Value){
        playerScore++
        playerScoreText.textContent = `Ivanka Score: ${playerScore}`
        return "Ivanka win"
    } else {
        return "War"
    }
}

const example1 = {
    value: "9"
}
const example2 = {
    value: "9"
}

determineWinner(example1, example2)


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