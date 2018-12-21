import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
        })
    }

    addHouse(house) {
        axios.post('/api/houses', house).then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                This is the wizard
                <input type="text" placeholder="Property Name" onChange={(e) => this.handleChange("name", e.target.value)}/>
                <input type="text" placeholder="Address" onChange={(e) => this.handleChange("address", e.target.value)}/>
                <input type="text" placeholder="City" onChange={(e) => this.handleChange("city", e.target.value)}/>
                <input type="text" placeholder="State" onChange={(e) => this.handleChange("state", e.target.value)}/>
                <input type="text" placeholder="Zipcode" onChange={(e) => this.handleChange("zip", e.target.value)}/>
                <button onClick={() => {this.addHouse(this.state)}}>Complete</button>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard
