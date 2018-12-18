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
        const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props;



        if (!browserSupportsSpeechRecognition) {
            return null;
        }

        return (
            <div>
                <div className='transcript-container'>
                    <span className='transcript-span'>{transcript}</span>
                </div>
                <button onClick={resetTranscript}>Reset</button>
                <button onClick={startListening}>Start</button>
                <button onClick={stopListening}>Stop</button>
            </div>
        );
    }
}

// Speech.propTypes = propTypes;

export default SpeechRecognition(options)(Speech);
