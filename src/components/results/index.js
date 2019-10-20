import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Page from './page';

class Results extends Component {
    render() {
        const { results } = this.props;
        return (
            <Page
                results={results}
                goTo={(path) => {
                    this.props.history.push(path);
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
    }
}

export default withRouter(
    connect(mapStateToProps)(Results)
);

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);
// export default component;



