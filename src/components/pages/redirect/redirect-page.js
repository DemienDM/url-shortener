import React, { Component } from "react";
import ApiService from "../../../services/api-service";

import './redirect-page.css';

class RedirectPage extends Component {

    constructor(props) {
        super(props);

        this.state = { error: false };

        this.path = props.path.pathname;
        this.path = this.path.trim();
        this.path = this.path.replace('/', '');

        this.redirectToOriginalUrl()
    }

    redirectToOriginalUrl() {
        (new ApiService())
            .getLink(this.path)
            .then( response => {
                const { original_url } = response;

                if (original_url) {
                    window.location.href = original_url;
                } else {
                    this.setState({error: true});
                }
            });
    }

    render() {
        return (
            this.state.error &&
                <div className="redirect-page">
                    <div className="alert alert-danger" role="alert">
                        Has not found requested URL
                    </div>
                    <a href="/">Create new one !</a>
                </div>
        );
    };
}

export default RedirectPage;