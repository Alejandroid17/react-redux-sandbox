import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';


class IAppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.printGlobalState = this.printGlobalState.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });
    }

    printGlobalState = () => {
        console.log(this.props);
    }

    onChangeSelection(text) {
        this.setState({ text });
        this.props.history.push('/results');
    }

    render() {
        const { text } = this.state;
        const { hasAutocomplete, setSidebarState } = this.props;

        return (
            <Page
                printGlobalState={this.printGlobalState}
                hasAutocomplete={hasAutocomplete}
                setSidebarState={setSidebarState}
                text={text}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        ocr: state.ocr,
    };
};


// Forma compleja
//const mapDispatchToProps = (dispatch) => {
//    return {
//        findSuggestions: (text) => dispatch(findSuggestions(text)),
//    };
//}

//Forma simple
const mapDispatchToProps = {
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);