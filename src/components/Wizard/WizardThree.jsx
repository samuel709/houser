import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getPropertyRates, forgetPropertyInfo } from '../../ducks/reducer'

class WizardThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    addHouse() {
        let house = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateName: this.props.stateName,
            image: this.props.image,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post('/api/houses', house).then(response => {
            console.log(response)
        })
    }

    componentDidMount() {
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
    }

    render() {
        const { getPropertyRates, forgetPropertyInfo } = this.props
        const { mortgage, rent } = this.state
        return (
            <div>
                <input type="text"
                    placeholder="Monthly Mortgage Amount"
                    value={mortgage}
                    onChange={(e) => this.handleChange("mortgage", e.target.value)}
                />
                <input type="text"
                    placeholder="Desired Monthly Rent"
                    value={rent}
                    onChange={(e) => this.handleChange("rent", e.target.value)}
                />
                <Link to='/wizard/step2'><button onClick={() => getPropertyRates(mortgage, rent)}>Previous Step</button></Link>
                <Link to='/'>
                    <button
                        onClick={() => {
                            getPropertyRates(mortgage, rent)
                            this.addHouse(this.state)
                            forgetPropertyInfo()
                        }}
                    >Complete
                    </button>
                </Link>

            </div>
        )
    }
}

// export default WizardThree

function mapStateToProps(state) {
    const { name, address, city, stateName, zip, image } = state
    return {
        name,
        address,
        city,
        stateName,
        zip,
        image
    }
}

export default connect(mapStateToProps, { getPropertyRates, forgetPropertyInfo })(WizardThree)