
import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'




export default function Dice() {
    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = () => diceArray[Math.floor(Math.random()*diceArray.length)]
    const [dice, setDice] = useState(randomDice())
   
    const diceHandler = () => {
    setDice(diceEmpty);
    setTimeout(function (){
        setDice(dice => dice = randomDice())
    }, 1000)
    
    }


    return (
        <div>
        <img onClick={diceHandler} src={dice} style={{height: '200px'}}/> 
        </div>
    )
}
