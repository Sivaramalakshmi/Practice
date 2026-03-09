let boxes = document.querySelectorAll(".innerbox");
let currentPlayer = "X";

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(box.innerText !== "") return;

        box.innerText = currentPlayer;

        if(checkWinner()){
            alert(currentPlayer + " Wins!");
            resetGame();
            return;
        }

        if(checkDraw()){
            alert("It's a Draw!");
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

function checkWinner(){
    for(let combo of winningCombos){
        let [a,b,c] = combo;

        if(
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText
        ){
            return true;
        }
    }
    return false;
}

function checkDraw(){
    return [...boxes].every(box => box.innerText !== "");
}

function resetGame(){
    boxes.forEach(box => box.innerText = "");
    currentPlayer = "X";
}