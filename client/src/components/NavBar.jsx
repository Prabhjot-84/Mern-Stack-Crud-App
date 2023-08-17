import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: black;
    position: static;
`;

const Tabs = styled(NavLink) `
    font-size: 20px;
    margin: 25px;
    color: inherit; 
    text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header>
        <Toolbar>
            <Tabs to='/'>CodeFox</Tabs>
            <Tabs to='all'>All Users</Tabs>
            <Tabs to='add'>Add Users</Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBar