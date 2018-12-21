import React from 'react'

export default function(props) {
    var displayHouses = props.houses.map((val) => {
        return (
            <div key={val.id}>
                {val.name}
                {val.address}
                {val.city}
                {val.state}
                {val.zip}
                <button onClick={() => props.deleteHouse(val.id)}>Delete</button>
            </div>)
    })

    return (
        <div>
            {displayHouses}
        </div>
    )
}