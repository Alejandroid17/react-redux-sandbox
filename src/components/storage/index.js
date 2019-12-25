import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSnack } from 'react-redux-snackbar';

import Page from './page';

class Storage extends Component {
    constructor(props) {
        super(props);

        this.copyText = this.copyText.bind(this);
    }

    copyText = () => {
        this.props.showSnack('copy-text-id', {
            label: 'Copied!',
            timeout: 2000,
        });
    }

    render() {
        const { ocr } = this.props;
        return (
            <Page
                savedOCR={ocr.savedOCR}
                copyText={this.copyText}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ocr: state.ocr,
    }
}

const mapDispatchToProps = {
    showSnack,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Storage)
);
