import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getPropertyImage} from '../../ducks/reducer'
import {connect} from 'react-redux'

class WizardTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: ""
        }
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
        })
    }
    
    componentDidMount(){
        this.setState({
            image: this.props.image
        })
    }

    render() {
        const {getPropertyImage} = this.props
        const {image} = this.state
        return (
            <div>
                <input type="text" 
                placeholder="Img URL" 
                value={image}
                onChange={(e) => this.handleChange("image", e.target.value)}
                />
                <Link to='/wizard/step1'><button onClick={() => getPropertyImage(image)}>Previous Step</button></Link>
                <Link to='/wizard/step3'><button onClick={() => getPropertyImage(image)}>Next Step</button></Link>
            </div>
        )
    }
}

// export default WizardTwo

function mapStateToProps(state) {
    const {image} = state
    return {
        image
    }
}

export default connect(mapStateToProps, {getPropertyImage})(WizardTwo)