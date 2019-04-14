import ReactDOM from 'react-dom';
import React from 'react';
import Heya from './heya.js';
import Dolphin from './dolphin.js';


class Index extends React.Component {
    render () {
        return (
            <div>
                <Dolphin />
                <Heya />
            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


