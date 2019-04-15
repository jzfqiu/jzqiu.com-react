import ReactDOM from 'react-dom';
import React from 'react';
import Heya from './heya.js';
import Dolphin from './dolphin.js';
import Projects from './projects.js';
import styled from 'styled-components'


const StyledIndex = styled.div`
    font-family: "Courier New", Courier, monospace;
`;

class Index extends React.Component {
    render () {
        return (
            <StyledIndex>
                <Dolphin />
                <Heya />
                <Projects />
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


