// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function() {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    

    // TODO: Add event listener and handler for flip and clear buttons
    let flipButton = document.getElementById('flip');
    let clearButton = document.getElementById('clear');

    let heads = document.getElementById('heads');
    let tails = document.getElementById('tails');
    let headsPercentElement = document.getElementById('heads-percent');
    let tailsPercentElement = document.getElementById('tails-percent');
    let statusMessage = document.getElementById('status-message')

    let flippedHeads = 0;
    let flippedTails = 0;

    let total = 0;
    let percentHeads = 0
    let percentTails = 0

    flipButton.addEventListener('click', function(){
        let coinFlip = Math.random();
        total++;
        if(coinFlip < 0.5){
            document.querySelector('img').src = './assets/images/penny-heads.jpg'
            statusMessage.textContent = 'You Flipped Heads!'
            flippedHeads++;
            percentHeads = Math.ceil(flippedHeads/total * 100);
            heads.textContent = flippedHeads;
            headsPercentElement.textContent =`${percentHeads}%`
        }else {
            document.querySelector('img').src = './assets/images/penny-tails.jpg'
            statusMessage.textContent = 'You Flipped Tails!'
            flippedTails++;
            percentTails = Math.ceil(flippedTails/total * 100);
            tails.textContent = flippedTails;
            tailsPercentElement.textContent =`${percentTails}%`
        }
    })
  
    clearButton.addEventListener('click', function(){
        console.log('clear button clicked')
        heads.textContent = 0;
        tails.textContent = 0;
        headsPercentElement.textContent = 0;
        tailsPercentElement.textContent = 0;
        statusMessage.textContent = 'Let\'s Get Flipping!'
        flippedHeads = 0;
        flippedTails = 0;
        percentHeads = 0;
        percentTails = 0;
        total = 0;
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})