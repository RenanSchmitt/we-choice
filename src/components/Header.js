import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../images/logo192.png'

const Content = styled.div`
    background-color: #FF6347;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 90px;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled.div`
width: 50px;
height: 50px;
margin: 1%;
background-size: contain;
background-image: url(${image});
    align-self: center;
`;



const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
  font-family: "Verdana", Arial;
`;

const NavSection = styled.div`
    align-self: center;
    display: flex;
`;

const NavLink = styled(Link)`
    font-family: "Verdana", Arial;
    text-decoration:none;  
    color: white;
    padding: 10px 15px;
    font-size: 15px;
    font-weight: 500;
    &:hover {
        color: #FFA500;
    }
`;

class Header extends React.Component {

    render() {
        return (
            <Content>
                <Logo />
                    <Title> WeChoice </Title>

                    <NavSection>
                        <NavLink  to={"/Home"}>Home</NavLink >
                        <NavLink  to={"/restaurants"}>Restaurantes</NavLink >
                        <NavLink  to={"/Dashboard"}>Dashboard</NavLink >
                        <NavLink  to={"/Logout"}>Logout</NavLink >
                    </NavSection>
            </Content>
        );
    }
}

export default Header;
