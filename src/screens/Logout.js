import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 0px;
`;

class Logout extends React.Component {
    constructor(props) {
        super(props);
        sessionStorage.clear();
        sessionStorage.setItem('isLogged', 'not');
        window.location.href = "/login";
        this.state = {
            loading: false
        }

        this.submit = this.submit.bind(this);
        this.form = React.createRef();
    }

    render() {
        return (
            <Container><script>submit()</script></Container>
        );
    }
}

export default Logout;
