import React from 'react';
import styled from 'styled-components';
import { all} from '../services/Restaurant';
import RestaurantsList from '../components/RestaurantsList';


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

class Restaurants extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurantes: [],
            isGeneratingReport: false
        }

    }


    async componentDidMount() {
        const snapshot = await all();
        const restaurantes = [];

        snapshot.forEach(doc => {
            restaurantes.push({
                id: doc.id,
                ...doc.data()
            })
        });
        
        this.setState({
            restaurantes
        });
    
    }


    render() {

        const { restaurantes } = this.state;
        return (
            <Container>

                <Wrapper>
                    <Title>
                    Votar
                    </Title>
                </Wrapper>
                <RestaurantsList  restaurantes={restaurantes} /> 
            </Container>
        );
    }
}

export default Restaurants;