import React from 'react';
import styled from 'styled-components';
import { all} from '../services/Restaurant';
import DashboardList from '../components/DashboardList';
import { Link } from 'react-router-dom';
import Header from '../components/Header';



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
