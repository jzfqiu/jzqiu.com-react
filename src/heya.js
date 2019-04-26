import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHeya = styled.div`
    width: ${props => props.heyaWidth}px;
    height: ${props => props.heyaWidth*0.1}px;
    position: relative;
    left: calc(50% - ${props => props.heyaWidth*0.5}px);
`;

class Heya extends Component {
    render() {
        const heyaWidth = this.props.screenWidth>1000 ? 800 : this.props.screenWidth * 0.8;
        return (
            <StyledHeya heyaWidth={heyaWidth}>
                <h1>Heya.</h1>
                <p>This is Zhenfeng Qiu. You can also call me Jeff.</p>
                <p>I am a college student studying Computer Science and Economics.</p>
                <p>I like to build stuff and learn a bit of everything.</p>
                <p>Dolphin is my spirit animal.</p>
            </StyledHeya>
        );
    }
}



export default Heya;