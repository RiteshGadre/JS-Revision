const userInput = document.querySelector('input');

document.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'BUTTON') {
        return ;
    }


    if(e.target.innerHTML === '=') {
        try {
            const result = eval(userInput.value);
            userInput.value = result;
        }
        catch {
            alert('Exception found')
        }
    }
    else if(e.target.innerHTML === 'C') {
        userInput.value = "";
    }
    else {
        userInput.value += e.target.innerHTML;
    }
    
})