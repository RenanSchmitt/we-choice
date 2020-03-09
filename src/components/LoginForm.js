import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
import  PropTypes from 'prop-types';

const Content = styled.div`
    width: 100%;
    max-width: 340px;
    background-color: white;
    padding: 40px 30px;
    border-radius: 10px;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        padding: 20px 10px;
    }
`;

const Top = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;


const Title = styled.h1`
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 44px;
    padding-left: 10px;
    text-align: center;
`;

const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
`;

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form_error: false,
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange = name => (event, { value }) => {
        this.setState({ [name]: value });
    };

    validate() {
        const {
           username,
           password
        } = this.state;

        const fields = [
           username,
           password
        ];

        this.setState({
            formError: false
        });

        for (let i = 0; i < fields.length; i++) {
            if (fields[i] === '') {
                this.setState({
                    formError: true
                });
                return false;
            }
        }

        return true;
    }

    submit() {
        if (!this.validate(this.state)) {
            alert('Um ou mais campos obrigatórios inválido!')
            return;
        }
    
        // data clean up
        const { username, password } = this.state;

        const data = { username, password };

        this.props.onSubmit({ data });
    }

    reset() {
        this.setState({
            form_error: false,
            username: '', 
            password: ''
        });
    }
    
    render() {

        const {
            username,
            password
        } = this.state;
       
        return (
            <Content>
                <Top>
                    <Title>WeChoice </Title>
                </Top>
                <Form onSubmit={this.submit}>
                    <Form.Input
                        label="E-mail" 
                        placeholder="Digite seu e-mail: " 
                        spellCheck="false"
                        onChange={this.handleChange('username')} 
                        value={username} >
                    </Form.Input>
                    <Form.Input
                        label="Senha" 
                        placeholder="Digite sua senha:"
                        type="password"
                        onChange={this.handleChange('password')} 
                        value={password} >
                    </Form.Input>
                    <Controls>
                        
                    </Controls>
                    <Form.Button color={'yellow'}>Entrar</Form.Button>
                </Form>
            </Content>
        );
    }
}

LoginForm.defaultProps = {
    onSubmit: () => {}
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func
};

export default LoginForm;
