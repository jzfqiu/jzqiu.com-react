import ReactDOM from 'react-dom';
import React from 'react';
import Heya from './heya.js';
import Dolphin from './dolphin.js';
import { ProjectDivider, ProjectSecrets, ProjectIMEDB } from './projects.js';
import styled from 'styled-components'


const StyledIndex = styled.div`
    font-family: "Courier New", Courier, monospace;
`;

const StylBotFiller = styled.div`
    height: 1000px;
    width: 800;
`;

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
        return (
            <StyledIndex>
                <Dolphin x={DolphinX}/>
                <Heya />
                <ProjectDivider x={ProjDividerX}/>
                <ProjectSecrets x={ProjSecretsX}/>
                <ProjectIMEDB x={ProjImedbX}/>
                <StylBotFiller/>
            </StyledIndex>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


