import React, { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
// import { FieldLink } from './Text';
// https://react.semantic-ui.com/



const Content = styled.div`
    width: 100%;
    background-color: white;
    padding: 40px 0;
    border-radius: 10px;
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
		</Table.Row>
	);
}


class RestaurantsList extends Component {

    render() {
        
		const restaurants = this.props.restaurants.map(restaurantsList => <Row key={restaurantsList.id} restaurantsList={restaurantsList} />);
		
        return (
			<Content>
				<Overflow>
					<Table size='small'>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell collapsing rowSpan='2'>Nome do colaborador</Table.HeaderCell>
                                <Table.HeaderCell collapsing rowSpan='2'>E-mail do colaborador</Table.HeaderCell>
                                <Table.HeaderCell width={1} collapsing rowSpan='2'>Dir./Reg.</Table.HeaderCell>
                                <Table.HeaderCell collapsing rowSpan='2'>Gerência</Table.HeaderCell>
                                <Table.HeaderCell collapsing colSpan='2'>Dados do veículo</Table.HeaderCell>
                                <Table.HeaderCell width={1} collapsing rowSpan='2'>Editar</Table.HeaderCell>    
                                <Table.HeaderCell width={1} collapsing rowSpan='2'>Remover</Table.HeaderCell>    
							</Table.Row>
                            <Table.Row>
                                <Table.HeaderCell width={1} collapsing>Placa</Table.HeaderCell>
								<Table.HeaderCell collapsing>Fabricante / modelo</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
    	        		<Table.Body>
    	        		  	{ restaurants }
    	        		</Table.Body>
					</Table>
				</Overflow>
			</Content>
		);
	}
}

export default RestaurantsList;
