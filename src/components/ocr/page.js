import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, List, ListItem, ListItemText, Box, ListItemAvatar, Avatar, CardContent, Typography, CardMedia, CardHeader, Card, CardActions } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CopyToClipboard from 'react-copy-to-clipboard';
import './style.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    paperLeft: {
        marginRight: 2,
        marginLeft: 25,
        marginTop: 20,
        padding: theme.spacing(4),
        height: '88vh',
    },
    paperRight: {
        overflow: 'auto',
        marginRight: 25,
        marginLeft: 2,
        marginTop: 20,
        padding: theme.spacing(4),
        height: '88vh',
    },
    cardRoot: {
        marginBottom: '1.5rem',
    },
    listRoot: {
        marginTop: '1rem',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

function Page(props) {
    const classes = useStyles();
    const {
        handleChange,
        generateText,
        copyText,
        uploads,
        documents,
        saveOCR,
    } = props;


    return (
        <Fragment>
            <CssBaseline />
            <AppBar title={'OCR'} hasAutocomplete={false} />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paperLeft}>
                        <Grid container>
                            <Grid item xs={12}>
                                <DropzoneArea
                                    onChange={handleChange}
                                    acceptedFiles={['image/*']}
                                    dropzoneClass={'dropzone-area'}
                                    showAlerts={false}
                                />
                                <Button variant="contained" color="primary" onClick={generateText} className="button ocr-button-generate">
                                    Generate
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <List className={classes.listRoot}>
                                    {uploads.map((value, index) => {
                                        return (
                                            <Box boxShadow={3} key={index}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar><InsertDriveFileIcon /></Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={value['name']} />
                                                </ListItem>
                                            </Box>
                                        )
                                    })}
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperRight}>
                        {documents.map((value, index) => {
                            let confidenceScoreText = <div><strong className='ocr-confidence-score-text'>Confidence score:</strong><span>{value.confidence}</span></div>;
                            return (
                                <Card key={index} className={`ocr-card ${classes.cardRoot}`}>
                                    <CardHeader
                                        title={value['filename']}
                                        avatar={<Avatar><InsertDriveFileIcon /></Avatar>}
                                        subheader={confidenceScoreText}
                                    />
                                    <CardMedia
                                        src={value['objectURL']}
                                        component='img'
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value['text']}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <CopyToClipboard text={value['text']} onCopy={copyText}>
                                            <Button variant="contained" color="primary" className="button ocr-button-copy-text">
                                                Copy to clipboard
                                            </Button>
                                        </CopyToClipboard>
                                        <Button onClick={() => saveOCR(value['filename'], value['text'])} variant="contained" color="primary" className="button ocr-button-save-text">
                                            Save text
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Page;