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

// const StylBotFiller = styled.div`
//     height: 1000px;
//     width: 800;
// `;

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
        return (
            <StylDivider>
                <svg height={30} width={200}>
                    <style>{`.cls{stroke:#000000;stroke-width:2}`}</style>
                    <line className="cls" x1={200-this.props.x*200} y1="13" x2="200" y2="13"/>
                </svg>
                <StylDividerTitle>{this.props.title}</StylDividerTitle>
                <svg height={30} width={200}>
                    <style>{`.cls{stroke:#000000;stroke-width:2}`}</style>
                    <line className="cls" x1="0" y1="13" x2={this.props.x*200} y2="13"/>
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
                    <a href="https://github.com/jeff-zqiu">
                        <StylButtonImg src={github_button} alt={"github button"}/>
                    </a>
                </StylButtonImgContainer>
                <StylButtonImgContainer>
                    <a href="https://www.linkedin.com/in/jeff-zhenfengqiu/">
                        <StylButtonImg src={linkedin_button} alt={"linkedin button"}/>
                    </a>
                </StylButtonImgContainer>
                <StylButtonImgContainer>
                    <a href="https://twitter.com/jzqiu1">
                        <StylButtonImg src={twitter_button} alt={"twitter button"}/>
                    </a>
                </StylButtonImgContainer>
                <StylButtonImgContainer>
                    <a href="https://drive.google.com/file/d/1SHt_-9mO38SE2G_diqTV5GmXA8xPEj44/view?usp=sharing">
                        <StylButtonImg src={cv_button} alt={"CV button"}/>
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
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const toTop = document.documentElement.scrollTop;
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
        const DolphinX = this.calcIntervalX(0, 1000);
        const ProjDividerX = this.calcIntervalX(1200, 1500);
        // const WordDividerX = this.calcIntervalX(3400, 3700);
        const TechDividerX = this.calcIntervalX(2600, 2900);
        return (
            <StyledIndex>
                <Dolphin x={DolphinX}/>
                <Heya />
                <Divider title={"Projects"} x={ProjDividerX}/>
                <ProjectSecrets fps={50} duration={0.4}/>
                <ProjectIMEDB fps={50} duration={0.6}/>
                <ProjectJzqiu fps={50} duration={0.4}/>
                {/*<Divider title={"Words"} x={WordDividerX}/>*/}
                {/*<Words />*/}
                <Divider title={"Tech Stack"} x={TechDividerX}/>
                <Techs />
                <Footer/>
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


