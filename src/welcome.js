import React from 'react';
import Login from './login';
import Registration from './registration';
import  { HashRouter, Route } from 'react-router-dom';
import Typist from 'react-typist';

export default class Welcome extends React.Component {
    constructor() {
        super();

        this.reType = this.reType.bind(this);
    }

    reType() {
        console.log("HEYYYYY TYPING DONE");
    }


    render() {

        return(
            <div className='welcome-container-wrapper'>
                <div className='welcome-container'>
                    <h1>Welcome page</h1>
                    <div className='typing-carousel-container'>
                        <Typist>
                            <span className="my-custom-class"> Hello Victoria </span>
                            <br />
                            <div className="container">
                                <p> Glad to see you.  </p>
                            </div>
                            Final sentence
                            <Typist.Backspace count={8} delay={200} />

                            Beautiful
                            <Typist.Backspace count={9} delay={200} />

                            Not at all
                            <Typist.Backspace count={10} delay={200} />


                        </Typist>
                    </div>
                </div>
                <div className='login-container'>
                    <HashRouter>
                        <div>

                            <Route exact path = '/' component = { Login } />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
//                            <Route path = '/registration' component = { Registration } />
