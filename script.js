let clickCount = 0;
let previousButtonNumber = null;
let cards = [
    "Peppa", "Peppa",
    "George", "George",
    "Mommy", "Mommy",
    "Daddy", "Daddy",
    "Suzy", "Suzy",
    "Danny", "Danny",
    "Potato", "Potato",
    "Pedro", "Pedro"
];
// randomizing the order of the cards
cards.sort(() => Math.random() - 0.5);

// logo of the card to use when the user guesses incorrectly
const logo = document.createElement("img");
logo.src = "images/logo.jpg";
logo.alt = "Front of card";
logo.style.height = "100px";
logo.style.width = "100px";

function handleClick(buttonNumber) {
    // making sure that the same button isn't pressed twice
    if (buttonNumber == previousButtonNumber){
        return;
    }
    
    // changing the image content of the current button when it is clicked
    const button = document.getElementById(`${buttonNumber}`);
    const card = document.createElement("img");
    card.src = "images/" + cards[buttonNumber] + ".jpg";
    card.alt = cards[buttonNumber];
    card.style.height = "100px";
    card.style.width = "100px";
    button.innerHTML = "";
    button.appendChild(card);

    // if this is the first guess for the pair
    if (previousButtonNumber == null){
        previousButtonNumber = buttonNumber;
    }
    // if this is the second guess for the pair
    else{
        const previousButton = document.getElementById(`${previousButtonNumber}`);
        const currentButton = document.getElementById(`${buttonNumber}`);
        // if it's the same picture, disable the buttons because the user guessed correctly
        if (cards[previousButtonNumber] == cards[buttonNumber]){
            previousButton.disabled = true;
            currentButton.disabled = true;
        }
        // if it's not the same picture, make the buttons return to the logo because the user guessed incorrectly
        else{
            // using setTimeout to add a 0.5 second wait
            setTimeout(() => {
                previousButton.innerHTML = "";
                currentButton.innerHTML = "";
                previousButton.appendChild(logo.cloneNode(true));
                currentButton.appendChild(logo.cloneNode(true));
            }, 500);
        }
        // resetting for the next pair of button numbers
        previousButtonNumber = null;
    }

    // increasing click count
    clickCount++;
    updateClickCount();
}

function updateClickCount() {
    const clickCountElement = document.getElementById('click-count');
    if (clickCountElement) {
        clickCountElement.textContent = `Clicks: ${clickCount}`;
    }
}
