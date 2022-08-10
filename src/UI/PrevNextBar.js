import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default class PrevNextBar extends Component {
    render() {
        return (
            <Container fluid>
                <Stack direction="horizontal">
                    <Button disabled={this.props.page===1} variant="dark" size="lg" onClick={this.props.onClickPrevious}>&larr; Previous</Button>
                    <Button
                        variant="dark"
                        size="lg"
                        className="ms-auto"
                        onClick={this.props.onClickNext}
                    >
                        Next &rarr;
                    </Button>
                </Stack>
            </Container>

        )
    }
}
