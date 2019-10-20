import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import findCurrentItem from '../../redux/actions/findCurrenItem';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }

    render() {
        const { currentItem } = this.props;

        return (
            <Page
                currentItem={currentItem}
                goTo={(path) => {
                    this.props.history.push(path);
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    };
};

const mapDispatchToProps = {
    findCurrentItem,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
)
