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
        const words = ['Productive', 'Engaging', 'Impactful', 'Fruitful'];

        for (let i = 4; i < 18; i++) {
    	words[i] = words[i - 4];
        }
        return(
            <div className='welcome-container-wrapper'>
                <div className='welcome-container'>
                    <div className='type-container'>
                        <h1 className='greeting'>Hey there,</h1>
                        <h2 className='span-wrapper'>Hope you have a(n)</h2>
                        <div className='typing-carousel-container'>
                            <Typist>
        			{words.map((word, i) => (
        				<span key={word}>
        					{word}
        					<Typist.Backspace
        						count={word.length}
        						delay={(i + 1) * 2000}
        					/>
        				</span>
        			))}
        		</Typist>
                        </div>
                        <h2 className='span-wrapper'>day...</h2>
                    </div>
                </div>
                <div className='vl'>
                </div>
                <div className='vl'>
                </div>
                <div className='vl'>
                </div>
                <div className='login-container'>
                    <HashRouter>
                        <div className='login-component-container'>

                            <Route exact path = '/' component = { Login } />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
//                            <Route path = '/registration' component = { Registration } />
