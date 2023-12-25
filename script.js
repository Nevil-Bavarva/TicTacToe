let click = new Audio("statics/click.mp3");
let bgmusic = new Audio("statics/bgsound.mp3");
let gameOversd = new Audio("statics/gameover.mp3");
let isGameOver = false;
let turn = "X";


//function to change turns
changeTurn = ()=> {
    return turn === "X" ? "0" : "X"
}

//function to check who won
const checkWin = ()=> {
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && 
            (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && 
            boxTexts[e[0]].innerText !== '') {
                document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
                isGameOver = true;
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";

                //for winning line
                document.querySelector('.line').style.width = '20vw';
                document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

        }
    })
}


//Reset function
reset.addEventListener('click', ()=>{
    let boxTexts = document.getElementsByClassName("boxText");
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";

    //hide line
    document.querySelector('.line').style.width = '0';

})



// Main function 
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            click.play();
            checkWin();

            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


