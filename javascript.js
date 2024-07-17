humanScore = 0;
computerScore = 0;
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
function getComputerChoice()
{
    random = Math.random();
    if (random >= 0 && random < 0.333)
    {
        choice = "rock";
    }
    else if (random >= 0.333 && random < 0.666 )
    {
        choice = "paper";
    }
    else
    {
        choice = "scissors";
    }
    return choice;
}
    
function getHumanChoice()
{

    sign = prompt("Please Enter a Valid Choice");

    if (sign.toUpperCase() === "rock".toUpperCase())
        {
            return choice2="rock";
        }
        else if ( sign.toUpperCase()==="paper".toUpperCase())
        {
            return choice2="paper";
        }
        else if (sign.toUpperCase()==="scissors".toUpperCase())
        {
        return choice2="scissors";
        }
        else
        {
            alert("Enter a Valid Choice NiGgA")
        }
}
    
function playRound(humanChoice, computerChoice)
{
     if (humanChoice === 'rock'|| computerChoice === "rock")
    {
        if (humanChoice === 'paper' || computerChoice === "paper")
        {
            if (computerChoice === 'paper')
            {
                computerScore= computerScore+1;
                console.log(`You lose! ${computerChoice} WRAPS ROCK`)
            }
            else if(humanChoice === 'paper')
            {
                humanScore=humanScore+1;
                console.log(`You Won! ${humanChoice} WRAPS ROCK`)
            }
        }
        else (humanChoice === 'scissors' || computerChoice ==='scissors' )
        {
            if (computerChoice === 'scissors')
                {
                    humanScore=humanScore+1;
                    console.log(`You won! ${humanChoice} breaks scissors`)
                }
                else if(humanChoice === 'scissors')
                {   computerScore = computerScore+1;
                    console.log(`You lose! ${computerChoice} breaks scissors `)
                }
        }
    
    }
    else  if (humanChoice === 'paper'|| computerChoice === "paper")
    {
        if (humanChoice === 'rock' || computerChoice === "rock")
            {
                if (computerChoice === 'rock')
                {   
                    humanScore=humanScore+1;
                    console.log(`You Won! ${humanChoice} WRAPS ROCK`)
                }
                else if (humanChoice ==='rock')
                {   
                    computerScore= computerScore+1;
                    console.log(`You lost! ${computerChoice} WRAPS ROCK`)
                }
            }
            else (humanChoice === 'scissors' || computerChoice === 'scissors' )
            {
                if (humanChoice === 'scissors')
                    {
                        humanScore=humanScore+1;
                        console.log(`You won! ${humanChoice} cuts paper`)
                    }
                    else if(computerChoice === 'scissors')
                    {
                        computerScore=computerScore+1;
                        console.log(`You lose! ${computerChoice} cuts paper`)
                    }
            }
        
    }

    else  if (humanChoice === 'scissors'|| computerChoice === "scissors")
        {
            if (humanChoice === 'rock' || computerChoice === "rock")
                {
                    if (humanChoice === 'rock')
                    {
                        console.log(`You Won! ${humanChoice} smashes rock`)
                    }
                    else if(computerChoice === 'rock')
                    {
                        console.log(`You lost! ${computerChoice} smashes rock`)
                    }
                }
                else if(humanChoice === 'paper' || computerChoice === 'paper' )
                {
                    if  (humanChoice === 'scissors')
                        {
                            console.log(`You won! ${humanChoice} cuts paper`)
                        }
                        else if(computerChoice === 'paper')
                        {
                            console.log(`You lose! ${computerChoice} cuts paper`)
                        }
                }
            
        }



}
 playRound(humanSelection,computerSelection);
