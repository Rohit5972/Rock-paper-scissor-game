function getComputerChoice() {
    let a = "Rock"
    let b = "Paper"
    let c = "Scissor"

    let randomnumber = Math.random()

    if (randomnumber < 0.33) {
        console.log(a);
    }
    else if (randomnumber > 0.33 && randomnumber < 0.66) {
        console.log(b);
    }

    else{
        console.log(c);
        }
    
}


console.log(getComputerChoice())    