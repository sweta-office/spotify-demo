import React from 'react'
import MainTitle from '../Title/MainTitle'
import ShowAll from '../ShowAll/ShowAll'
import { Col, Container, Row } from 'react-bootstrap'
import MusicCard from './MusicCard'

const CardList = () => {
    return (
        <Container>
            <Row>
                <Col sm={11}>
                    <MainTitle mainTitle={"Focus"} />
                </Col>
                <Col>
                    <ShowAll />
                </Col>
                <MusicCard />
            </Row>
            <Row className='mt-2'>
                <Col sm={11}>
                    <MainTitle mainTitle={"Spotify Playlist"} />
                </Col>
                <Col>
                    <ShowAll />
                </Col>
            </Row>
            <MusicCard />


        </Container>
    )
}

export default CardList
