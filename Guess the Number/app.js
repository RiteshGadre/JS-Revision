    let guessInput = document.querySelector('#guessInput');
    const submitGuess = document.querySelector('#submitGuess');
    const resetGame = document.querySelector('#resetGame');
    const message = document.querySelector('#message');
    let randomNumber;
    let guessNumber;
    let guessCount = 0;


    submitGuess.addEventListener('click', () => {
        
        guessNumber = Number(guessInput.value)
        if(guessCount === 0) {
            generateRandomNumber();
        }
        guessRandomNumber(guessNumber);
    })

    resetGame.addEventListener('click', ()=> {
        guessInput.value= "";
        message.innerHTML = "";
        guessCount = 0;
    })

    const generateRandomNumber = () => {
        let num = Math.random();
        num = Math.floor(num * 100);
        randomNumber = num;
    }

    const guessRandomNumber = (guessNumber) => {
        guessCount++;
        console.log(guessNumber);
        console.log(randomNumber);
        
        if(guessNumber === randomNumber) {
            message.innerHTML = `You have guessed the magic number in ${guessCount} steps.`;
            guessCount= 0;
            generateRandomNumber();
        }
        else if(guessNumber < randomNumber) {
            message.innerHTML = `You guess number is less than magic number`;
        }
        else {
            message.innerHTML = `You guess number is greater than magic number`;
        }
        guessInput.value= "";
    }

