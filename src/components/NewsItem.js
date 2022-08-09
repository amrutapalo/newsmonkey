import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export default class NewsItem extends Component {
    titleStyle = {border:"0px", ...this.props.style}
    
    render() {
        return (
            <>
                <div className="container m-3">
                    <Card style={{ width: '18rem', ...this.props.style }}>
                        <Card.Img variant="top" src={this.props.urlToImage} />
                        <Card.Body>
                            <Card.Title style={this.titleStyle}>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>

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
