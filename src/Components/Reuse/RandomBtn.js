import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRestaurants } from '../../Redux/reducers/rest';
class RandomBtn extends Component {
    handleRestaurants = (userLat, userLon) => {
        //axios.get('yoururl').then(response => {
        //  let randomRest = this.randomize(data)
        //  Dispatch your action creator to update redux
        // })
    }
    randomize = (arr) => {
        let sorted = arr.sort(function (a, b) { return 0.5 - Math.random() })
        return sorted.splice(4, 15)
    }

    render() {
        console.log('props.rest', this.props.rest)
        return (
            <div>
                <button onClick={() => this.randomize(this.props.rest.restaurants)}>Randomize!</button>
                <button onClick={() => console.log(this.props.rest)}>Console log</button>
            </div>
        )
    }
}

//this.props.rest.restaurants == [{},{},{}] == {restaurant: {}}

let mapStateToProps = state => {
    return {
        rest: state.rest.data,
        userLat: state.user.userLat,
        userLon: state.user.userLon
    }
}

export default connect(mapStateToProps, { getRestaurants })(RandomBtn)
