import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: '',
            songName: '',
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
                <option value="HAPPY">HAPPY</option>
                <option value="SAD">SAD</option>
                <option value="CHILL">CHILL</option>
                <option value="HEAVY">HEAVY</option>
                <option value="SAUCY">SAUCY</option>
                <option value="UPBEAT">UPBEAT</option>
                <option value="SMOOTH">SMOOTH</option>
                <option value="FUNKY">FUNKY</option>
            </select>
            <form>
                <input type="text" 
                placeholder="SEARCH BY SONG NAME" 
                name="name" 
                value={this.state.songName} 
                onChange={event => this.handleChange(event)} />
            </form>
            <button>SEARCH</button>
            </div>
        )
    }
}

export default Form