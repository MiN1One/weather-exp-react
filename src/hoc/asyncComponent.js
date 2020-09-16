import React, { Component } from 'react';

const asyncComponent = (imported) => {
    return class extends Component {
        state = { 
            component: null
        }

        componentDidMount() {
            imported()
                .then(comp => {
                    this.setState({component: comp})
                });
        }

        render() {
            const C = this.state.component
            return C && <C {...this.props} />
        }
    }
};

export default asyncComponent;