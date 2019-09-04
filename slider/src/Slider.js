import React from 'react'
import './Slider.css'

export default class Slider extends React.Component {
    
    constructor () {
        super()
        this.state = {
            number: 3
        }
    }

    handleChange = event => {    
        // if (this.state.number > 6) {
        //     this.setState({number: 5})
        // } else {
        //     this.setState({number: event.target.value})
        // }

        // // if (this.state.number = 0) {
        // //     this.setState({number: 1})
        // // } else {
        // //     this.setState({number: event.target.value})
        // // }
        this.setState({number: event.target.value})
    }

    render()  {

        return (
            <div className="slider">
                <input type="range" min="1" max="5" onChange = {this.handleChange} value = {this.state.number}  />
                <input type="number" value = {this.state.number} onChange = {this.handleChange} />
            </div>
        )
    }
    
}