import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    addToAge = () => {
        this.setState((state) => {
            console.log(this.state.age)
            return {age: state.age + 1}
        })
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className='Flex'>
            <div className="Align">
                <h1>{ lastName }, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addToAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
            </div>
        );
    }
}

export default PersonCard;