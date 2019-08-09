import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { response: "" }
    }

    callAPI() {
        fetch("http://localhost:8081/")
            .then(res => res.text())
            .then(res => this.setState({ response: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    
    render() {
        return (
            <Container>
                <div>{this.state.response}</div>
            </Container>
        )
    }
}
export default Main;