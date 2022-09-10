import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            songName: '',
            mood: ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }
    render() {
        return (
        <form>
            <input 
                name="songName"
                value={this.state.songName}
                placeholder="Find song by name"
                onChange={this.handleChange}
            />
            <select 
                name="mood"
                value={this.state.mood}
                placeholder="What ya feeling like?"
                onChange={this.handleChange}
            >
                <option disabled value="">What ya feeling like?</option>
                <option value="sad">sad</option>
                <option value="chill">chill</option>
                <option value="heavy">heavy</option>
                <option value="saucy">saucy</option>
                <option value="upbeat">upbeat</option>
                <option value="smooth">smooth</option>
                <option value="funky">funky</option>
            </select>
        </form>
        )
    }
}

export default Form