import React, { Component } from 'react';
import dolphin_core from './dolphin_borderless.png'
import styled from 'styled-components'


const StyledDolphin = styled.div`
    height: 1500px;
`;

const StyledDolphinCore = styled.div`
    width: 500px;
    height: 400px;
    top: calc(10% + 10px);
    position: sticky;
    left: calc(50% - 250px);
    z-index: 10;
`;

const StyledDolphinLineA = styled.div`
    top: 10%;
    width: 520px;
    position: fixed;
    margin-left: calc(50% - 170px);
    z-index: 20;
`;

const StyledDolphinLineB = styled.div`
    top: 10%;
    width: 500px;
    position: fixed;
    margin-left: calc(50% - 220px);
    z-index: 0;
`;

const ImgStyle = {
    width: '100%',
    position: 'absolute'
};


const  moveLeftUp = function(endDim, n) {
    return endDim - n*(endDim+50);
};


const  moveRightDown = function(viewBoxDim, endDim, n) {
    return endDim - n * (endDim-viewBoxDim-50);
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
        const toTop = document.documentElement.scrollTop / 1000;
        this.setState({
            height: toTop < 1 ? toTop : 1,
        })
    };

    render() {
        return (
            <StyledDolphin>
                <StyledDolphinCore>
                    <img src={dolphin_core} alt={"dolphin"} style={ImgStyle}/>
                </StyledDolphinCore>
                <StyledDolphinLineA>
                    <DolphinLineA x={this.state.height}/>
                </StyledDolphinLineA>
                <StyledDolphinLineB>
                    <DolphinLineB x={this.state.height}/>
                </StyledDolphinLineB>
            </StyledDolphin>
        );
    }
}


class DolphinLineA extends Component {

    render() {
        const x = this.props.x;
        const widthDim = 300;
        const heightDim = 400;

        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox={
                     "0 0 " + widthDim +
                     " " + heightDim
                 }>
                <defs>
                    <style>{`
                        .cls {
                            fill: none;
                            stroke: #000;
                            stroke-miterlimit: 10;
                        }
                        
                        .l0 {
                            z-index: 0;
                        }
                        
                        .l1 {
                            z-index: 20;
                        }
                    `}
                    </style>
                </defs>
                <title>Layer 1</title>
                <g id="Layer1" data-name="Layer 1">
                    <polyline className="cls-1 l0" points=
                        {
                            moveLeftUp(100, x) + " " +
                            moveLeftUp(30, x) + " " +

                            moveLeftUp(190, x) + " " +
                            moveRightDown(heightDim, 170, x) + " " +

                            moveRightDown(widthDim, 80, x) + " " +
                            moveRightDown(heightDim, 300, x)
                        }
                    />
                    <polyline className="cls-1 l1" points=
                        {
                            moveRightDown(widthDim, 80, x) + " " +
                            moveRightDown(heightDim, 300, x) + " " +

                            moveRightDown(widthDim, 0, x) + " " +
                            moveLeftUp(140, x) + " " +

                            moveLeftUp(100, x) + " " +
                            moveLeftUp(30, x)
                        }
                    />
                    {/*
                    "100 0   190 140   80 270   0 110"

                    */}
                </g>
            </svg>
        );
    }
}


class DolphinLineB extends Component {

    render() {
        const x = this.props.x;
        const widthDim = 300;
        const heightDim = 400;

        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox={
                     "0 0 " + widthDim +
                     " " + heightDim
                 }>
                <defs>
                    <style>
                        {`.cls-1 {
                        fill: none;
                        stroke:#000;
                        stroke-miterlimit:10;
                    }`}
                    </style>
                </defs>
                <title>Layer 2</title>
                <g id="Layer_2" data-name="Layer 2">
                    <polyline className="cls-1" points={
                        moveRightDown(widthDim, 0, x) + " " +
                        moveRightDown(heightDim, 80, x) + " " +

                        moveRightDown(widthDim, 190, x) + " " +
                        moveLeftUp(150, x) + " " +

                        moveLeftUp(260, x) + " " +
                        moveLeftUp(280, x)
                    }/>
                    <polyline className="cls-1" points={
                        moveLeftUp(260, x) + " " +
                        moveLeftUp(280, x) + " " +

                        moveLeftUp(120, x) + " " +
                        moveRightDown(heightDim, 260, x) + " " +

                        moveRightDown(widthDim, 0, x) + " " +
                        moveRightDown(heightDim, 80, x)
                    }/>
                    {/*  "0 0   190 70   260 200   120 180"  */}
                </g>
            </svg>
        );
    }
}


export default Dolphin;