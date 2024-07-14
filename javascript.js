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
 
function getHumanChoice()
{
    sign = prompt("Please Enter a Valid Choice");
    if (sign === "rock" || sign === "paper" || sign === "scissors")
    {
    return sign;
    }
    else
    {
     return (sign = "Enter a Valid Option NiGgA");
    }
}
  
console.log(getHumanChoice())
