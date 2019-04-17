import React, { Component } from 'react';
import styled from 'styled-components'

const StyledWords = styled.div`
    width: 800px;
    height: 300px;
    position: relative;
    left: calc(50% - 400px);
`;

class Words extends Component {
    render() {
        return (
            <StyledWords>
                <h4>How this site come to be</h4>
                <p>"What are you expecting?"</p>
            </StyledWords>
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

export default Words;