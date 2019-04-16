import React, {Component} from 'react';
import styled from 'styled-components'



const StylProject = styled.div`
    width: 1000px;
    height: 500px;
    position: relative
    left: calc(50% - 500px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StylProjSVG = styled.div`    
    width: 500px;
`;

const StylProjText = styled.div`
    width: 500px;
    padding: 50px;
`;



class ProjectSecrets extends Component {
    render() {
        return (
            <StylProject>
                <StylProjSVG>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="-5 -5 810 410">
                        <style>{`
        .st0{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:2;}
        `}
                        </style>
                        <g>
                            <path className="st0" d="M220,200.5c10.5,0,19,8.5,19,19v160c0,10.5-8.5,19-19,19H20c-10.5,0-19-8.5-19-19v-160c0-10.5,8.5-19,19-19H220 M220,199.5
H20c-11,0-20,9-20,20v160c0,11,9,20,20,20h200c11,0,20-9,20-20v-160C240,208.5,231,199.5,220,199.5L220,199.5z"/>
                            <path className="st0" d="M781,100.5c10.5,0,19,8.5,19,19v260c0,10.5-8.5,19-19,19H581c-10.5,0-19-8.5-19-19v-260c0-10.5,8.5-19,19-19H781 M781,99.5
H581c-11,0-20,9-20,20v260c0,11,9,20,20,20h200c11,0,20-9,20-20v-260C801,108.5,792,99.5,781,99.5L781,99.5z"/>
                            <path className="st0" d="M500,1c10.5,0,19,8.5,19,19v360c0,10.5-8.5,19-19,19H300c-10.5,0-19-8.5-19-19V20c0-10.5,8.5-19,19-19H500 M500,0H300
c-11,0-20,9-20,20v360c0,11,9,20,20,20h200c11,0,20-9,20-20V20C520,9,511,0,500,0L500,0z"/>
                            <polyline className="st0" points="0,350 120,350 240,350 "/>
                            <line className="st0" x1="120" y1="400" x2="120" y2="350"/>
                            <polyline className="st0" points="280,350 400,350 520,350 "/>
                            <line className="st0" x1="400" y1="400" x2="400" y2="350"/>
                            <polyline className="st0" points="561,350 678.5,350 801,350 "/>
                            <line className="st0" x1="681" y1="400" x2="681" y2="350"/>
                            <path className="st0" d="M42.2,228.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S35.9,228.5,42.2,228.5 M42.2,227.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S49.2,227.5,42.2,227.5L42.2,227.5z"/>
                            <line className="st0" x1="70.2" y1="239.5" x2="170.2" y2="239.5"/>
                            <path className="st0" d="M322.2,28.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S315.9,28.5,322.2,28.5 M322.2,27.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S329.2,27.5,322.2,27.5L322.2,27.5z"/>
                            <line className="st0" x1="350.2" y1="39.5" x2="450.2" y2="39.5"/>
                            <path className="st0" d="M602.2,128.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S595.9,128.5,602.2,128.5 M602.2,127.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S609.2,127.5,602.2,127.5L602.2,127.5z"/>
                            <line className="st0" x1="630.2" y1="139.5" x2="730.2" y2="139.5"/>
                            <path className="st0" d="M65,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C66.4,386,65.8,386.6,65,386.6z"/>
                            <path className="st0" d="M344.9,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C346.2,386,345.6,386.6,344.9,386.6z"/>
                            <path className="st0" d="M625.9,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C627.2,386,626.6,386.6,625.9,386.6z"/>
                            <path className="st0" d="M469.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C473.2,381,471.6,382.8,469.6,382.8z"/>
                            <path className="st0" d="M747.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C751.2,381,749.6,382.8,747.6,382.8z"/>
                            <path className="st0" d="M185.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C189.2,381,187.6,382.8,185.6,382.8z"/>
                        </g>
                        <line className="st0" x1="590" y1="190" x2={this.props.x * 180 + 590} y2="190"/>
                        <line className="st0" x1="770" y1={330 - this.props.x * 140} x2="770" y2="330"/>
                        <line className="st0" x1={770 - this.props.x * 180} y1="330" x2="770" y2="330"/>
                        <line className="st0" x1="590" y1="190" x2="590" y2={this.props.x * 140 + 190}/>
                        <line className="st0" x1="310" y1="100" x2={this.props.x * 180 + 310} y2="100"/>
                        <line className="st0" x1="310" y1="160" x2={this.props.x * 180 + 310} y2="160"/>
                        <line className="st0" x1="310" y1="220" x2={this.props.x * 180 + 310} y2="220"/>
                        <line className="st0" x1="310" y1="280" x2={this.props.x * 140 + 310} y2="280"/>
                        <line className="st0" x1="30" y1="300" x2={this.props.x * 180 + 30} y2="300"/>
                    </svg>
                </StylProjSVG>
                <StylProjText>
                    <h4>UoCSecrets</h4>
                    <p>An anonymous social network webapp</p>
                    <p>Built using: Django, Bootstrap, PostgreSQL</p>
                </StylProjText>
            </StylProject>
        )
    }
}


class ProjectIMEDB extends Component {

    render() {
        const x1 = this.props.x < 0.5 ? this.props.x * 2 : 1;
        const x2 = this.props.x < 0.5 ?  0 : this.props.x * 2 - 1;
        return (
            <StylProject>
                <StylProjText>
                    <h4>IME Inventory Database</h4>
                    <p>A search engine and database interface for IME's equipment inventory</p>
                    <p>Built using: Flask, jQuery, MongoDB</p>
                </StylProjText>
                <StylProjSVG>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 810 410">
                        <style>
                            {`
                                    .st0{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                    .st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                `}
                        </style>
                        <line className="st1" x1="0" y1="0" x2="800" y2="0"/>
                        <line className="st1" x1="0" y1="0" x2="0" y2="400"/>
                        <line className="st1" x1="800" y1="0" x2="800" y2="400"/>
                        <line className="st1" x1="0" y1="400" x2="800" y2="400"/>

                        <rect x={150} y={175-x1*15} className="st1" width={500+x1*100} height={50+x1*130}/>
                        <rect x={350-x1*165} y={275-x1*90} className="st1" width={100+x1*30} height={50+x1*80}/>

                        <line className="st1" x1="345" y1="200" x2={345+x2*350} y2="200"/>
                        <line className="st1" x1="345" y1="250" x2={345+x2*350} y2="250"/>
                        <line className="st1" x1="345" y1="300" x2={345+x2*200} y2="300"/>

                        <polyline className="st0" points="0,130.7 108.5,130.7 174.5,68.6 800,68.6 "/>
                        <polygon className="st1"
                                 points="60.1,19.8 47.2,43.4 60.1,66.6 85.4,66.6 98.2,43.2 85.6,19.8 "/>
                        <polygon className="st1"
                                 points="61.7,43.2 74.7,66.6 61.7,89.4 36,89.4 22.9,66.6 35.9,43.2 "/>
                        <polygon className="st1"
                                 points="60.1,66.6 54.3,76.7 67.4,98.5 92.4,98.5 104.9,76.5 92.6,53.5 67.4,53.5 "/>
                    </svg>
                </StylProjSVG>
            </StylProject>
        )
    }
}


class ProjectJzqiu extends Component {
    render() {
        return (
            <StylProject>
                <StylProjSVG>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="-5 -5 810 410">
                    </svg>
                </StylProjSVG>
                <StylProjText>
                    <h4>This Site</h4>
                    <p>My personal website</p>
                    <p>Built using: React, Flask, SQLite</p>
                </StylProjText>
            </StylProject>
        )
    }
}

export {
    ProjectSecrets,
    ProjectIMEDB,
    ProjectJzqiu,
};
// eslint-disable-next-line
{/*
<section classNameName="projects">
    <h3>Projects</h3>
    <div classNameName="uocsecrets">
        <h4>UoCSecrets</h4>
        <p>An anonymous social network webapp</p>
        <p>Built using: Django, Bootstrap, PostgreSQL</p>
    </div>
    <div classNameName="ime_inventory_database">
        <h4>IME Inventory Database</h4>
        <p>A search engine and database interface for IME's equipment inventory</p>
        <p>Built using: Flask, jQuery, MongoDB</p>
    </div>
    <div classNameName="jzqiu">
        <h4>This Site</h4>
        <p>My personal website</p>
        <p>Built using: Flask, jQuery, SQLite</p>
    </div>
</section>







*/
}

