import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <div className="form">
            <select id="mood" name="mood" value={this.state.mood} onChange={event => this.handleChange(event)}>
                <option value="choose-mood" selected>SEARCH BY MOOD</option>
                <option value="sad">SAD</option>
                <option value="chill">CHILL</option>
                <option value="heavy">HEAVY</option>
                <option value="saucy">SAUCY</option>
                <option value="upbeat">UPBEAT</option>
                <option value="smooth">SMOOTH</option>
                <option value="funky">FUNKY</option>
            </select>
            <button onClick={() => this.props.method(this.state.mood, this.props.decade)}>SEARCH</button>
            </div>
        )
    }
}

export default Form
