import React, { Component } from 'react';
import dolphin_core from './dolphin_borderless.png'
import styled from 'styled-components'


const StyledDolphin = styled.div`
    height: 1500px;
`;

const StyledDolphinCore = styled.div`
    width: 500px;
    height: 400px;
    top: 10px;
    position: sticky;
    left: calc(50% - 250px);
`;

const StyledDolphinLine = styled.div`
    width: 100%;
    position: fixed;
`;

const ImgStyle = {
    width: '100%',
    position: 'absolute'
};



class Dolphin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            rendered: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        this.setState({
            height: document.documentElement.scrollTop,
        })
    };

    render() {
        return (
            <StyledDolphin>
                <StyledDolphinCore scroll={this.state.height}>
                    <img src={dolphin_core} alt={"dolphin"} style={ImgStyle}/>
                </StyledDolphinCore>
                <DolphinLine1/>
                <DolphinLine2/>
            </StyledDolphin>
        );
    }
}


class DolphinLine1 extends Component {
    render() {
        return (
            <StyledDolphinLine>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.6 282.25">
                    <defs>
                        <style>
                            {`.cls-1 {
                            stroke:#000;
                            stroke-miterlimit:10;
                        }`}
                        </style>
                    </defs>
                    <title>Layer 2</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">
                            <path className="cls-1" d="M107.17.35l99,142.24Z"/>
                            <path className="cls-1" d="M206.19,142.59,93.7,281.94Z"/>
                            <path className="cls-1" d="M.44,109.94l93.26,172Z"/>
                            <path className="cls-1" d="M107.17.35.44,109.94Z"/>
                        </g>
                    </g>
                </svg>
            </StyledDolphinLine>
        );
    }
}


class DolphinLine2 extends Component {
    render() {
        return (
            <StyledDolphinLine>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.77 199.09">
                    <defs>
                        <style>
                            {`.cls-1 {
                            stroke:#000;
                            stroke-miterlimit:10;
                        }`}
                        </style>
                    </defs>
                    <title>Layer 3</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_3" data-name="Layer 3">
                            <path className="cls-1" d="M.42.47,189,70.87Z"/>
                            <path className="cls-1" d="M117.63,180.81.42.47Z"/>
                            <path className="cls-1" d="M257.33,198.6,189,70.87Z"/>
                            <path className="cls-1" d="M117.63,180.81l139.7,17.79Z"/>
                        </g>
                    </g>
                </svg>
            </StyledDolphinLine>
        );
    }
}


export default Dolphin;