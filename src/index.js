import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'

import Heya from './heya.js';
import Dolphin from './dolphin.js';
import { ProjectSecrets, ProjectIMEDB, ProjectJzqiu } from './projects.js';
// import Words from './words.js';
import Techs from './tech.js';



const StyledIndex = styled.div`
    font-family: "Courier New", Courier, monospace;
`;

const StylBotFiller = styled.div`
    height: 1000px;
    width: 800;
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
        const ProjDividerX = 1; //this.calcIntervalX(1200, 1500);
        // const WordDividerX = this.calcIntervalX(3400, 3700);
        const TechDividerX = 1; //this.calcIntervalX(3400, 3700);
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
                <StylBotFiller/>
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


