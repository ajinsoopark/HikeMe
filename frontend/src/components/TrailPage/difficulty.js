import React from 'react'

import '../../css/difficultyBar.css'

const Difficulty = ({difficulty}) => {

    const levelToText = (level) => {
        switch (level) {
            case 'green': return 'Very Easy'
            case 'greenBlue': return 'Easy'
            case 'blue': return 'Average'
            case 'blueBlack': return 'Difficult'
            case 'black': return 'Very Difficult'
            default: return ''
        }
    }

    const levelToNum = (level) => {
        switch (level) {
            case 'green': return 1
            case 'greenBlue': return 2
            case 'blue': return 3
            case 'blueBlack': return 4
            case 'black': return 5
            default: return ''
        }
    }

        console.log(difficulty)
        return (
            <div className='difficultyContainer'>
                <div className='levelBar'>
                    <div className={ levelToNum(difficulty) >= 1 ? 'level1' : null }></div>
                    <div className={ levelToNum(difficulty) >= 2 ? 'level2' : null }></div>
                    <div className={ levelToNum(difficulty) >= 3 ? 'level3' : null }></div>
                    <div className={ levelToNum(difficulty) >= 4 ? 'level4' : null }></div>
                    <div className={ levelToNum(difficulty) >= 5 ? 'level5' : null }></div>
                </div>
                <div className='difficulty'>{ levelToText(difficulty) }</div>
            </div>
        )
}

export default Difficulty;