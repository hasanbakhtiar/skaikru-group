import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({alldata}) => {
    return (
        <Col sm={12} md={3}>
            <Card >
                <Card.Img variant="top" src={alldata.photo} />
                <Card.Body>
                    <Card.Title>{alldata.title}</Card.Title>
                    <Card.Text>
                        {alldata.desc}
                    </Card.Text>
                    <Card.Text>
                        ${alldata.price}
                    </Card.Text>
                    <Button variant="dark">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard