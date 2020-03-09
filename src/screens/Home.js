import React from 'react';
import styled from 'styled-components';



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
        return (
            <Container>

                <Wrapper>
                    <Title>
                    WeChoice
                    </Title>
                </Wrapper>
                            
            </Container>
        );
    }
}

export default Home;