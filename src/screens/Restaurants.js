import React from 'react';
import styled from 'styled-components';
import { all} from '../services/Restaurant';
import RestaurantsList from '../components/RestaurantsList';
import Header from '../components/Header';



const Container = styled.div`
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
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
                <Header/>
                <RestaurantsList  restaurantes={restaurantes} /> 
            </Container>
        );
    }
}

export default Restaurants;
