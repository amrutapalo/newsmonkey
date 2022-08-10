import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


export default class NewsItem extends Component {
    titleStyle = { border: "0px", ...this.props.style }

    render() {
        return (
            <>
                <div className="container m-3">
                    <h6
                        style=
                        {
                            {
                                textAlign: "right",
                                marginBottom: "0",
                                position: "relative",
                                top: "10px",
                                zIndex: "1"
                            }
                        }
                    >
                        <Badge bg="danger">{this.props.source}</Badge>
                    </h6>
                    <Card style={{ ...this.props.style }}>
                        <Card.Img variant="top" src={this.props.urlToImage} />
                        <Card.Body>
                            <Card.Title style={this.titleStyle}>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <footer className="blockquote-footer">
                                <small>
                                    {this.props.author} on {new Date(this.props.date).toGMTString()}
                                </small>
                            </footer>
                            <a className='btn btn-primary' href={this.props.url} target="_blank">
                                Read More
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

// text-align: right;
// margin-bottom: 0px;
// z-index: 5;
// position: relative;
