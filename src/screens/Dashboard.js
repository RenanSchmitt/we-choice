import React from 'react';
import styled from 'styled-components';
import { all} from '../services/Restaurant';
import DashboardList from '../components/DashboardList';
import Header from '../components/Header';



const Container = styled.div`
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
`;

class Dashboard extends React.Component {

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
                <DashboardList  restaurantes={restaurantes} /> 
            </Container>
        );
    }
}

export default Dashboard;
