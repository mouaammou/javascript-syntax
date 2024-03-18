const myRandomQuotes = ['you have a good day', 'you are awesome', 'you are loved', 'you are amazing', 'you are beautiful', 'you are strong', 'you are smart', 'you are kind', 'you are important', 'you are unique', 'you are enough', 'you are capable', 'you are worthy', 'you are valuable', 'you are powerful', 'you are wonderful', 'you are fantastic', 'you are incredible', 'you are fabulous', 'you are great', 'you are spectacular', 'you are extraordinary', 'you are outstanding', 'you are exceptional', 'you are remarkable', 'you are phenomenal', 'you are marvelous', 'you are splendid', 'you are magnificent', 'you are grand', 'you are majestic', 'you are glorious', 'you are divine', 'you are heavenly', 'you are angelic', 'you are saintly', 'you are godly', 'you are celestial', 'you are ethereal', 'you are transcendent', 'you are supernatural', 'you are mystical', 'you are magical', 'you are miraculous', 'you are wondrous', 'you are prodigious', 'you are stupendous', 'you are colossal', 'you are gargantuan', 'you are titanic', 'you are mammoth', 'you are monstrous', 'you are humongous', 'you are enormous', 'you are immense', 'you are gigantic', 'you are jumbo', 'you are vast']


//generate random number


//link to html

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * myRandomQuotes.length);
    console.log(myRandomQuotes[randomNum]);
    document.getElementById('quote').innerHTML = myRandomQuotes[randomNum];
})