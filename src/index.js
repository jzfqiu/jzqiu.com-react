import ReactDOM from 'react-dom';
import React from 'react';
import Heya from './heya.js';
import Dolphin from './dolphin.js';
import { ProjectSecrets, ProjectIMEDB, ProjectJzqiu } from './projects.js';
import styled from 'styled-components'


const StyledIndex = styled.div`
    font-family: "Courier New", Courier, monospace;
`;

const StylBotFiller = styled.div`
    height: 1000px;
    width: 800;
`;

const StylDivider = styled.div`
    width: 800px;
    height: 400px;
    position: relative
    left: calc(50% - 400px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StylDividerTitle = styled.h2`
    width: 150px;
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
        const ProjDividerX = this.calcIntervalX(1200, 1500);
        const ProjSecretsX = this.calcIntervalX(1800, 2100);
        const ProjImedbX = this.calcIntervalX(2400, 2700);
        const ProjJzqiuX = this.calcIntervalX(2900, 3200);
        const WordDividerX = this.calcIntervalX(3400, 3700);
        return (
            <StyledIndex>
                <Dolphin x={DolphinX}/>
                <Heya />
                <Divider title={"Project"} x={ProjDividerX}/>
                <ProjectSecrets x={ProjSecretsX}/>
                <ProjectIMEDB x={ProjImedbX}/>
                <ProjectJzqiu x={ProjJzqiuX}/>
                <Divider title={"Words"} x={WordDividerX}/>
                <StylBotFiller/>
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


