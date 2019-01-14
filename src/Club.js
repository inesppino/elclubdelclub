import React, { Component, Fragment } from 'react';

class Club extends Component{
    render() {
        return (
            <Fragment>
                <h2>{this.props.clubs.name}</h2>
                    <i className={this.props.clubs.fa}></i>
                    <ul>
                        {this.props.clubs.members.map((member, index) => {
                            return (
                                <li key={index}>{member}</li>
                            )
                        }
                        )}
                    </ul>
            </Fragment>
        )
    }
}

export default Club;