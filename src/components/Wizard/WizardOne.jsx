import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getPropertyInfo} from '../../ducks/reducer'

class WizardOne extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            address: "",
            city: "",
            stateName: "",
            zip: 0
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateName: this.props.stateName,
            zip: this.props.zip
        })
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    render() {
        const {getPropertyInfo} = this.props;
        const {name, address, city, stateName, zip} = this.state
        return (
            <div>
                <input type="text" 
                value={name}
                placeholder="Property Name" 
                onChange={(e) => this.handleChange("name", e.target.value)} 
                />
                <input type="text" 
                value={address}
                placeholder="Address" 
                onChange={(e) => this.handleChange("address", e.target.value)} 
                />
                <input type="text" 
                value={city}
                placeholder="City" 
                onChange={(e) => this.handleChange("city", e.target.value)} 
                />
                <input type="text" 
                value={stateName}
                placeholder="State" 
                onChange={(e) => this.handleChange("stateName", e.target.value)} 
                />
                <input type="text" 
                value={zip}
                placeholder="Zipcode" 
                onChange={(e) => this.handleChange("zip", e.target.value)} 
                />
                <Link to='/wizard/step2'>
                <button onClick={() => getPropertyInfo(name, address, city, stateName, zip)}>Next Step</button>
                </Link>
            </div>
        )
    }
}

// export default WizardOne

function mapStateToProps(state) {
    const { name, address, city, stateName, zip } = state
    return {
        name,
        address,
        city,
        stateName,
        zip
    }
}

export default connect(mapStateToProps, {getPropertyInfo})(WizardOne)