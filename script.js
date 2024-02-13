let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let msgs = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newgbtn = document.querySelector(".newgame");



let turn_0 = true;

const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

const showwinner = (winner) => {
    msgs.innerText = "Congratulations! Winner is " + winner;
    msgContainer.classList.remove("hide");
    disablebtns();
};

const reset = () => {
    turn_0 = true;
    enablebtns();
    msgContainer.classList.add("hide");

};

const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwinner = () => {
    for (let pattern of winning_pattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                disablebtns();
                showwinner(pos1);
            }
        }
    }

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_0) {
            box.innerHTML = "0";
            turn_0 = false;
        }
        else {
            box.innerHTML = "X";
            turn_0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

newgbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);






