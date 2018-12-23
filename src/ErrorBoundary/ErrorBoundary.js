import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: 'Some Err Occurred!'
        });
    }

    render() {
        if (this.props.hasError) {
            return <h1>{this.props.errorMessage}</h1>
        } else {
            return (this.props.children);
        }
    }
}

export default ErrorBoundary;