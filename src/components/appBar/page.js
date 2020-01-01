import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css'

function Page(props) {

    const {
        hasAutocomplete,
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
        printGlobalState,
        setSidebarState
    } = props;

    let showAutocomplete = hasAutocomplete !== undefined ? hasAutocomplete : true;

    return (
        <AppBar position="sticky">
            <Toolbar className="appbar">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={setSidebarState}
                >
                    <MenuIcon />
                </IconButton>

                {showAutocomplete && <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />}
                <AccountCircle onClick={printGlobalState} />
            </Toolbar>
        </AppBar>
    )
}

export default Page;