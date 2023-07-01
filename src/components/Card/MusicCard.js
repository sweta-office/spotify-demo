import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import Description from '../Title/Description'
import { SpotifyImages } from '../../asserts/image'
import Image from 'next/image'
import MusicCardStyled from './MusicCardStyled'

const MusicCard = () => {
    return (
        <MusicCardStyled>
        <Container>
            <Row xs={1} md={5} className="mt-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='MusicCard'>
                            <Image variant="top" src={SpotifyImages.profile} alt='profile' className='card-img-top cardImage' height={80}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Description description={"PeaceFull Piano to help you slow down.."} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </MusicCardStyled>
    )
}

export default MusicCard
