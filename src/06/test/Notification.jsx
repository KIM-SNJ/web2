import React from "react";
import "./Notification.css";

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper">
                <span className="messageText">
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount called`);
    }

    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate called`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount called`);
    }
}

export default Notification;