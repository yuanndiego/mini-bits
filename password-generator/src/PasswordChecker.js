import React from 'react'
import './PasswordChecker.css'

export default class PasswordChecker extends React.Component {

    state = {
        password: '',
        score: 0
    }

    
    handleChange = (event => {
        let password = event.target.value
        let resultOfCheck = {}
        resultOfCheck.score = 0
        resultOfCheck.hasLowerCase = (/[a-z]/.test(password))
        resultOfCheck.hasUpperCase = (/[A-Z]/.test(password))
   
        resultOfCheck.hasNumber = (/[0-9]/.test(password))

        resultOfCheck.hasNonAlphaNumeric = (/[^a-zA-Z0-9]/.test(password))
        resultOfCheck.isOver8Char = password.length >= 8
        resultOfCheck.isOver12Char = password.length >= 12
        
        const vals = Object.values(resultOfCheck)
        let scoreCounter = 0
        for(var i= 0; i< vals.length; i++) {
            if (vals[i] === true) {
                scoreCounter++
            } 
        }
        resultOfCheck.score = scoreCounter
        this.setState({score: scoreCounter })
        return resultOfCheck.score 
    }) 

    render() {
        const { score } = this.state
        var divClass = ""
        if (score >= 1 && score <= 2) {
             divClass = "weak"
        }   else if (score >= 3 && score <= 5) {
             divClass = "okay"
        } else if (score === 6) {
             divClass = "awesome"
        } else if (score === 0) {
             divClass = "start"
        }
        
        return (
            <div className = {divClass}>
                <h1>HOW SECURE IS MY PASSWORD</h1>
                <p>Start to type in your password for feedback</p>
                <div>
                    <input type="text" onChange = {this.handleChange}/>    
                </div>
                <div className="password-feedback"> Password Strength - {divClass} </div>
            </div>
        )
    }
}
    
