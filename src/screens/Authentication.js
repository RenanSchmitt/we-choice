import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LoginForm from '../components/LoginForm';
import { getUsers } from '../services/User';
import Header from  '../components/Header';

const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Authentication extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }

        this.submit = this.submit.bind(this);
        this.form = React.createRef();
    }

    async submit(form) {
        const { data } = form;
        const database = await getUsers();
        const users = [];
        let auth = 'not';

        database.forEach(doc => {
            users.push({
                id: doc.id,
                ...doc.data()
            })
        });
            users.forEach( user => {
                if( data.username === user.email && `${data.password}` === `${user.password}`){
                    sessionStorage.setItem('sessionName', user.name);
                    sessionStorage.setItem('sessionEmail', user.email);
                    sessionStorage.setItem('sessionId',user.id)
                    sessionStorage.setItem('isLogged', 'yes');
                    auth = 'yes';
                    this.form.current.reset();
                    window.location.href = "/Restaurants";
                    return
                }
            })
            if(auth === 'not'){
                alert('Erro ao logar. Tente novamente.');
            }
    }

    render() {
        return (
            <Container>
                <Header />
                <Wrapper>
                    <Title>
                        Login
                    </Title>
                </Wrapper>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <LoginForm 
                                onSubmit={this.submit} ref={this.form}
                            ></LoginForm >
                        </Col>
                    </Row>
                </Grid>      
            </Container>
        );
    }
}

export default Authentication;
