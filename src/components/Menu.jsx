import React, { Component } from 'react';
import Logo from "./logo.png";

class Menu extends Component {
    state = {
        active: "Home"
    }

    handleClick = (item) => {
        this.setState({
            active: item
        })
    }

    render() {
        let list = ["Home", "Create Job", "Invite Companies",
            "Jobs", "Open Jobs", "Closed Jobs", "Applicants status",
            "Notices", "Inbox", "Outbox",
            "Connections", "Companies", "Students",
            "Reports"
        ];

        return (
            <div className="menu">
                <div className="heading">
                    <img src={Logo} className="logo" alt="title-img" />
                    <div className="box"></div>
                </div>
                <ul className="list">
                    {
                        list.map((item) => {
                            return (
                                <li className="list-item" key={item} style={this.state.active === item ? { fontWeight: 'bold' } : { fontWeight: 'normal' }} onClick={() => { this.handleClick(item) }}>{item}</li>
                            )
                        })
                    }
                </ul>
                <div className="bottom-menu">
                    <span>
                        Contact Getwork
                    </span>
                </div>
            </div>
        );
    }
}

export default Menu;