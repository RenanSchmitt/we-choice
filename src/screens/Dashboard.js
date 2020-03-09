import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';





// end / disabling database calls without breaking the page

// import { isAuthenticated } from '../services/Auth';
// import { Redirect } from 'react-router-dom';

const Container = styled.div`
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Home extends React.Component {

    render() {
        if (sessionStorage.getItem('isLogged') !== 'yes'){
            alert('Por favor, faça login com seu email!');
            window.location.href = "/Login";
        }
        return (
            <Container>

                <Header/>

                            
            </Container>
        );
    }
}

export default Home;
