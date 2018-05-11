const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log(computer);
if(player == rock && computer == scissors){
    console.log("Player win");
}else if(player == rock && computer == paper){
    console.log("Computer win");
}else if(player == scissors && computer == paper){
    console.log("Player win");
}else if(player == scissors && computer == rock){
    console.log("Computer win");
}else if(player == paper && computer == rock){
    console.log("Player win");
}else if(player == paper && computer == scissors){
    console.log("Computer win");
}else{
    console.log("Again");
}
