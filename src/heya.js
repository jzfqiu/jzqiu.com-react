import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHeya = styled.div`
    width: 800px;
    height: 300px;
    position: relative;
    left: calc(50% - 400px);
`;

class Heya extends Component {
    render() {
        return (
            <StyledHeya>
                <h2>*Click*</h2>
                <p>"What are you expecting?"</p>
                <p>The fall of global capitalism and rise of Anarcho-technocracy.</p>
                <p>"What... no, not that. This."</p>
                <p>Oh, idgaf.</p>
            </StyledHeya>
        );
    }
}

// eslint-disable-next-line
{/*
                <h1>Heya.</h1>
                <p>This is Zhenfeng Qiu. You can also call me Jeff.</p>
                <p>I am a college student studying Computer Science and Economics.</p>
                <p>I build stuff, think random things, and play around.</p>
                <p>Dolphin is my spirit animal.</p>
*/}

export default Heya;