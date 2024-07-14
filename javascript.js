function getComputerChoice()
{
    random = Math.random();
    if (random >= 0 && random < 0.333)
    {
        choice = "rock"
    }
    else if (random >= 0.333 && random < 0.666 )
    {
        choice = "paper"
    }
    else
    {
        choice = "scissors"
    }
    return choice;
}
 
console.log(getComputerChoice());
