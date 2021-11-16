import { connect } from 'react-redux';
import React, { Component } from "react";
import { minifyUrl } from "../../../actions";
import ApiService from "../../../services/api-service";

import './minify-page.css';

class MinifyPage extends Component {

    constructor(props) {
        super(props);

        this.state = { originalUrl: '' };

        this.setOriginalUrl = this.setOriginalUrl.bind(this);
        this.apiService = new ApiService();
    }

    setOriginalUrl = event => {
        this.setState({originalUrl: event.target.value});
    }

    minifySubmit = () => {
        if (this.state.originalUrl) {

            this.apiService.minifyUrlRequest(this.state.originalUrl)
                .then( response => {
                    const { shortUrl } = response;
                    this.setState({originalUrl: ''});
                    this.props.minifyUrl({ shortUrl });
                });
        }
    }

    render() {

        const { shortUrl } = this.props;

        const copyToClipboard = () => {
            navigator.clipboard.writeText(shortUrl);
        }

        return (
            <div className="minify-page">

                <div className="request-block">
                    <span className="form-label">Enter your URL</span>
                    <input type="text" className="request-input form-control" value={this.state.originalUrl} onChange={this.setOriginalUrl}/>
                    <button type="button" className="minify-submit btn btn-primary" onClick={this.minifySubmit}>Minify</button>
                </div>

                { shortUrl &&
                    (<div className="result-block input-group mb-3">
                        <input type="text" className="result-input form-control" value={shortUrl} readOnly />
                        <button type="button" className="copy-result btn btn-outline-secondary" onClick={copyToClipboard}>Copy</button>
                    </div>)
                }
            </div>
        );
    }
}

const mapStateToProps = ({ shortUrl }) => {
    return { shortUrl };
};

const mapDispatchToProps = {
    minifyUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(MinifyPage);