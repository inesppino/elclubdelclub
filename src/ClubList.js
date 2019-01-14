import React, { Component } from 'react';
import Club from './Club';

class ClubList extends Component {
    render() {
        return <ul>
            {this.props.club.map((clubs, index) => {
                return (
                <li key={index}>
                    <Club clubs={clubs} />
                </li>
                )
            })}
        </ul>
    }
}

export default ClubList;