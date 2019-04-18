import React, { Component } from 'react';
import styled from 'styled-components'
import flask_logo from './assets/flask_original.png'
import django_logo from './assets/django_original.png'
import sqlite_logo from './assets/sqlite_original.png'
import mongodb_logo from './assets/mongodb_original.jpg'
import react_logo from './assets/react_original.png'
import jquery_logo from './assets/jquery_original.png'
import github_logo from './assets/github_original.png'
import docker_logo from './assets/docker_original.png'
import r_logo from './assets/r_original.png'
import adobe_logo from './assets/illustrator_original.svg'





const StylTechCategoryContainer = styled.div`
    width: 1000px;
    height: 200px;
    text-align: center;
    position: relative;
`;

const StylTechCategory = styled.h3`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom: 0;
    left: 0;
    right: 0;
`;

class TechCategory extends Component {
    render() {
        return (
            <StylTechCategoryContainer>
                <StylTechCategory>{this.props.category}</StylTechCategory>
            </StylTechCategoryContainer>
        );
    }
}




const StylTechContainer = styled.div`
    width: 480px;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const StylTechText = styled.div`
    width: 380px;
    padding: 20px;
`;

const StylTechLogoContainer = styled.div`
    width: 100px;
    height: 100px;
`;

const StylTechLogo = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

class Tech extends Component {
    render() {
        return (
            <StylTechContainer>
                <StylTechLogoContainer> <StylTechLogo src={this.props.logo} alt={"tech Logo"} /></StylTechLogoContainer>
                <StylTechText>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description}</p>
                    <h5>{this.props.level}</h5>
                </StylTechText>
            </StylTechContainer>
        );
    }
}



const StylCardContainer = styled.div`
    width: 210px;
    padding: 20px;
`;

const StylCardLogoContainer = styled.div`
    height: 60px;
`;


const StylCardLogo = styled.img`
    max-width: 250px;
    max-height: 60px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const StylCardName = styled.h4`
    text-align: center;
`;
const StylCardDescription = styled.p`text-align: center;`;

class TechCard extends Component {
    render() {
        return (
            <StylCardContainer>
                <StylCardLogoContainer>
                    <StylCardLogo src={this.props.logo} alt={"tech card logo"} />
                </StylCardLogoContainer>
                <StylCardName>{this.props.name}</StylCardName>
                <StylCardDescription>{this.props.description}</StylCardDescription>
            </StylCardContainer>
        );
    }
}


const StylTechs = styled.div`
    width: 1000px;
    position: relative;
    left: calc(50% - 500px);
    display: flex;
    align-content: baseline;
    flex-wrap: wrap;
`;

class Techs extends Component {
    render() {
        return (
            <StylTechs>
                <TechCategory category={"Backend"}/>
                <Tech name={"Flask"}
                      logo={flask_logo}
                      description={"Routing, handling requests and interfacing database, with the full power of jinja2 template language."}
                      level={"Intermediate"}
                />
                <Tech name={"Django"}
                      logo={django_logo}
                      description={"In house model-view-template pattern is quick and great. Views are my own and class-based, very expandable."}
                      level={"Intermediate"}
                />
                <Tech name={"MongoDB"}
                      logo={mongodb_logo}
                      description={"No schema, no hassle. Why write in all cap when you can just throw around psuedo python object?"}
                      level={"Beginner"}
                />
                <Tech name={"SQLite"}
                      logo={sqlite_logo}
                      description={"When I don't feel like networking with anyone or anything, not even a database."}
                      level={"Beginner"}
                />
                <TechCategory category={"Frontend"}/>
                <Tech name={"React"}
                      logo={react_logo}
                      description={"Managing state, passing props, one component at a time. Also used with styl-component so CSS is less of a headache."}
                      level={"Beginner"}
                />
                <Tech name={"jQuery"}
                      logo={jquery_logo}
                      description={"Grab-n-go style scripting. Old fashioned event handling and ajax calls."}
                      level={"Beginner"}
                />
                <TechCategory category={"DevOp and Others"}/>
                <TechCard
                    name={"Github"}
                    logo={github_logo}
                    description={"git reset --hard"}
                />
                <TechCard
                    name={"Docker"}
                    logo={docker_logo}
                    description={"docker-compose"}
                />
                <TechCard
                    name={"R"}
                    logo={r_logo}
                    description={"ggplot and spatial data analysis"}
                />
                <TechCard
                    name={"Illustrator"}
                    logo={adobe_logo}
                    description={"Vector graphing"}
                />
            </StylTechs>
        );
    }
}

export default Techs;