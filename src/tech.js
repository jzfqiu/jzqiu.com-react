import React, { Component } from 'react';
import styled from 'styled-components'
import flask_logo from './assets/flask.png'
import django_logo from './assets/django.png'
import sqlite_logo from './assets/sqlite.png'
import mongodb_logo from './assets/mongodb.png'

const StyledTechs = styled.div`
    width: 1000px;
    position: relative;
    left: calc(50% - 500px);
    display: flex;
    align-content: baseline;
    flex-wrap: wrap;
`;

const StyledTechCategory = styled.div`
    width: 1000px;
    height: 100px;
    text-align: center;
    vertical-align: bottom;
`;

const StyledTech = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
`;

const StyledTechText = styled.div`
    width: 400px;
    padding: 20px;
`;

const StyledTechLogo = styled.div`
    width: 100px;
`;

class Techs extends Component {
    render() {
        return (
            <StyledTechs>
                <StyledTechCategory><h3>Backend</h3></StyledTechCategory>
                <StyledTech>
                    <StyledTechLogo> <img src={flask_logo} alt={"Flask Logo"} /></StyledTechLogo>
                    <StyledTechText>
                        <h4>Flask</h4>
                        <p>Routing, handling requests and interfacing database, with the full power of jinja2 template language.</p>
                        <h5>Intermediate</h5>
                    </StyledTechText>
                </StyledTech>
                <StyledTech>
                    <StyledTechLogo><img src={django_logo} alt={"Django Logo"}/></StyledTechLogo>
                    <StyledTechText>
                        <h4>Django</h4>
                        <p>In house model-view-template pattern is quick and great. Views are my own and class-based, very expandable.</p>
                        <h5>Intermediate</h5>
                    </StyledTechText>
                </StyledTech>
                <StyledTech>
                    <StyledTechLogo><img src={mongodb_logo} alt={"MongoDB Logo"} /></StyledTechLogo>
                    <StyledTechText>
                        <h4>MongoDB</h4>
                        <p>No schema, no hassle. Why write in all cap when you can just throw around psuedo python object?</p>
                        <h5>Beginner</h5>
                    </StyledTechText>
                </StyledTech>
                <StyledTech>
                    <StyledTechLogo><img src={sqlite_logo} alt={"SQLite Logo"} /></StyledTechLogo>
                    <StyledTechText>
                        <h4>SQLite</h4>
                        <p>When I don't feel like networking with anyone or anything, not even a database.</p>
                        <h5>Beginner</h5>
                    </StyledTechText>
                </StyledTech>
                <StyledTechCategory>Frontend</StyledTechCategory>
                <StyledTech>
                    <StyledTechLogo><img src={sqlite_logo} alt={"SQLite Logo"} /></StyledTechLogo>
                    <StyledTechText>
                        <h4>SQLite</h4>
                        <p>When I don't feel like networking with anyone or anything, not even a database.</p>
                        <h5>Beginner</h5>
                    </StyledTechText>
                </StyledTech>
            </StyledTechs>
        );
    }
}

// eslint-disable-next-line
{/*
                <h1>Heya.</h1>
                <p>This is Zhenfeng Qiu. You can also call me Jeff.</p>
                <p>I am a college student studying Computer Science and Economics.</p>
                <p>I build stuff, think random things, and play around.</p>
                <p>Dolphin is my spirit animal.</p>
*/}

export default Techs;