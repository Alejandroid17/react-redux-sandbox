import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css'

function Page(props) {

    const {
        title,
        hasAutocomplete,
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
        printGlobalState
    } = props;

    let headerTitle = title !== undefined ? title : 'React Redux SandBox';
    let showAutocomplete = hasAutocomplete !== undefined ? hasAutocomplete : true;

    return (
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                    {headerTitle}
                </Typography>

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