import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    componentDidMount() {
        axios.get("/").then((response) => {
            this.setState();
        }).then(() => {
        })
    }
    render() {
        return (
            <div>
                <h2>keon's Code Arena Template</h2>
            </div >
        );
    }
}
