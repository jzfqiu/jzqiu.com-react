import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'

import Heya from './heya.js';
import Dolphin from './dolphin.js';
import { ProjectSecrets, ProjectIMEDB, ProjectJzqiu } from './projects.js';
// import Words from './words.js';
import Techs from './tech.js';
import github_button from './assets/github_button.png'
import linkedin_button from './assets/linkedin_button.png'
import twitter_button from './assets/twitter_button.png'
import cv_button from './assets/cv_button.svg'



const StyledIndex = styled.div`
    font-family: "Courier New", Courier, monospace;
`;

const StylDivider = styled.div`
    width: 800px;
    height: 200px;
    margin-top: 200px;
    position: relative
    left: calc(50% - 400px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StylDividerTitle = styled.h2`
    width: 170px;
    text-align: center;
    font-weight: 500;
`;


class Divider extends React.Component {
    render() {
        const dividerWidth = this.props.dividerWidth;
        return (
            <StylDivider>
                <svg height={30} width={dividerWidth}>
                    <style>{`.cls{stroke:#000000;stroke-width:2}`}</style>
                    <line className="cls" x1={dividerWidth-this.props.x*dividerWidth} y1="13" x2={dividerWidth} y2="13"/>
                </svg>
                <StylDividerTitle>{this.props.title}</StylDividerTitle>
                <svg height={30} width={dividerWidth}>
                    <style>{`.cls{stroke:#000000;stroke-width:2}`}</style>
                    <line className="cls" x1="0" y1="13" x2={this.props.x*dividerWidth} y2="13"/>
                </svg>
            </StylDivider>
        )
    }
}



const StylButtonsContainer = styled.div`
    width: 300px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
`;

const StylButtonImg = styled.img`
    width: 40px;
    filter: grayscale(100%);
    opacity: 0.5;
    &:hover {
        filter: grayscale(0);
        opacity: 1;
    }
`;

const StylButtonImgContainer = styled.div`
    width: 50px;
`;

class Footer extends React.Component {
    render() {
        return (
            <StylButtonsContainer>
                <StylButtonImgContainer>
                    <a href="https://github.com/endo1phin">
                        <StylButtonImg src={github_button} alt={"github button"}/>
                    </a>
                </StylButtonImgContainer>
                <StylButtonImgContainer>
                    <a href="https://www.linkedin.com/in/jeff-zhenfengqiu/">
                        <StylButtonImg src={linkedin_button} alt={"linkedin button"}/>
                    </a>
                </StylButtonImgContainer>
                <StylButtonImgContainer>
                    <a href="https://twitter.com/endo1phin">
                        <StylButtonImg src={twitter_button} alt={"twitter button"}/>
                    </a>
                </StylButtonImgContainer>
            </StylButtonsContainer>
        )
    }
}



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h: 0,
            width: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleWindowScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleWindowScroll = () => {
        const toTop = window.scrollY;
        this.setState({
            h: toTop,
        })
    };


    calcIntervalX(dimFrom, dimTo) {
        const toTop = this.state.h;
        if (toTop > dimFrom && toTop < dimTo) {
            return (toTop - dimFrom) / (dimTo-dimFrom)
        } else if (toTop > dimFrom) {
            return 1
        } else {
            return 0
        }
    }


    render () {
        const DolphinDimTo = this.state.width > 1000 ? 1500 : 1000+0.75*this.state.width;
        const DolphinX = this.calcIntervalX(0, 1000);
        const DolphinTop = this.calcIntervalX(1000, DolphinDimTo);
        const ProjDividerX = this.calcIntervalX(1200, 1500);
        const TechDividerX = this.calcIntervalX(3000, 3300);
        const DividerWidth = this.state.width > 1000 ? 200 : 0.2*this.state.width;


        return (
            <StyledIndex>
                <Dolphin x={DolphinX} xl={DolphinTop} screenWidth={this.state.width}/>
                <Heya screenWidth={this.state.width}/>
                <Divider title={"Projects"} dividerWidth={DividerWidth} x={ProjDividerX}/>
                <ProjectSecrets fps={50} duration={0.4} screenWidth={this.state.width}/>
                <ProjectIMEDB fps={50} duration={0.6} screenWidth={this.state.width}/>
                <ProjectJzqiu fps={50} duration={0.4} screenWidth={this.state.width}/>
                <Divider title={"Tech Stack"} dividerWidth={DividerWidth} x={TechDividerX}/>
                <Techs screenWidth={this.state.width}/>
                <Footer screenWidth={this.state.width}/>
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


