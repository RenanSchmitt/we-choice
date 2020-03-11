import React from 'react';
import styled from 'styled-components';
import { vote, unique  } from '../services/Restaurant';
import { voteValidation  } from '../services/User';

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
        const flag = {isVoted: 'yes' }
        
        if (confirm===true){
            if(sessionStorage.getItem('isVoted') === 'not'){
                await vote(id, data);
                await voteValidation(sessionStorage.getItem('sessionId'), flag);
                sessionStorage.setItem('isVoted', 'yes');
            } else {
                alert("Você não pode votar mais de uma vez por dia!")
            }
        } else {
            
        }
        window.location.href = "/restaurants";
    }

    render() {

        return (
            <Container>
            </Container>
        );
    }
}
export default Votar;
