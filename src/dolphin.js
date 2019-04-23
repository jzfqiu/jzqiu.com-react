    import React, {Component} from 'react';
import dolphin_core from './assets/dolphin_borderless.png'
import styled from 'styled-components'


const StyledDolphin = styled.div`
    height: 1500px;
    width: 100%;
`;

const StyledDolphinCore = styled.div`
    width: 500px;
    top: ${props => props.xl}px;
    position: fixed;
    margin-left: calc(50% - 250px);
    z-index: 10;
`;

const StyledDolphinLine = styled.div`
    top: 0px;
    width: 800px;
    position: fixed;
    margin-left: calc(50% - 400px);
    z-index: ${props => props.zIdx};
`;

const ImgStyle = {
    width: '100%',
    position: 'absolute'
};


const moveLeftUp = function (endDim, n) {
    return endDim - n * (endDim + 50);
};


const moveRightDown = function (viewBoxDim, endDim, n) {
    return endDim - n * (endDim - viewBoxDim - 50);
};


class Dolphin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rendered: false
        };
    }


    render() {
        return (
            <StyledDolphin>
                <StyledDolphinCore xl={this.props.xl===0 ? 100 : 100-this.props.xl*600}>
                    <img src={dolphin_core} alt={"dolphin"} style={ImgStyle}/>
                </StyledDolphinCore>
                <DolphinLineA x={this.props.x}/>
                <DolphinLineB x={this.props.x}/>
            </StyledDolphin>
        );
    }
}


class DolphinLineA extends Component {

    render() {
        const x = this.props.x;
        const widthDim = 300;
        const heightDim = 300;
        const widthOffset = 90;
        const heightOffset = 55;
        const scaleOffset = 0.65;

        return (
            <div>
                <StyledDolphinLine zIdx={x===1 ? -10 : 10}>
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
                                stroke-width: ${scaleOffset};
                            }
                        `}
                            </style>
                        </defs>
                        <g>
                            <polyline className="cls-1 l0" points=
                                {
                                    moveLeftUp(widthOffset + 100 * scaleOffset, x) + " " +
                                    moveLeftUp(heightOffset, x) + " " +

                                    moveLeftUp(widthOffset + 190 * scaleOffset, x) + " " +
                                    moveRightDown(heightDim, heightOffset + 140 * scaleOffset, x) + " " +

                                    moveRightDown(widthDim, widthOffset + 80 * scaleOffset, x) + " " +
                                    moveRightDown(heightDim, heightOffset + 270 * scaleOffset, x)
                                }
                            />
                        </g>
                    </svg>
                </StyledDolphinLine>
                <StyledDolphinLine zIdx={x===1 ? -10 : 0}>
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
                            stroke-width: ${scaleOffset};
                        }
                    `}
                            </style>
                        </defs>
                        <g>
                            <polyline className="cls-1 l1" points=
                                {
                                    moveRightDown(widthDim, widthOffset + 80 * scaleOffset, x) + " " +
                                    moveRightDown(heightDim, heightOffset + 270 * scaleOffset, x) + " " +

                                    moveRightDown(widthDim, widthOffset, x) + " " +
                                    moveLeftUp(heightOffset + 110 * scaleOffset, x) + " " +

                                    moveLeftUp(widthOffset + 100 * scaleOffset, x) + " " +
                                    moveLeftUp(heightOffset, x)
                                }
                            />
                        </g>
                    </svg>
                </StyledDolphinLine>
            </div>
        );
    }
}


class DolphinLineB extends Component {

    render() {
        const x = this.props.x;
        const widthDim = 300;
        const heightDim = 300;
        const widthOffset = 68;
        const heightOffset = 80;
        const scaleOffset = 0.65;

        return (
            <div>
                <StyledDolphinLine zIdx={x===1 ? -10 : 10}>
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
                        stroke-width: ${scaleOffset};
                    }`}
                            </style>
                        </defs>
                        <g>
                            <polyline className="cls-1" points={

                                moveLeftUp(widthOffset + 120 * scaleOffset, x) + " " +
                                moveRightDown(heightDim, heightOffset + 180 * scaleOffset, x) + " " +

                                moveRightDown(widthDim, widthOffset, x) + " " +
                                moveRightDown(heightDim, heightOffset, x) + " " +

                                moveRightDown(widthDim, widthOffset + 190 * scaleOffset, x) + " " +
                                moveLeftUp(heightOffset + 70 * scaleOffset, x)
                            }/>
                        </g>
                    </svg>
                </StyledDolphinLine>
                <StyledDolphinLine zIdx={x===1 ? -10 : 0}>
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
                        stroke-width: ${scaleOffset};
                    }`}
                            </style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <polyline className="cls-1" points={
                                moveRightDown(widthDim, widthOffset + 190 * scaleOffset, x) + " " +
                                moveLeftUp(heightOffset + 70 * scaleOffset, x) + " " +

                                moveLeftUp(widthOffset + 260 * scaleOffset, x) + " " +
                                moveLeftUp(heightOffset + 200 * scaleOffset, x) + " " +

                                moveLeftUp(widthOffset + 120 * scaleOffset, x) + " " +
                                moveRightDown(heightDim, heightOffset + 180 * scaleOffset, x)

                            }/>
                            {/*  "0 0   190 70   260 200   120 180"  */}
                        </g>
                    </svg>
                </StyledDolphinLine>
            </div>
        );
    }
}


export default Dolphin;