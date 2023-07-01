import React from 'react'
import Head from 'next/head';
import CardList from '../../components/Card/CardList';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <div>
                <Head>
                    <title>Spotify -  Web Player: Music for everyone</title>
                </Head>
            </div>
            <Header />
            <CardList />
            <Footer />
        </>
    )
}

export default HomePage;
