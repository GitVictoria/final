import React, { Component } from "react";
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

//------------------------SPEECH RECOGNITION-----------------------------



// const propTypes = {
//     // Props injected by SpeechRecognition
//     transcript: PropTypes.string,
//     resetTranscript: PropTypes.func,
//     browserSupportsSpeechRecognition: PropTypes.bool
// };

const options = {
    autoStart: false
};

//------------------------COMPONENT-----------------------------

class Speech extends Component {



    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript } = this.props;



        if (!browserSupportsSpeechRecognition) {
            return null;
        }

        return (
            <div>
                <div className='transcript-container'>
                    <span className='transcript-span'>{transcript}</span>
                </div>
                <div className='transcript-buttons'>
                    <div className='finalTranscript-reset' onClick={resetTranscript}><img className='icon' src='reset.png'/></div>
                    <div className='finalTranscript-start'onClick={startListening}><img className='icon' src='record1.png'/></div>
                    <div className='finalTranscript-stop'onClick={stopListening}><img className='icon' src='mic.png'/></div>
                    <div className='finalTranscript'onClick= { () => {this.props.setFinalTranscript(this.props.finalTranscript);}}><img className='icon' src='done.png'/></div>
                </div>
            </div>
        );
    }
}

// <span  className='transcript-span'>{this.props.finalTranscript}</span>
// Speech.propTypes = propTypes;

export default SpeechRecognition(options)(Speech);
