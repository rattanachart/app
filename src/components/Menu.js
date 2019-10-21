import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Tooltip, IconButton, ListItem } from '@material-ui/core';

// import Arrow from './Arrow';
// import { DefaultStore } from '../assets/statics';

const serverLists = [
    {
        title: 'Front-End Junior',
        link: "/",
        links: [],
        icon: 'fas fa-map'
    },
    {
        title: 'Front-End Middle',
        link: "/middle",
        links: [],
        icon: 'fas fa-map'
    },
    {
        title: 'Direction',
        link: "/direction",
        links: [],
        icon: 'fas fa-map'
    },
    
    
];

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            storeId: ''
        };
    }
    renderTextMenu = () => {
        const { history } = this.props;
        
        return serverLists.map(menu => {
            let isActive = location.hash.split('?')[0] === `#${menu.link}` ||
                menu.links.includes(location.hash.split('?')[0])
            return (
                <MyListItem
                    button
                    key={menu.link}
                    onClick={() => history.push(`${menu.link}`)}
                    active={isActive.toString()}
                >
                    <FontIcon
                        width="30px"
                        active={isActive.toString()}
                        className={menu.icon} />
                    <MenuText active={isActive.toString()}>
                        {menu.title}</MenuText>
                </MyListItem>
            );
        });
    }

    render() {
        return (
            <MenuContainer >
                { this.renderTextMenu() }
            </MenuContainer>
        );
    }
}

const MenuContainer = styled.div`
    box-sizing: border-box;
    padding: 60px 0 15px 0;
    min-width: 220px;
    background: #2a2a2a;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 101;
`;

const MyIconButton = styled(IconButton)`
    width: 32px!important;
    height: 32px!important;
    margin-bottom: 8px!important;
    color: ${ ({ active }) => active === 'true' ? '#00ab9f' : '#fff'} !important;
    &:hover {
        color: #00ab9f !important;
    }
`;

const FontIcon = styled.i`
    font-size: 14px;
    width: ${({ width }) => width};
`;

const MyLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const MyListItem = styled(ListItem)`
    white-space: nowrap;
    height: 35px !important;
    margin-bottom: 8px !important;
    color: ${ ({ active }) => active === 'true' ? '#00ab9f' : '#fff'} !important;
    border-left: ${({ active }) => active === 'true'
        ? '3px solid #00ab9f' : '3px solid #2a2a2a'} !important;
    &:hover {
        border-left: 3px solid #00ab9f !important;
    }
`;

const MenuText = styled.p`
    font-size: 13px;
    color: ${ ({ active }) => active === 'true' ? '#00ab9f' : '#e8eaed'};
`;

const mapStateToProps = ({ header }) => {
    return { header }
}

export default withRouter(connect(mapStateToProps)(Menu))