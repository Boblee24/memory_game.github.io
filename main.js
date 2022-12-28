const gridArray = [
    {name: 'LMG5', img : 'Images/LMG5.jpg'},
    {name: 'LMG6', img : 'Images/LMG6.jpg'},
    {name: 'LMG7', img : 'Images/LMG7.jpg'},
    {name: 'LMG8', img : 'Images/LMG8.jpg'},
    {name: 'LMG9', img : 'Images/LMG9.jpg'},
    {name: 'LMG10', img : 'Images/LMG10.jpg'},
    {name: 'LMG5', img : 'Images/LMG5.jpg'},
    {name: 'LMG6', img : 'Images/LMG6.jpg'},
    {name: 'LMG7', img : 'Images/LMG7.jpg'},
    {name: 'LMG8', img : 'Images/LMG8.jpg'},
    {name: 'LMG9', img : 'Images/LMG9.jpg'},
    {name: 'LMG10', img : 'Images/LMG10.jpg'},
]
const reset = document.querySelector('#reset')
// console.log(gridArray) 
gridArray.sort(() => 0.5 - Math.random())//Sorts the array randomly

console.log(gridArray)
const gridDisplay = document.querySelector('#grid')//getting the grid element

let card;

function createBoard(){//A function the assigns src, class and img to the looped values
    for(i=0;i<gridArray.length;i++){
        card = document.createElement('img')
        card.setAttribute('src', 'Images/LMG4.jpg')
        card.setAttribute('data-id', i)//setting the attribute
        card.classList.add('mag')
        gridDisplay.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}
createBoard()
const result = document.querySelector('.result')
let cardName = []//Getting the name of img using te id gotten as an index fr the griArray 
let cardChosenId = []//The ids of the chosen imgs
let record = []//For recording the amount of win
function checkMatch(){
    console.log('Check for a match')
    const cards = document.querySelectorAll('img')//getting the img element of the cards so as to change the src of each clicked image
    if(cardName[0] == cardName[1]){
        alert('You found a match')
        cards[cardChosenId[0]].setAttribute('src', 'Images/blank.png')//Changing the first clicked cardchosenid to another img
        cards[cardChosenId[1]].setAttribute('src', 'Images/blank.png')//Changing the second clicked cardchosenid to another img
        cards[cardChosenId[0]].removeEventListener('click', flipCard)//removing the event listener so as to avoid unnecessary bug
        cards[cardChosenId[1]].removeEventListener('click', flipCard)
        record.push(cardChosenId)//pushing an array into an array, crazy right??
        result.textContent = record.length
        if(result.textContent == gridArray.length/2){
            result.textContent = 'Congratulations you found them all!!' 
            let button = document.createElement('button')
            button.textContent = 'New Game'
            reset.appendChild(button)
            button.addEventListener('click', () =>{
                location.reload()
            } )
            // reload()
        }
    }  else{
        alert("You didn't find a match")
        cards[cardChosenId[0]].setAttribute('src', 'Images/LMG4.jpg')
        cards[cardChosenId[1]].setAttribute('src', 'Images/LMG4.jpg')
        // card[cardChosenId[1]].src = 'Images/LMG4.jpg'
        // card[cardChosenId[0]].src = 'Images/LMG4.jpg'
    }
    
    cardChosenId = []
    cardName=[]
    // cards.rem
}

function flipCard(){
    const cardId = this.getAttribute('data-id') //This gets the card id
    console.log('clicked', cardId)
    cardName.push(gridArray[cardId].name)//Using the id gotten as the index of the shuffled gridArray and getting the name of the index and pushing the value gotten to a new array so as to save it
    cardChosenId.push(cardId)//also pushing the index as in the cardid into a new element so as to save it
    // console.log(record)
    console.log(cardChosenId)
    console.log(cardName)
    this.setAttribute('src', gridArray[cardId].img)//setting the src to the img of the array
    if(cardName.length === 2){ //When the length is 2 we want something to happen
        setTimeout(checkMatch, 100)
    }
}
