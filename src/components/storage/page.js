import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, ListItem, Button, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CopyToClipboard from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import './style.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '1rem'
    }
}));

function Page(props) {
    const classes = useStyles();
    const {
        savedOCR,
        copyText
    } = props;

    const isEmpty = savedOCR.length === 0;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar title={'Storage'} hasAutocomplete={false} />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    {isEmpty ?
                        <Typography variant="h5" component="h3" className="page-message">
                            No items saved
                    </Typography>
                        :
                        savedOCR.map((value, index) => {
                            return (
                                <Box boxShadow={3} key={index}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar><InsertDriveFileIcon /></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={value.filename}
                                            secondary={value.text}
                                        />
                                        <CopyToClipboard text={value['text']} onCopy={copyText}>
                                            <Button color="primary"><FileCopyIcon /></Button>
                                        </CopyToClipboard>
                                    </ListItem>
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Page;