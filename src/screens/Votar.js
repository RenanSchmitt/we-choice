import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { vote, unique  } from '../services/Restaurant';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
`;



class Votar extends React.Component {


    async componentDidMount() {
        let id = this.props.match.params.id
        let confirm = window.confirm("Você deseja realmente votar neste restaurante?");
        const restaurant = await unique(id);
        let nvotes = parseInt(restaurant._document.proto.fields.n_votes.integerValue) + parseInt(1);
        const data = {n_votes: nvotes }
        if (confirm===true){
            await vote(id, data);
            window.location.href = "/restaurants";
        } else {
            window.location.href = "/restaurants";
        }
    }

    render() {

        return (
            <Container>
            </Container>
        );
    }
}
export default Votar;
