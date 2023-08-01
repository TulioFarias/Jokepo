
const result = document.getElementById('result')
const myPoints = document.getElementById('spanHuman')
const machinePoints = document.getElementById('spanMachine')

let humanScore = 0
let MachineScore = 0 




const playHuman = (humanChoice) => {

    playtheGame(humanChoice, playMachine())
};

const playMachine = () => {

    const choices = ["pedra", "papel", "tesoura"]
    const randomNumber = Math.floor(Math.random() * 3)

    

    return choices[randomNumber]

};


const playtheGame = (human, machine) => {

        console.log('Humano:' + human + 'Maquina:' + machine)

        if(human === machine){
            
            result.innerHTML= 'Deu empate!'
            
        }
        else if(
            
        (human === 'papel' && machine === 'rocha') || 
        (human === 'rock' && machine === 'tesoura') || (human === 'tesoura' && machine === 'papel')
        
        ){
            humanScore++;
            myPoints.innerHTML = humanScore
            result.innerHTML = 'Você ganhou meu chapa!'
            

        }
         else{
            MachineScore++
            machinePoints.innerHTML = MachineScore

            result.innerHTML= 'Meu chapa, você perdeu pra Alexa!'
        }
}

