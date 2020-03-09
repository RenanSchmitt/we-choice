import React, { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import Restaurants from '../screens/Restaurants';
import { Link } from 'react-router-dom';


// https://react.semantic-ui.com/



const Content = styled.div`
    width: 30%;
    background-color: #ffffff;
    padding: 40px 0;
	border-radius: 10px;
	border: 1px solid black;
	margin: 0 auto;
    @media only screen and (max-width: 600px) {
        padding: 20px 10px;
	}
`;

const Overflow = styled.div`
	width: calc(100% - 80px);
	margin: 0 40px;
	overflow-x: auto;
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin: 0;
    }
`;
function Row(props) {
	const { restaurantsList } = props;
	return (

		<Table.Row>
			<Table.Cell>{restaurantsList.name}</Table.Cell>
			<Table.Cell>{restaurantsList.description}</Table.Cell>
			<Table.Cell> <Link to={'Votar/' + restaurantsList.id}> Votar </Link></Table.Cell>
		</Table.Row>
	);
}


class RestaurantsList extends Component {

    render() {

		if (sessionStorage.getItem('isLogged') !== 'yes'){
            alert('Por favor, faça login com seu email!');
            window.location.href = "/Login";
        }

        
		const restaurantes = this.props.restaurantes.map(restaurantsList => <Row key={restaurantsList.id} restaurantsList={restaurantsList} />);
        return (
			<Content>
				<Overflow>
					<Table size='small'>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell collapsing rowSpan='3'>Restaurante</Table.HeaderCell>
  
							</Table.Row>
                            <Table.Row>
								<Table.HeaderCell collapsing rowSpan='3'>Culinaria</Table.HeaderCell>
							</Table.Row>
							<Table.Row>
								<Table.HeaderCell collapsing rowSpan='3'>Vote</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
    	        		<Table.Body>
    	        		  	{ restaurantes }
    	        		</Table.Body>
					</Table>
				</Overflow>
			</Content>
		);
	}
}

export default RestaurantsList;
