import React from 'react';
import styled from 'styled-components';
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

class Home extends React.Component {

    render() {
        return (
            <Container>

                <Header/>
                <Title> Home</Title>

                            
            </Container>
        );
    }
}

export default Home;
