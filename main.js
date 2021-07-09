/* We are going to work with random number */
class randomMath{
    
    getRandomInt(to){
        this.to = to;
        return Math.floor(Math.random() * to);

    }


}

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let randomNumber = new randomMath();

let ranD = randomNumber.getRandomInt(12);

let titleEl = document.getElementById("title-el");

let explainEl = document.getElementById("explain");

let hintEl = document.querySelector(".show-hint");

let hintButton = document.getElementById("show-hint-pressed");

let submitButton = document.getElementById("submit-ans");

let alertEl = document.getElementById("alertt");




explainEl.textContent = movies[ranD].explanation;
hintEl.textContent = movies[ranD].hint;

// functions  -------


function showHint(){
    hintEl.classList.remove("show-hint");
}

// guess = movies[ranD].title;

function checkAnswer(){
    let guessType = document.getElementById("movie-pressed").value;
    if(guessType.toLowerCase() === movies[ranD].title.toLowerCase()){
        alertEl.classList.add("alert-success");
        alertEl.textContent = "Correct! Guess: " + guessType + "   Answer: " + movies[ranD].title;
    } else {
        alertEl.classList.add("alert-danger");
        alertEl.textContent = "Wrong! Guess: " + guessType +  "    Answer: " + movies[ranD].title;
        
    }

    
}









