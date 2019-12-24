import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Tesseract from 'tesseract.js';
import { showSnack } from 'react-redux-snackbar';
import Page from './page';
import saveOCR from '../../redux/actions/saveOCR';

class OCR extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploads: [],
            patterns: [],
            documents: [],
            savedOCR: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.generateText = this.generateText.bind(this);
        this.saveOCR = this.saveOCR.bind(this);
        this.copyText = this.copyText.bind(this);
    }

    copyText = () => {
        this.props.showSnack('copy-text-id', {
            label: 'Copied!',
            timeout: 2000,
        });
    }

    saveOCR = (filename, text) => {
        if (!this.props.ocr.savedOCR.some(item => item.filename === filename)) {
            this.props.saveOCR({ filename, text });
            this.props.showSnack('save-text-ocr', {
                label: 'Saved!',
                timeout: 2000,
            });
        } else {
            this.props.showSnack('already-save-text-ocr', {
                label: 'It was already saved!',
                timeout: 2000,
            });
        }
    }

    generateText = () => {
        let uploads = this.state.uploads;

        for (let i = 0; i < uploads.length; i++) {
            Tesseract.recognize(uploads[i]['objectURL'], {
                lang: 'spa',
            }).catch(err => {
                console.log(err);
            }).then(results => {
                let confidence = results.confidence;
                let text = results.text;

                let pattern = /\b\w{10,10}\b/g
                let patterns = results.text.match(pattern);

                this.setState({
                    patterns: this.state.patterns.concat(patterns),
                    documents: this.state.documents.concat({
                        objectURL: uploads[i]['objectURL'],
                        filename: uploads[i]['name'],
                        pattern: patterns,
                        text: text,
                        confidence: confidence
                    })
                })
            })
        }
    }

    handleChange = (files) => {
        if (files[0]) {
            let tmpUploads = [];
            for (let key in files) {
                if (!files.hasOwnProperty(key)) continue;
                let upload = files[key]
                if (this.state.uploads.some(item => item.name === upload.name)) {
                    this.props.showSnack('duplicate-file', {
                        label: 'A file with the same name already exists, only the first one will be processed.',
                        timeout: 2000,
                    });
                } else {
                    tmpUploads.push({
                        'objectURL': URL.createObjectURL(upload),
                        'name': files[key]['name']
                    });
                    this.setState({
                        uploads: tmpUploads
                    })
                }
            }
        } else {
            this.setState({
                uploads: []
            })
        }
    }

    render() {
        const {
            uploads,
            documents,
            patterns
        } = this.state;

        return (
            <Page
                handleChange={this.handleChange}
                generateText={this.generateText}
                saveOCR={this.saveOCR}
                copyText={this.copyText}
                uploads={uploads}
                documents={documents}
                patterns={patterns}
                goTo={(path) => {
                    this.props.history.push(path);
                }}
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
    saveOCR,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(OCR)
);