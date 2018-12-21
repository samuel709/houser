import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        }
    }

    getHouses() {
        axios.get('/api/houses').then((response) => {
            this.setState({ houses: response.data })
        })
    }

    componentDidMount() {
        this.getHouses()
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then((response) => {
            this.getHouses()
        })
    }

    render() {

        return (
            <div>
                This is the dashboard
                <Link to='/wizard/step1'>
                    <button>Add new property</button>
                </Link>
                <House houses={this.state.houses}
                    deleteHouse={this.deleteHouse}
                />
            </div>
        )
    }
}

export default Dashboard
