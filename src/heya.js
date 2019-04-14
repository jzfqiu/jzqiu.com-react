import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHeya = styled.div`
    width: 500px;
    height: 1000px;
    position: relative;
    left: calc(50% - 250px);
`;

class Heya extends Component {
    render() {
        return (
            <StyledHeya>
                <h1>Heya.</h1>
                <p>This is Zhenfeng Qiu. You can also call me Jeff.</p>
                <p>I am a college student studying Computer Science and Economics.</p>
                <p>I like to daydream, build stuff, and play with toys.</p>
                <p>Also, I like dolphins.</p>
            </StyledHeya>
        );
    }
}

export default Heya;