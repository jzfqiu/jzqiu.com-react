import React, { Component } from 'react';
import styled from 'styled-components'

class Projects extends Component {
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
            height: toTop
        })
    };
}


{/*
<section class="projects">
    <h3>Projects</h3>
    <div class="uocsecrets">
        <h4>UoCSecrets</h4>
        <p>An anonymous social network webapp</p>
        <p>Built using: Django, Bootstrap, PostgreSQL</p>
    </div>
    <div class="ime_inventory_database">
        <h4>IME Inventory Database</h4>
        <p>A search engine and database interface for IME's equipment inventory</p>
        <p>Built using: Flask, jQuery, MongoDB</p>
    </div>
    <div class="jzqiu">
        <h4>This Site</h4>
        <p>My personal website</p>
        <p>Built using: Flask, jQuery, SQLite</p>
    </div>
</section>
*/}